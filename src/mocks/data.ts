export interface Variant { id: string; label: string; price?: number }
export interface Product {
  id: string; niche: 'adega' | 'tabacaria'; cat: string; sub: string; name: string; desc: string;
  price: number; oldPrice?: number; unit: string; origin?: string; rating: number; reviews: number;
  cold?: boolean; fav?: boolean; badge?: string; flavors?: string[]; sizes?: Variant[];
  addons?: { id: string; name: string; price: number; def?: boolean }[]; warn?: boolean;
}
const WARN = 'O Ministério da Saúde adverte: fumar causa câncer de pulmão. Venda proibida para menores de 18 anos.';
export { WARN };
export const addonsVinho = [
  { id: 'gelar', name: 'Gelar na hora', price: 0, def: true },
  { id: 'saca', name: 'Saca-rolhas', price: 490 },
  { id: 'tacas', name: 'Taças acrílicas, 2 un.', price: 990 },
];
const vinho = (id: string, name: string, origin: string, price: number, extra: Partial<Product> = {}): Product => ({
  id, niche: 'adega', cat: 'vinhos', sub: 'Tintos', name, origin, unit: '750ml', price, rating: 4.7, reviews: 80,
  cold: true, desc: 'Vinho tinto encorpado, com notas de frutas escuras e final suave. Ideal para harmonizar com carnes e queijos.',
  addons: addonsVinho, ...extra,
});
export const products: Product[] = [
  vinho('malbec', 'Malbec Reserva', 'Argentina', 8990, { oldPrice: 9990, badge: '-10%', fav: true, rating: 4.8, reviews: 126 }),
  vinho('cabernet', 'Cabernet Sauvignon', 'Chile', 5990),
  vinho('merlot', 'Merlot Suave', 'Brasil', 3990),
  vinho('carmenere', 'Carménère Gran Reserva', 'Chile', 11990),
  { id: 'essencia', niche: 'tabacaria', cat: 'essencias', sub: 'Essências', name: 'Essência Premium', unit: '50g', price: 2490,
    rating: 4.9, reviews: 342, warn: true, desc: 'Essência para narguilé de alta qualidade, fumaça densa e sabor marcante.',
    flavors: ['Menta', 'Uva', 'Melancia', 'Ice Mint', 'Frutas vermelhas', 'Pêssego', 'Maracujá'],
    sizes: [{ id: '50g', label: '50g', price: 2490 }, { id: '250g', label: '250g', price: 8990 }] },
  { id: 'carvao', niche: 'tabacaria', cat: 'carvao', sub: 'Carvão', name: 'Carvão de coco', unit: '1kg · Hexagonal', price: 1990,
    rating: 4.7, reviews: 210, warn: true, desc: 'Carvão de coco hexagonal, queima longa e sem odor.' },
  { id: 'gelo', niche: 'adega', cat: 'gelo', sub: 'Gelo', name: 'Gelo em cubos', unit: '5kg · Filtrado', price: 1490,
    rating: 4.6, reviews: 95, desc: 'Gelo filtrado em cubos, pronto para a festa.' },
];
export const prod = (id: string) => products.find((p) => p.id === id)!;
export const categories = [
  { id: 'vinhos', name: 'Vinhos', icon: 'wine' }, { id: 'destilados', name: 'Destilados', icon: 'martini' },
  { id: 'cervejas', name: 'Cervejas', icon: 'beer' }, { id: 'essencias', name: 'Essências', icon: 'leaf' },
  { id: 'carvao', name: 'Carvão', icon: 'flame' }, { id: 'gelo', name: 'Gelo', icon: 'snowflake' },
  { id: 'energeticos', name: 'Energéticos', icon: 'zap' }, { id: 'acessorios', name: 'Acessórios', icon: 'package' },
];
export const orders = [
  { id: '#CR-4821', status: 'a_caminho', date: 'Hoje, 19:52', items: 4, total: 17050, names: 'Malbec, Essência, Carvão, Gelo', ids: ['malbec', 'essencia', 'carvao', 'gelo'] },
  { id: '#CR-4790', status: 'entregue', date: '02 out', items: 3, total: 12480, names: 'Cabernet, Gelo, Carvão', ids: ['cabernet', 'gelo', 'carvao'] },
  { id: '#CR-4733', status: 'entregue', date: '24 set', items: 2, total: 6890, names: 'Merlot, Essência', ids: ['merlot', 'essencia'] },
  { id: '#CR-4701', status: 'cancelado', date: '15 set', items: 1, total: 8990, names: 'Malbec Reserva', ids: ['malbec'] },
];
export const notifs = [
  { id: 1, g: 'Hoje', t: 'pedidos', icon: 'bike', title: 'Pedido a caminho', body: 'Carlos saiu com seu pedido #CR-4821. Chega em ~12 min.', when: 'agora', unread: true, to: '/tracking' },
  { id: 2, g: 'Hoje', t: 'pedidos', icon: 'circle-check-big', title: 'Pagamento aprovado', body: 'Recebemos seu Pix de R$ 170,50.', when: '12 min', unread: true, to: '/confirmed' },
  { id: 3, g: 'Hoje', t: 'promocoes', icon: 'percent', title: 'Happy Hour: 15% off', body: 'Válido hoje, das 18h às 21h.', when: '2 h', unread: true, to: '/category/vinhos' },
  { id: 4, g: 'Ontem', t: 'pedidos', icon: 'star', title: 'Avalie seu último pedido', body: 'Conte como foi a entrega do #CR-4790.', when: 'ontem', unread: false, to: '/review' },
  { id: 5, g: 'Ontem', t: 'promocoes', icon: 'ticket', title: 'Você ganhou um cupom', body: 'CREMA10: R$ 10 de desconto na próxima compra.', when: 'ontem', unread: false, to: '/bag' },
  { id: 6, g: 'Ontem', t: 'promocoes', icon: 'leaf', title: 'Chegaram essências novas', body: 'Confira os novos sabores na Tabacaria.', when: 'ontem', unread: false, to: '/category/essencias' },
];
export const user = { name: 'Rafael Costa', email: 'rafael.costa@email.com', pts: 320 };
