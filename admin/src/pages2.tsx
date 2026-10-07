import { useState } from 'react';
import { useDB, update, brl, BANNED, Product, Coupon } from './db';

const Sw = ({ on, onClick }: { on: boolean; onClick: () => void }) => <span className={'sw' + (on ? ' on' : '')} onClick={onClick} role="switch" aria-checked={on} />;

function ProductForm({ p, onClose }: { p?: Product; onClose: () => void }) {
  const [f, setF] = useState({ name: p?.name ?? '', niche: p?.niche ?? 'adega', category: p?.category ?? 'Vinhos', price: p ? String(p.price / 100) : '', stock: String(p?.stock ?? 0), unit: p?.unit ?? '' });
  const [err, setErr] = useState('');
  const save = () => {
    const price = Math.round(parseFloat(f.price.replace(',', '.')) * 100);
    if (!f.name.trim()) return setErr('Informe o nome.');
    if (BANNED.test(f.name + ' ' + f.category)) return setErr('Cigarros eletrônicos, vapes e pods têm venda proibida no Brasil (Anvisa). Não é possível cadastrar.');
    if (!(price > 0)) return setErr('Informe um preço válido.');
    const item: Product = { id: p?.id ?? `p${Date.now()}`, name: f.name.trim(), niche: f.niche as Product['niche'], category: f.category, price, stock: Math.max(0, parseInt(f.stock) || 0), unit: f.unit, active: p?.active ?? true };
    update((d) => ({ ...d, products: p ? d.products.map((x) => (x.id === p.id ? item : x)) : [...d.products, item] })); onClose();
  };
  return (<div className="modal" onClick={onClose}><div className="card" onClick={(e) => e.stopPropagation()}>
    <h2 style={{ marginBottom: 16 }}>{p ? 'Editar produto' : 'Novo produto'}</h2>
    <div className="f"><label>Nome</label><input value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></div>
    <div className="row"><div className="f"><label>Nicho</label><select value={f.niche} onChange={(e) => setF({ ...f, niche: e.target.value as 'adega' })}><option value="adega">Adega</option><option value="tabacaria">Tabacaria</option></select></div>
      <div className="f"><label>Categoria</label><input value={f.category} onChange={(e) => setF({ ...f, category: e.target.value })} /></div></div>
    <div className="row"><div className="f"><label>Preço (R$)</label><input value={f.price} inputMode="decimal" onChange={(e) => setF({ ...f, price: e.target.value })} /></div>
      <div className="f"><label>Estoque</label><input value={f.stock} inputMode="numeric" onChange={(e) => setF({ ...f, stock: e.target.value })} /></div>
      <div className="f"><label>Unidade</label><input value={f.unit} placeholder="750ml, 1kg…" onChange={(e) => setF({ ...f, unit: e.target.value })} /></div></div>
    <div className="muted sm" style={{ marginBottom: 12 }}>Todo o catálogo é 18+. Produtos de tabacaria exibem o selo e a advertência do Ministério da Saúde no app.</div>
    {err && <div className="err">{err}</div>}
    <div className="row" style={{ justifyContent: 'flex-end' }}><button className="btn d" onClick={onClose}>Cancelar</button><button className="btn" onClick={save}>Salvar</button></div>
  </div></div>);
}

export function Products() {
  const { products } = useDB(); const [edit, setEdit] = useState<Product | 'new'>(); const [q, setQ] = useState(''); const [n, setN] = useState('todos');
  const list = products.filter((p) => (n === 'todos' || p.niche === n) && p.name.toLowerCase().includes(q.toLowerCase()));
  const patch = (id: string, v: Partial<Product>) => update((d) => ({ ...d, products: d.products.map((x) => (x.id === id ? { ...x, ...v } : x)) }));
  return (<>
    <div className="top"><div><h1>Produtos</h1><div className="muted">{products.length} cadastrados</div></div><button className="btn" onClick={() => setEdit('new')}>+ Novo produto</button></div>
    <div className="row" style={{ marginBottom: 14 }}><input style={{ width: 240 }} placeholder="Buscar produto" value={q} onChange={(e) => setQ(e.target.value)} />
      <div className="tabs" style={{ margin: 0 }}>{['todos', 'adega', 'tabacaria'].map((x) => <span key={x} className={'chip' + (n === x ? ' on' : '')} onClick={() => setN(x)}>{x[0].toUpperCase() + x.slice(1)}</span>)}</div></div>
    <div className="card" style={{ overflowX: 'auto' }}><table><thead><tr><th>Produto</th><th>Nicho</th><th>Preço</th><th>Estoque</th><th>Ativo</th><th /></tr></thead>
      <tbody>{list.map((p) => <tr key={p.id}><td><b>{p.name}</b><div className="sm muted">{p.category} · {p.unit}</div></td><td><span className="badge m">{p.niche}</span>{p.niche === 'tabacaria' && <span className="badge w" style={{ marginLeft: 6 }}>18+</span>}</td>
        <td className="gold"><b>{brl(p.price)}</b></td>
        <td><div className="row" style={{ gap: 6 }}><button className="btn d sm" onClick={() => patch(p.id, { stock: Math.max(0, p.stock - 1) })}>−</button><span className={p.stock <= 5 ? 'badge w' : ''} style={{ minWidth: 28, textAlign: 'center' }}>{p.stock}</span><button className="btn d sm" onClick={() => patch(p.id, { stock: p.stock + 1 })}>+</button></div></td>
        <td><Sw on={p.active} onClick={() => patch(p.id, { active: !p.active })} /></td>
        <td style={{ textAlign: 'right' }}><button className="btn o sm" onClick={() => setEdit(p)}>Editar</button> <button className="btn r sm" onClick={() => confirm(`Excluir ${p.name}?`) && update((d) => ({ ...d, products: d.products.filter((x) => x.id !== p.id) }))}>Excluir</button></td></tr>)}</tbody></table></div>
    {edit && <ProductForm p={edit === 'new' ? undefined : edit} onClose={() => setEdit(undefined)} />}
  </>);
}

