import { useEffect, useState } from 'react';
import { View, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { Circle, T, Row, Ic, Card, IconCircle, Btn } from '../src/components/ui';
import { MapMock } from '../src/components/MapMock';
import { c, f } from '../src/theme';
const steps = ['Confirmado', 'Preparando', 'A caminho', 'Entregue'];
export default function Tracking() {
  const r = useRouter(); const [step, setStep] = useState(1); const [min, setMin] = useState(12);
  // prototype: simula a mudança de status com timer
  useEffect(() => { const a = setTimeout(() => setStep(2), 3000); const b = setTimeout(() => r.replace('/arrived'), 14000); const i = setInterval(() => setMin((m) => Math.max(1, m - 1)), 1500); return () => { clearTimeout(a); clearTimeout(b); clearInterval(i); }; }, []);
  const msg = ['', 'Seu pedido está sendo preparado', 'Seu pedido saiu para entrega'][step];
  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={{ height: 470 }}><MapMock height={470} route full />
        <View style={{ position: 'absolute', left: '18%', top: '73%' }}><IconCircle n="store" size={36} bg={c.gold} color={c.bg} /></View>
        <View style={{ position: 'absolute', right: '12%', top: '19%' }}><IconCircle n="house" size={36} bg={c.wine} color={c.text} /></View>
        <View style={{ position: 'absolute', left: step >= 2 ? '45%' : '20%', top: step >= 2 ? '45%' : '70%' }}><View style={{ padding: 6, borderRadius: 30, backgroundColor: c.gold + '40' }}><IconCircle n="bike" size={36} bg={c.surface1} color={c.gold} /></View></View>
        <View style={{ position: 'absolute', top: 56, left: 20, right: 20, flexDirection: 'row', justifyContent: 'space-between' }}><Circle n="chevron-left" onPress={() => r.replace('/orders')} /><Circle n="message-circle" onPress={() => {}} /></View>
      </View>
      <View style={{ position: 'absolute', top: 430, left: 0, right: 0, bottom: 0, backgroundColor: c.surface1, borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: 20 }}>
        <View style={{ alignSelf: 'center', width: 40, height: 4, borderRadius: 2, backgroundColor: c.line, marginBottom: 14 }} />
        <Row style={{ justifyContent: 'space-between' }}><View><T v="label">Chega em</T><T style={{ fontFamily: f.b, fontSize: 32, color: c.text }}>{min} min</T></View><T v="mutedb">Previsão 20:24</T></Row>
        <T v="semi" color={c.gold} style={{ marginVertical: 8 }}>{msg}</T>
        <Row style={{ marginVertical: 8 }}>{steps.map((s, i) => (
          <View key={s} style={{ flex: 1, alignItems: 'center', gap: 4 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, backgroundColor: i <= step ? c.gold : c.surface3, alignItems: 'center', justifyContent: 'center', borderWidth: i === step ? 4 : 0, borderColor: c.gold + '55' }}>{i < step && <Ic n="check" s={12} color={c.bg} />}</View>
            <T v="cap" color={i <= step ? c.text : c.dim}>{s}</T></View>))}</Row>
        <Card style={{ marginVertical: 8 }}><Row style={{ gap: 12 }}><IconCircle n="user" /><View style={{ flex: 1 }}><T v="semi">Carlos M.</T><T v="label">★ 4,9 · Moto · ABC-1D23</T></View><Circle n="message-circle" color={c.gold} size={36} /><View style={{ width: 8 }} /><Circle n="phone" color={c.gold} size={36} /></Row></Card>
        <Card><Row style={{ justifyContent: 'space-between' }}><View><T v="semi">Código de entrega</T><T v="label">Informe ao entregador</T></View><T style={{ fontFamily: f.b, fontSize: 26, color: c.gold, letterSpacing: 6 }}>4821</T></Row></Card>
        <T v="semi" color={c.gold} style={{ textAlign: 'center', marginTop: 12, fontSize: 13 }} onPress={() => r.push('/orders')}>Ver detalhes do pedido</T>
      </View>
    </View>
  );
}
