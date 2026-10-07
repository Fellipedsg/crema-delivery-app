import { useState } from 'react';
import { useDB, update, brl, Settings } from './db';

const tier = (p: number) => (p >= 600 ? ['Black', 'm'] : p >= 300 ? ['Ouro', ''] : ['Prata', 'm']);
export function Customers() {
  const { customers } = useDB(); const [q, setQ] = useState('');
  const list = customers.filter((c) => (c.name + c.email + c.phone).toLowerCase().includes(q.toLowerCase()));
  return (<>
    <div className="top"><div><h1>Clientes</h1><div className="muted">{customers.length} cadastrados · 1 ponto a cada R$ 1 · 500 pts = R$ 20</div></div><input style={{ width: 240 }} placeholder="Buscar cliente" value={q} onChange={(e) => setQ(e.target.value)} /></div>
    <div className="card" style={{ overflowX: 'auto' }}><table><thead><tr><th>Cliente</th><th>Contato</th><th>Clube Crema</th><th>Pedidos</th><th>Total gasto</th><th>Desde</th></tr></thead>
      <tbody>{list.map((c) => { const [t, k] = tier(c.points); return <tr key={c.id}><td><b>{c.name}</b></td><td className="muted sm">{c.phone}<br />{c.email}</td><td><span className={'badge ' + k}>{t}</span> <span className="gold"><b>{c.points}</b> pts</span></td><td>{c.orders}</td><td className="gold"><b>{brl(c.spent)}</b></td><td className="muted">{c.since.split('-').reverse().join('/')}</td></tr>; })}</tbody></table></div>
  </>);
}

export function SettingsPage() {
  const { settings: s } = useDB(); const [f, setF] = useState({ ...s, minOrder: String(s.minOrder / 100), fee: String(s.fee / 100), radiusKm: String(s.radiusKm) }); const [ok, setOk] = useState(false);
  const save = () => {
    const n: Settings = { ...s, opensAt: f.opensAt, closesAt: f.closesAt, eta: f.eta, minOrder: Math.round(parseFloat(f.minOrder.replace(',', '.')) * 100) || 0, fee: Math.round(parseFloat(f.fee.replace(',', '.')) * 100) || 0, radiusKm: parseFloat(f.radiusKm) || 0 };
    update((d) => ({ ...d, settings: n })); setOk(true); setTimeout(() => setOk(false), 2000);
  };
  return (<>
    <div className="top"><div><h1>Configurações</h1><div className="muted">Regras de funcionamento e entrega</div></div></div>
    <div className="grid g2">
      <div className="card"><h2 style={{ marginBottom: 14 }}>Funcionamento</h2>
        <div className="row" style={{ justifyContent: 'space-between', marginBottom: 14 }}><div><b>Loja aberta</b><div className="muted sm">Fechada: o checkout é bloqueado no app e o cliente pode agendar.</div></div>
          <span className={'sw' + (s.open ? ' on' : '')} onClick={() => update((d) => ({ ...d, settings: { ...d.settings, open: !d.settings.open } }))} /></div>
        <div className="row"><div className="f"><label>Abre às</label><input type="time" value={f.opensAt} onChange={(e) => setF({ ...f, opensAt: e.target.value })} /></div><div className="f"><label>Fecha às</label><input type="time" value={f.closesAt} onChange={(e) => setF({ ...f, closesAt: e.target.value })} /></div></div>
        <div className="f"><label>Previsão de entrega exibida</label><input value={f.eta} onChange={(e) => setF({ ...f, eta: e.target.value })} /></div></div>
      <div className="card"><h2 style={{ marginBottom: 14 }}>Entrega</h2>
        <div className="f"><label>Taxa de entrega (R$)</label><input inputMode="decimal" value={f.fee} onChange={(e) => setF({ ...f, fee: e.target.value })} /></div>
        <div className="f"><label>Pedido mínimo (R$)</label><input inputMode="decimal" value={f.minOrder} onChange={(e) => setF({ ...f, minOrder: e.target.value })} /></div>
        <div className="f"><label>Raio de entrega (km)</label><input inputMode="decimal" value={f.radiusKm} onChange={(e) => setF({ ...f, radiusKm: e.target.value })} /></div></div>
    </div>
    <div className="row" style={{ marginTop: 14 }}><button className="btn" onClick={save}>Salvar configurações</button>{ok && <span style={{ color: 'var(--ok)' }}>✓ Salvo</span>}</div>
  </>);
}
