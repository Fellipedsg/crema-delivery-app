import { useState } from 'react';
import { useDB, update, brl, ago, orderTotal, STATUS_LABEL, FLOW, canCancel, nextStatus, Order, Status } from './db';

const kind = (s: Status) => (s === 'entregue' ? 'g' : s === 'cancelado' ? 'w' : s === 'aguardando_pagamento' ? 'm' : '');
export const Badge = ({ s }: { s: Status }) => <span className={'badge ' + kind(s)}>{STATUS_LABEL[s]}</span>;
const sameDay = (t: number) => new Date(t).toDateString() === new Date().toDateString();

export function Dashboard() {
  const { orders, products } = useDB();
  const valid = orders.filter((o) => o.status !== 'cancelado' && o.status !== 'aguardando_pagamento');
  const today = valid.filter((o) => sameDay(o.createdAt));
  const rev = today.reduce((a, o) => a + orderTotal(o), 0);
  const active = orders.filter((o) => ['confirmado', 'preparando', 'a_caminho', 'chegou'].includes(o.status)).length;
  const days = [...Array(7)].map((_, i) => { const d = new Date(); d.setDate(d.getDate() - (6 - i)); return d; });
  // protótipo: dias anteriores usam um histórico fixo; hoje usa os pedidos reais
  const hist = [1820, 2410, 1960, 3120, 2780, 3540];
  const vals = days.map((_, i) => (i < 6 ? hist[i] * 100 : rev));
  const max = Math.max(...vals, 1);
  const sold: Record<string, number> = {};
  valid.forEach((o) => o.items.forEach((i) => { const n = i.name.split(' · ')[0].replace(/ \d+(g|kg)$/, ''); sold[n] = (sold[n] ?? 0) + i.qty; }));
  const top = Object.entries(sold).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const low = products.filter((p) => p.active && p.stock <= 5);
  return (<>
    <div className="top"><div><h1>Visão geral</h1><div className="muted">Resumo de hoje</div></div></div>
    <div className="grid g4" style={{ marginBottom: 14 }}>
      <div className="card kpi"><div className="l">Faturamento de hoje</div><div className="v">{brl(rev)}</div></div>
      <div className="card kpi"><div className="l">Pedidos de hoje</div><div className="v">{today.length}</div></div>
      <div className="card kpi"><div className="l">Ticket médio</div><div className="v">{brl(today.length ? rev / today.length : 0)}</div></div>
      <div className="card kpi"><div className="l">Em andamento</div><div className="v">{active}</div><div className="s"><a href="#/pedidos" style={{ color: 'inherit' }}>ver pedidos →</a></div></div>
    </div>
    <div className="grid g2" style={{ marginBottom: 14 }}>
      <div className="card"><h2 style={{ marginBottom: 14 }}>Faturamento · últimos 7 dias</h2>
        <div className="bars">{vals.map((v, i) => <div className="bar" key={i}><span className="sm muted">{Math.round(v / 100)}</span><i style={{ height: `${Math.max(4, (v / max) * 100)}%` }} /><span className="sm muted">{days[i].toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '')}</span></div>)}</div></div>
      <div className="card"><h2 style={{ marginBottom: 10 }}>Mais vendidos</h2>
        {top.map(([n, q]) => <div key={n} className="row" style={{ justifyContent: 'space-between', padding: '6px 0' }}><span>{n}</span><b className="gold">{q} un</b></div>)}</div>
    </div>
    <div className="grid g2">
      <div className="card"><h2 style={{ marginBottom: 10 }}>Últimos pedidos</h2>
        <table><tbody>{orders.slice(0, 5).map((o) => <tr key={o.id}><td><b>{o.code}</b><div className="sm muted">{o.customer}</div></td><td><Badge s={o.status} /></td><td className="sm muted">{ago(o.createdAt)}</td><td style={{ textAlign: 'right' }} className="gold"><b>{brl(orderTotal(o))}</b></td></tr>)}</tbody></table></div>
      <div className="card"><h2 style={{ marginBottom: 10 }}>Estoque baixo</h2>
        {low.length === 0 && <div className="muted">Tudo certo por aqui.</div>}
        {low.map((p) => <div key={p.id} className="row" style={{ justifyContent: 'space-between', padding: '6px 0' }}><span>{p.name}</span><span className="badge w">{p.stock} un</span></div>)}
        <a href="#/produtos" className="sm gold">gerenciar produtos →</a></div>
    </div>
  </>);
}

