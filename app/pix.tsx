import { useEffect, useState } from 'react';
import { View, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import * as Clipboard from 'expo-clipboard';
import Svg, { Rect } from 'react-native-svg';
import { Screen, Header, Card, Row, T, Btn, Chip, Toast } from '../src/components/ui';
import { useStore, totals } from '../src/store';
import { c, f, brl } from '../src/theme';
const CODE = '00020126580014br.gov.bcb.pix0136crema-4821-pix5204000053039865802BR5920Crema Tabacaria6304A1B2';
const Qr = () => {
  const cells = 25; let seed = 4821; const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
  const finder = (x: number, y: number) => (x < 7 && y < 7) || (x > cells - 8 && y < 7) || (x < 7 && y > cells - 8);
  const rects = [];
  for (let y = 0; y < cells; y++) for (let x = 0; x < cells; x++) {
    const edge = (a: number, b: number) => a === 0 || a === 6 || b === 0 || b === 6 || (a >= 2 && a <= 4 && b >= 2 && b <= 4);
    const on = finder(x, y) ? edge(x % (cells - 7) % 18 > 6 ? x - (cells - 7) : x, y > cells - 8 ? y - (cells - 7) : y) : rnd() > 0.5;
    if (on) rects.push(<Rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill="#111" />);
  }
  return <Svg width={190} height={190} viewBox={`0 0 ${cells} ${cells}`}>{rects}</Svg>;
};
export default function Pix() {
  const r = useRouter(); const { items, coupon } = useStore(); const [s, setS] = useState(598); const [toast, setToast] = useState(''); const pulse = new Animated.Value(1);
  useEffect(() => { Animated.loop(Animated.sequence([Animated.timing(pulse, { toValue: 0.3, duration: 700, useNativeDriver: true }), Animated.timing(pulse, { toValue: 1, duration: 700, useNativeDriver: true })])).start(); }, []);
  useEffect(() => { const i = setInterval(() => setS((x) => Math.max(0, x - 1)), 1000); return () => clearInterval(i); }, []);
  useEffect(() => { const t = setTimeout(() => r.replace('/confirmed'), 20000); return () => clearTimeout(t); }, []); // prototype: aprova sozinho
  const copy = async () => { await Clipboard.setStringAsync(CODE); setToast('Código copiado'); setTimeout(() => setToast(''), 1800); };
  const mm = `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  return (
    <View style={{ flex: 1 }}>
      <Screen scroll>
        <Header title="Pagamento Pix" />
        <View style={{ alignItems: 'center', gap: 12 }}>
          {s > 0 ? <Chip label={`Expira em ${mm}`} icon="clock" /> : <T v="semi" color={c.wineLight}>Código expirado</T>}
          <View style={{ backgroundColor: '#F4ECDD', padding: 15, borderRadius: 16 }}><Qr /></View>
          <T v="price">{brl(totals(items, coupon).total)}</T><T v="label">Crema Tabacaria & Adega</T>
        </View>
        <Card style={{ marginVertical: 16 }} onPress={copy}><Row style={{ justifyContent: 'space-between', gap: 10 }}><T v="mutedb" numberOfLines={1} style={{ flex: 1 }}>{CODE}</T><T v="semi" color={c.gold}>Copiar</T></Row></Card>
        {['Abra o app do seu banco', 'Escolha Pix › Pix Copia e Cola', 'Cole o código e confirme o pagamento'].map((t, i) => (
          <Row key={i} style={{ gap: 12, marginBottom: 10 }}><View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: c.tintGold, alignItems: 'center', justifyContent: 'center' }}><T style={{ fontFamily: f.b, color: c.gold, fontSize: 12 }}>{i + 1}</T></View><T v="body">{t}</T></Row>))}
        <Row style={{ gap: 8, justifyContent: 'center', marginVertical: 14 }}><Animated.View style={{ opacity: pulse, width: 8, height: 8, borderRadius: 4, backgroundColor: c.gold }} /><T v="label">Aguardando pagamento…</T></Row>
        <Btn title={s > 0 ? 'Copiar código Pix' : 'Gerar novo código'} onPress={s > 0 ? copy : () => setS(598)} style={{ marginBottom: 12 }} />
        <Btn title="Já fiz o pagamento" variant="outline" onPress={() => r.replace('/confirmed')} />
      </Screen>
      <Toast text={toast} />
    </View>
  );
}
