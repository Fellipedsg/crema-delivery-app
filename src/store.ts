import { create } from 'zustand';
import { prod, addonsVinho } from './mocks/data';

export interface CartItem { key: string; id: string; qty: number; flavor?: string; size?: string; addons: string[]; unit: number; label: string }
export type Pay = 'pix' | 'card' | 'machine' | 'cash';
interface S {
  items: CartItem[]; coupon: boolean; pay: Pay; when: 'now' | 'later'; birth: string;
  add: (i: Omit<CartItem, 'key'>) => void; setQty: (key: string, q: number) => void; clear: () => void;
  setCoupon: (v: boolean) => void; setPay: (p: Pay) => void; setWhen: (w: 'now' | 'later') => void; setBirth: (b: string) => void;
}
const seed: CartItem[] = [
  { key: 'a', id: 'malbec', qty: 1, addons: ['gelar'], unit: 8990, label: '750ml · Gelar na hora' },
  { key: 'b', id: 'essencia', qty: 2, flavor: 'Menta', size: '50g', addons: [], unit: 2490, label: '50g · Sabor: Menta' },
  { key: 'c', id: 'carvao', qty: 1, addons: [], unit: 1990, label: '1kg · Hexagonal' },
  { key: 'd', id: 'gelo', qty: 1, addons: [], unit: 1490, label: '5kg · Filtrado' },
];
export const useStore = create<S>((set) => ({
  items: seed, coupon: true, pay: 'pix', when: 'now', birth: '',
  add: (i) => set((s) => {
    const key = `${i.id}|${i.flavor}|${i.size}|${i.addons.join(',')}`;
    const ex = s.items.find((x) => x.key === key);
    return { items: ex ? s.items.map((x) => (x.key === key ? { ...x, qty: x.qty + i.qty } : x)) : [...s.items, { ...i, key }] };
  }),
  setQty: (key, q) => set((s) => ({ items: q <= 0 ? s.items.filter((x) => x.key !== key) : s.items.map((x) => (x.key === key ? { ...x, qty: q } : x)) })),
  clear: () => set({ items: [] }),
  setCoupon: (coupon) => set({ coupon }), setPay: (pay) => set({ pay }), setWhen: (when) => set({ when }), setBirth: (birth) => set({ birth }),
}));
export const quickItem = (id: string): Omit<CartItem, 'key'> => {
  const p = prod(id);
  return { id, qty: 1, addons: p.addons?.filter((a) => a.def).map((a) => a.id) ?? [], unit: p.price, label: p.unit };
};
export const totals = (items: CartItem[], coupon: boolean) => {
  const subtotal = items.reduce((a, i) => a + i.unit * i.qty, 0);
  const delivery = items.length ? 600 : 0;
  const discount = coupon && items.length ? 1000 : 0;
  return { subtotal, delivery, discount, total: subtotal + delivery - discount };
};
export const payLabel: Record<Pay, string> = { pix: 'Pix', card: 'Cartão de crédito', machine: 'Cartão na maquininha', cash: 'Dinheiro' };
void addonsVinho;