function OrderModal({ id, onClose }: { id: string; onClose: () => void }) {
  const o = useDB().orders.find((x) => x.id === id)!;
  const [code, setCode] = useState(''); const [err, setErr] = useState('');
  const set = (patch: Partial<Order>) => update((d) => ({ ...d, orders: d.orders.map((x) => (x.id === id ? { ...x, ...patch } : x)) }));
  const next = nextStatus(o.status);
  const advance = () => {
    if (!next) return;
    // regra: a entrega só é concluída com o código de 4 dígitos informado ao entregador
    if (next === 'entregue' && code !== o.deliveryCode) return setErr('Código de entrega incorreto.');
    set({ status: next, courier: next === 'a_caminho' ? o.courier ?? 'Carlos M.' : o.courier }); setErr(''); setCode('');
  };
  const cancel = () => { if (confirm(`Cancelar o pedido ${o.code}?`)) set({ status: 'cancelado' }); };
  const idx = FLOW.indexOf(o.status);
  return (
    <div className="modal" onClick={onClose}><div className="card" onClick={(e) => e.stopPropagation()}>
      <div className="row" style={{ justifyContent: 'space-between' }}><h2>{o.code}</h2><Badge s={o.status} /></div>
      <div className="steps">{FLOW.map((s, i) => <i key={s} className={i <= idx ? 'on' : ''} />)}</div>
      <div className="muted sm" style={{ marginBottom: 10 }}>{o.customer} · {o.phone}<br />{o.address}{o.notes && <><br />Obs.: {o.notes}</>}</div>
      <table><tbody>{o.items.map((i, k) => <tr key={k}><td>{i.qty}× {i.name}</td><td style={{ textAlign: 'right' }}>{brl(i.qty * i.price)}</td></tr>)}
        <tr><td className="muted">Entrega</td><td style={{ textAlign: 'right' }}>{brl(o.fee)}</td></tr>
        {o.discount > 0 && <tr><td className="muted">Desconto</td><td style={{ textAlign: 'right', color: 'var(--ok)' }}>- {brl(o.discount)}</td></tr>}
        <tr><td><b>Total · {o.pay}</b></td><td style={{ textAlign: 'right' }} className="gold"><b>{brl(orderTotal(o))}</b></td></tr></tbody></table>
      <div className="row sm muted" style={{ margin: '10px 0' }}>🪪 Conferir documento com foto (18+) na entrega{o.courier && <> · Entregador: {o.courier}</>}</div>
      {o.status === 'chegou' && <div className="f"><label>Código de entrega informado pelo cliente</label><input value={code} maxLength={4} inputMode="numeric" onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))} placeholder="4 dígitos" />{err && <div className="err" style={{ margin: '6px 0 0' }}>{err}</div>}</div>}
      <div className="row" style={{ justifyContent: 'flex-end', marginTop: 8 }}>
        <button className="btn d" onClick={onClose}>Fechar</button>
        {canCancel(o.status) && <button className="btn r" onClick={cancel}>Cancelar pedido</button>}
        {next && o.status !== 'cancelado' && <button className="btn" onClick={advance} disabled={o.status === 'chegou' && code.length < 4}>{{ aguardando_pagamento: 'Confirmar pagamento', confirmado: 'Iniciar preparo', preparando: 'Saiu para entrega', a_caminho: 'Entregador chegou', chegou: 'Concluir entrega' }[o.status as 'chegou']}</button>}
      </div>
      {!canCancel(o.status) && o.status !== 'entregue' && o.status !== 'cancelado' && <div className="muted sm" style={{ marginTop: 8 }}>Cancelamento só é permitido até "Preparando".</div>}
    </div></div>
  );
}

export function Orders() {
  const { orders } = useDB(); const [sel, setSel] = useState<string>(); const [view, setView] = useState<'quadro' | 'lista'>('quadro'); const [q, setQ] = useState('');
  const list = orders.filter((o) => (o.code + o.customer).toLowerCase().includes(q.toLowerCase()));
  const cols: [string, Status[]][] = [['Novos', ['aguardando_pagamento', 'confirmado']], ['Preparando', ['preparando']], ['Em entrega', ['a_caminho', 'chegou']], ['Finalizados', ['entregue', 'cancelado']]];
  return (<>
    <div className="top"><div><h1>Pedidos</h1><div className="muted">{orders.length} no total</div></div>
      <div className="row"><input style={{ width: 220 }} placeholder="Buscar código ou cliente" value={q} onChange={(e) => setQ(e.target.value)} />
        <div className="tabs" style={{ margin: 0 }}>{(['quadro', 'lista'] as const).map((v) => <span key={v} className={'chip' + (view === v ? ' on' : '')} onClick={() => setView(v)}>{v === 'quadro' ? 'Quadro' : 'Lista'}</span>)}</div></div></div>
    {view === 'quadro' ? <div className="kan">{cols.map(([t, ss]) => { const l = list.filter((o) => ss.includes(o.status)); return (
      <div key={t}><h3>{t} · {l.length}</h3>{l.map((o) => <div key={o.id} className="oc" onClick={() => setSel(o.id)}>
        <div className="row" style={{ justifyContent: 'space-between' }}><b>{o.code}</b><span className="sm muted">{ago(o.createdAt)}</span></div>
        <div className="sm muted">{o.customer} · {o.items.reduce((a, i) => a + i.qty, 0)} itens</div>
        <div className="row" style={{ justifyContent: 'space-between', marginTop: 6 }}><Badge s={o.status} /><b className="gold">{brl(orderTotal(o))}</b></div></div>)}
        {l.length === 0 && <div className="muted sm">Nenhum pedido.</div>}</div>); })}</div>
    : <div className="card"><table><thead><tr><th>Pedido</th><th>Cliente</th><th>Pagamento</th><th>Status</th><th>Quando</th><th style={{ textAlign: 'right' }}>Total</th></tr></thead>
      <tbody>{list.map((o) => <tr key={o.id} style={{ cursor: 'pointer' }} onClick={() => setSel(o.id)}><td><b>{o.code}</b></td><td>{o.customer}</td><td className="muted">{o.pay}</td><td><Badge s={o.status} /></td><td className="muted">{ago(o.createdAt)}</td><td style={{ textAlign: 'right' }} className="gold"><b>{brl(orderTotal(o))}</b></td></tr>)}</tbody></table></div>}
    {sel && <OrderModal id={sel} onClose={() => setSel(undefined)} />}
  </>);
}
