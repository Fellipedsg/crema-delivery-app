import { useSyncExternalStore } from 'react';

export type Status = 'aguardando_pagamento' | 'confirmado' | 'preparando' | 'a_caminho' | 'chegou' | 'entregue' | 'cancelado';
export const FLOW: Status[] = ['confirmado', 'preparando', 'a_caminho', 'chegou', 'entregue'];
export const STATUS_LABEL: Record<Status, string> = {
  aguardando_pagamento: 'Aguardando pagamento', confirmado: 'Confirmado', preparando: 'Preparando',
  a_caminho: 'A caminho', chegou: 'Chegou', entregue: 'Entregue', cancelado: 'Cancelado',
};
export interface Order {
  id: string; code: string; customer: string; phone: string; address: string; pay: string; notes?: string;
  items: { name: string; qty: number; price: number }[]; fee: number; discount: number; status: Status;
  createdAt: number; deliveryCode: string; courier?: string;
}
export interface Product { id: string; name: string; niche: 'adega' | 'tabacaria'; category: string; price: number; stock: number; active: boolean; unit: string }
export interface Coupon { code: string; type: 'fixo' | 'percentual'; value: number; min: number; until: string; active: boolean; uses: number }
export interface Customer { id: string; name: string; phone: string; email: string; points: number; orders: number; spent: number; since: string }
export interface Settings { open: boolean; opensAt: string; closesAt: string; minOrder: number; fee: number; radiusKm: number; eta: string }
export interface DB { orders: Order[]; products: Product[]; coupons: Coupon[]; customers: Customer[]; settings: Settings }

