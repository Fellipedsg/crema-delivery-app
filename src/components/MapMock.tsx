import { View } from 'react-native';
import Svg, { Path, Rect, Line } from 'react-native-svg';
import { c } from '../theme';
import { Ic } from './ui';

// Mapa estilizado (sem react-native-maps no protótipo). route: desenha a rota dourada loja → casa.
export const MapMock = ({ height, pin, route, full }: { height: number; pin?: boolean; route?: boolean; full?: boolean }) => (
  <View style={{ height, borderRadius: full ? 0 : 16, overflow: 'hidden', backgroundColor: '#1A140E', borderWidth: full ? 0 : 1, borderColor: c.line }}>
    <Svg width="100%" height="100%" viewBox="0 0 390 300" preserveAspectRatio="xMidYMid slice">
      <Rect width="390" height="300" fill="#1A140E" />
      {[40, 110, 180, 250].map((y) => <Line key={y} x1="0" x2="390" y1={y} y2={y + 20} stroke="#2B2219" strokeWidth="10" />)}
      {[50, 140, 230, 320].map((x) => <Line key={x} y1="0" y2="300" x1={x} x2={x - 30} stroke="#2B2219" strokeWidth="10" />)}
      <Path d="M0 150 C100 120 200 190 390 130" stroke="#23324A" strokeWidth="18" fill="none" opacity={0.6} />
      {route && <Path d="M70 230 C130 230 140 150 210 150 S300 80 330 70" stroke={c.gold} strokeWidth="4" fill="none" strokeDasharray="1 0" />}
    </Svg>
    {pin && <View style={{ position: 'absolute', left: '50%', top: '50%', marginLeft: -16, marginTop: -34 }}><Ic n="map-pin" s={32} color={c.wineLight} fill={c.wine} /></View>}
  </View>
);
