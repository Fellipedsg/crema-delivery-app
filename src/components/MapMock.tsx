import { View } from 'react-native';
import Svg, { Path, Rect, Line } from 'react-native-svg';
import { c } from '../theme';
import { Ic } from './ui';

// Mapa estilizado (sem react-native-maps no protótipo). route: desenha a rota dourada loja → casa.
export const MapMock = ({ height, pin, route, full }: { height: number; pin?: boolean; route?: boolean; full?: boolean }) => (
  <View style={{ height, borderRadius: full ? 0 : 16, overflow: 'hidden', backgroundColor: '#1A140E', borderWidth: full ? 0 : 1, borderColor: c.line }}>
    <Svg width="100%" height="100%" viewBox="0 0 390 300" preserveAspectRatio="none">
      <Rect width="390" height="300" fill="#1A140E" />
      {[40, 110, 180, 250].map((y) => <Line key={y} x1="0" x2="390" y1={y} y2={y + 20} stroke="#2B2219" strokeWidth="10" />)}
      {[50, 140, 230, 320].map((x) => <Line key={x} y1="0" y2="300" x1={x} x2={x - 30} stroke="#2B2219" strokeWidth="10" />)}
      <Path d="M0 150 C100 120 200 190 390 130" stroke="#23324A" strokeWidth="18" fill="none" opacity={0.6} />
      {route && <Path d="M70 235 C130 235 140 150 210 150 S300 70 330 60" stroke={c.gold} strokeWidth="4" fill="none" strokeDasharray="1 0" />}
    </Svg>
    {pin && <View style={{ position: 'absolute', left: '50%', top: '50%', marginLeft: -16, marginTop: -34 }}><Ic n="map-pin" s={32} color={c.wineLight} fill={c.wine} /></View>}
  </View>
);

// pontos da rota em % do mapa (mesmo traçado do Path, viewBox 390×300) — usados p/ posicionar pins/entregador
export const routePct = [
  { x: 70 / 390, y: 235 / 300 }, { x: 140 / 390, y: 200 / 300 }, { x: 210 / 390, y: 150 / 300 }, { x: 330 / 390, y: 60 / 300 },
];
