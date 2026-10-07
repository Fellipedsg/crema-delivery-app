import { useEffect, useState } from 'react';
import { useDB, resetDB } from './db';
import { Dashboard, Orders } from './pages1';
import { Products, Coupons } from './pages2';
import { Customers, SettingsPage } from './pages3';

const routes = [
  ['dashboard', '📊', 'Visão geral'], ['pedidos', '🧾', 'Pedidos'], ['produtos', '🍷', 'Produtos'],
  ['cupons', '🎟️', 'Cupons'], ['clientes', '👥', 'Clientes'], ['config', '⚙️', 'Configurações'],
] as const;
const useHash = () => {
  const [h, setH] = useState(location.hash.slice(2) || 'dashboard');
  useEffect(() => { const f = () => setH(location.hash.slice(2) || 'dashboard'); addEventListener('hashchange', f); return () => removeEventListener('hashchange', f); }, []);
  return h;
};

function Login({ onOk }: { onOk: () => void }) {
  const [u, setU] = useState('admin@crema.com'); const [p, setP] = useState(''); const [e, setE] = useState('');
  // protótipo: qualquer senha com 6+ caracteres entra (ponytail: trocar por auth real no backend)
  const go = () => (p.length >= 6 ? onOk() : setE('Informe a senha (mín. 6 caracteres).'));
  return (
    <div className="login"><div className="card">
      <div className="brand" style={{ padding: 0, marginBottom: 18 }}>CREMA<small>Painel da loja</small></div>
      <div className="f"><label>E-mail</label><input value={u} onChange={(x) => setU(x.target.value)} /></div>
      <div className="f"><label>Senha</label><input type="password" value={p} onChange={(x) => setP(x.target.value)} onKeyDown={(x) => x.key === 'Enter' && go()} placeholder="qualquer senha com 6+ caracteres" /></div>
      {e && <div className="err">{e}</div>}
      <button className="btn" style={{ width: '100%' }} onClick={go}>Entrar</button>
      <p className="muted sm" style={{ marginTop: 14 }}>Protótipo com dados fictícios, salvos só neste navegador.</p>
    </div></div>
  );
}

export default function App() {
  const [auth, setAuth] = useState(() => sessionStorage.getItem('crema-admin') === '1');
  const page = useHash(); const db = useDB();
  if (!auth) return <Login onOk={() => { sessionStorage.setItem('crema-admin', '1'); setAuth(true); }} />;
  const pending = db.orders.filter((o) => o.status === 'confirmado' || o.status === 'aguardando_pagamento').length;
  const Page = { dashboard: Dashboard, pedidos: Orders, produtos: Products, cupons: Coupons, clientes: Customers, config: SettingsPage }[page] ?? Dashboard;
  return (
    <div className="app">
      <aside className="side">
        <div className="brand">CREMA<small>Painel da loja</small></div>
        {routes.map(([k, i, l]) => <a key={k} href={`#/${k}`} className={'nav' + (page === k ? ' on' : '')}><span>{i}</span>{l}{k === 'pedidos' && pending > 0 && <b>{pending}</b>}</a>)}
        <div className="grow" />
        <div className="row sm muted" style={{ padding: '0 10px' }}><span style={{ width: 8, height: 8, borderRadius: 4, background: db.settings.open ? 'var(--ok)' : 'var(--wl)' }} />Loja {db.settings.open ? 'aberta' : 'fechada'}</div>
        <button className="btn d sm" onClick={() => { if (confirm('Restaurar os dados de exemplo?')) resetDB(); }}>Restaurar dados</button>
        <button className="btn o sm" onClick={() => { sessionStorage.removeItem('crema-admin'); setAuth(false); }}>Sair</button>
      </aside>
      <main className="main"><Page /></main>
    </div>
  );
}