export function Coupons() {
  const { coupons } = useDB(); const [f, setF] = useState({ code: '', type: 'fixo', value: '', min: '', until: '' }); const [err, setErr] = useState('');
  const add = () => {
    const code = f.code.trim().toUpperCase(); const v = parseFloat(f.value.replace(',', '.'));
    if (!/^[A-Z0-9]{4,12}$/.test(code)) return setErr('Código: 4 a 12 letras/números.');
    if (coupons.some((c) => c.code === code)) return setErr('Esse código já existe.');
    if (!(v > 0) || (f.type === 'percentual' && v > 100)) return setErr('Valor inválido.');
    if (!f.until) return setErr('Informe a validade.');
    const c: Coupon = { code, type: f.type as Coupon['type'], value: f.type === 'fixo' ? Math.round(v * 100) : v, min: Math.round((parseFloat(f.min.replace(',', '.')) || 0) * 100), until: f.until, active: true, uses: 0 };
    update((d) => ({ ...d, coupons: [c, ...d.coupons] })); setF({ code: '', type: 'fixo', value: '', min: '', until: '' }); setErr('');
  };
  const patch = (code: string, v: Partial<Coupon>) => update((d) => ({ ...d, coupons: d.coupons.map((x) => (x.code === code ? { ...x, ...v } : x)) }));
  return (<>
    <div className="top"><div><h1>Cupons</h1><div className="muted">Um cupom por pedido · valida pedido mínimo e validade</div></div></div>
    <div className="card" style={{ marginBottom: 14 }}><h2 style={{ marginBottom: 12 }}>Novo cupom</h2>
      <div className="row"><div className="f"><label>Código</label><input value={f.code} onChange={(e) => setF({ ...f, code: e.target.value })} placeholder="CREMA20" /></div>
        <div className="f"><label>Tipo</label><select value={f.type} onChange={(e) => setF({ ...f, type: e.target.value })}><option value="fixo">Valor fixo (R$)</option><option value="percentual">Percentual (%)</option></select></div>
        <div className="f"><label>Valor</label><input value={f.value} inputMode="decimal" onChange={(e) => setF({ ...f, value: e.target.value })} /></div>
        <div className="f"><label>Pedido mínimo (R$)</label><input value={f.min} inputMode="decimal" onChange={(e) => setF({ ...f, min: e.target.value })} /></div>
        <div className="f"><label>Válido até</label><input type="date" value={f.until} onChange={(e) => setF({ ...f, until: e.target.value })} /></div></div>
      {err && <div className="err">{err}</div>}<button className="btn" onClick={add}>Criar cupom</button></div>
    <div className="card" style={{ overflowX: 'auto' }}><table><thead><tr><th>Código</th><th>Desconto</th><th>Mínimo</th><th>Validade</th><th>Usos</th><th>Ativo</th><th /></tr></thead>
      <tbody>{coupons.map((c) => { const exp = c.until < new Date().toISOString().slice(0, 10); return <tr key={c.code}><td><b>{c.code}</b></td><td className="gold">{c.type === 'fixo' ? brl(c.value) : c.value + '%'}</td><td>{c.min ? brl(c.min) : '—'}</td>
        <td>{c.until.split('-').reverse().join('/')} {exp && <span className="badge w">expirado</span>}</td><td>{c.uses}</td><td><Sw on={c.active && !exp} onClick={() => patch(c.code, { active: !c.active })} /></td>
        <td style={{ textAlign: 'right' }}><button className="btn r sm" onClick={() => confirm(`Excluir ${c.code}?`) && update((d) => ({ ...d, coupons: d.coupons.filter((x) => x.code !== c.code) }))}>Excluir</button></td></tr>; })}</tbody></table></div>
  </>);
}