const H = 3600_000, now = Date.now();
const o = (n: number, customer: string, items: Order['items'], status: Status, ago: number, pay = 'Pix', extra: Partial<Order> = {}): Order => ({
  id: `o${n}`, code: `#CR-${n}`, customer, phone: '(79) 9 9123-4321', address: 'Rua das Flores, 120 – Centro', pay, items, fee: 600, discount: 0,
  status, createdAt: now - ago * 60_000, deliveryCode: String(1000 + ((n * 37) % 9000)), ...extra,
});
const seed: DB = {
  orders: [
    o(4830, 'Marina Alves', [{ name: 'Cabernet Sauvignon', qty: 2, price: 5990 }, { name: 'Gelo em cubos 5kg', qty: 1, price: 1490 }], 'aguardando_pagamento', 2),
    o(4829, 'João Pedro', [{ name: 'Essência Premium 50g · Uva', qty: 2, price: 2490 }, { name: 'Carvão de coco 1kg', qty: 1, price: 1990 }], 'confirmado', 6, 'Cartão no app', { notes: 'Interfone 12' }),
    o(4828, 'Camila Souza', [{ name: 'Merlot Suave', qty: 3, price: 3990 }], 'preparando', 14, 'Dinheiro (troco p/ R$ 200)'),
    o(4827, 'Lucas Ferreira', [{ name: 'Carménère Gran Reserva', qty: 1, price: 11990 }, { name: 'Taças acrílicas', qty: 1, price: 990 }], 'a_caminho', 27, 'Pix', { courier: 'Carlos M.' }),
    o(4821, 'Rafael Costa', [{ name: 'Malbec Reserva', qty: 1, price: 8990 }, { name: 'Essência Premium 50g · Menta', qty: 2, price: 2490 }, { name: 'Carvão de coco 1kg', qty: 1, price: 1990 }, { name: 'Gelo em cubos 5kg', qty: 1, price: 1490 }], 'a_caminho', 33, 'Pix', { courier: 'Carlos M.', discount: 1000 }),
    o(4818, 'Ana Beatriz', [{ name: 'Malbec Reserva', qty: 2, price: 8990 }], 'entregue', 120, 'Pix', { courier: 'Diego R.' }),
    o(4815, 'Pedro Henrique', [{ name: 'Essência Premium 250g · Ice Mint', qty: 1, price: 8990 }, { name: 'Carvão de coco 1kg', qty: 2, price: 1990 }], 'entregue', 190, 'Cartão no app', { courier: 'Carlos M.' }),
    o(4811, 'Juliana Lima', [{ name: 'Cabernet Sauvignon', qty: 1, price: 5990 }, { name: 'Merlot Suave', qty: 1, price: 3990 }], 'entregue', 260, 'Cartão na maquininha', { courier: 'Diego R.' }),
    o(4790, 'Rafael Costa', [{ name: 'Cabernet Sauvignon', qty: 1, price: 5990 }, { name: 'Gelo em cubos 5kg', qty: 1, price: 1490 }, { name: 'Carvão de coco 1kg', qty: 1, price: 1990 }], 'entregue', 60 * 24 * 5),
    o(4701, 'Rafael Costa', [{ name: 'Malbec Reserva', qty: 1, price: 8990 }], 'cancelado', 60 * 24 * 22),
  ],
  products: [
    { id: 'malbec', name: 'Malbec Reserva', niche: 'adega', category: 'Vinhos', price: 8990, stock: 24, active: true, unit: '750ml' },
    { id: 'cabernet', name: 'Cabernet Sauvignon', niche: 'adega', category: 'Vinhos', price: 5990, stock: 31, active: true, unit: '750ml' },
    { id: 'merlot', name: 'Merlot Suave', niche: 'adega', category: 'Vinhos', price: 3990, stock: 4, active: true, unit: '750ml' },
    { id: 'carmenere', name: 'Carménère Gran Reserva', niche: 'adega', category: 'Vinhos', price: 11990, stock: 12, active: true, unit: '750ml' },
    { id: 'essencia', name: 'Essência Premium', niche: 'tabacaria', category: 'Essências', price: 2490, stock: 58, active: true, unit: '50g' },
    { id: 'carvao', name: 'Carvão de coco', niche: 'tabacaria', category: 'Carvão', price: 1990, stock: 3, active: true, unit: '1kg' },
    { id: 'gelo', name: 'Gelo em cubos', niche: 'adega', category: 'Gelo', price: 1490, stock: 40, active: true, unit: '5kg' },
  ],
  coupons: [
    { code: 'CREMA10', type: 'fixo', value: 1000, min: 5000, until: '2026-10-31', active: true, uses: 47 },
    { code: 'HAPPY15', type: 'percentual', value: 15, min: 3000, until: '2026-12-31', active: true, uses: 132 },
    { code: 'BEMVINDO', type: 'fixo', value: 500, min: 0, until: '2026-09-30', active: false, uses: 210 },
  ],
  customers: [
    { id: 'c1', name: 'Rafael Costa', phone: '(79) 9 9123-4321', email: 'rafael.costa@email.com', points: 320, orders: 8, spent: 118040, since: '2026-03-12' },
    { id: 'c2', name: 'Marina Alves', phone: '(79) 9 8812-0045', email: 'marina.alves@email.com', points: 140, orders: 4, spent: 48900, since: '2026-06-02' },
    { id: 'c3', name: 'João Pedro', phone: '(79) 9 9930-7712', email: 'joao.pedro@email.com', points: 610, orders: 15, spent: 231500, since: '2026-01-20' },
    { id: 'c4', name: 'Camila Souza', phone: '(79) 9 8704-1190', email: 'camila.souza@email.com', points: 85, orders: 2, spent: 12970, since: '2026-09-11' },
    { id: 'c5', name: 'Lucas Ferreira', phone: '(79) 9 9611-3380', email: 'lucas.ferreira@email.com', points: 220, orders: 6, spent: 76400, since: '2026-04-30' },
  ],
  settings: { open: true, opensAt: '10:00', closesAt: '23:00', minOrder: 3000, fee: 600, radiusKm: 8, eta: '30–45 min' },
};

const KEY = 'crema-admin-db-v1';
let state: DB = (() => { try { const s = localStorage.getItem(KEY); if (s) return JSON.parse(s) as DB; } catch { /* sem storage */ } return seed; })();
const subs = new Set<() => void>();
export const update = (fn: (d: DB) => DB) => {
  state = fn(state);
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* ignore */ }
  subs.forEach((f) => f());
};
export const resetDB = () => update(() => seed);
export const useDB = () => useSyncExternalStore((f) => { subs.add(f); return () => subs.delete(f); }, () => state);

export const brl = (c: number) => 'R$ ' + (c / 100).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
export const orderTotal = (x: Order) => x.items.reduce((a, i) => a + i.qty * i.price, 0) + x.fee - x.discount;
export const ago = (t: number) => { const m = Math.max(0, Math.round((Date.now() - t) / 60000)); return m < 1 ? 'agora' : m < 60 ? `${m} min` : m < 1440 ? `${Math.floor(m / 60)} h` : `${Math.floor(m / 1440)} d`; };
// Regra da SPEC: cancelamento só até "preparando"
export const canCancel = (s: Status) => s === 'aguardando_pagamento' || s === 'confirmado' || s === 'preparando';
export const nextStatus = (s: Status): Status | null => (s === 'aguardando_pagamento' ? 'confirmado' : FLOW[FLOW.indexOf(s) + 1] ?? null);
// Anvisa: proibido vender cigarros eletrônicos, vapes e pods
export const BANNED = /vape|pod\b|pods\b|cigarro eletr|e-?cig|juul|ignite/i;
