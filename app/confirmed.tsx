import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { Screen, T, Ic, Card, Row, IconCircle, Notice, Btn } from '../src/components/ui';
import { useStore, totals, payLabel } from '../src/store';
import { c, g, brl } from '../src/theme';
export default function Confirmed() {
  const r = useRouter(); const { items, coupon, pay, clear } = useStore();
  // guarda o resumo do pedido e esvazia a sacola (pedido já foi feito)
  const [snap] = useState(() => ({ t: totals(items, coupon), n: items.length }));
  const { t, n } = snap;
  useEffect(() => { clear(); }, []);
  return (
    <Screen scroll style={{ alignItems: 'center', paddingTop: 30 }}>
      <View style={{ width: 160, height: 160, borderRadius: 80, backgroundColor: c.gold + '14', alignItems: 'center', justifyContent: 'center' }}>
        <LinearGradient colors={g.gold} style={{ width: 80, height: 80, borderRadius: 40, alignItems: 'center', justifyContent: 'center' }}><Ic n="check" s={44} color={c.bg} /></LinearGradient>
      </View>
      <T v="xl" style={{ marginTop: 16 }}>Pedido confirmado!</T>
      <T v="mutedb" style={{ marginBottom: 20 }}>Pedido #CR-4821 · {pay === 'pix' ? 'Pix aprovado' : payLabel[pay]}</T>
      <Card style={{ alignSelf: 'stretch', gap: 16 }}>
        {[['clock', 'Previsão de entrega', '20:15 – 20:30'], ['package', `${n} itens · ${brl(t.total)}`, 'Malbec, Essência, Carvão, Gelo'], ['map-pin', 'Entregar em', 'Rua das Flores, 120 – Centro']].map(([i, a, b]) => (
          <Row key={a} style={{ gap: 12 }}><IconCircle n={i} size={36} /><View style={{ flex: 1 }}><T v="label">{a}</T><T v="semi">{b}</T></View></Row>))}
      </Card>
      <View style={{ alignSelf: 'stretch' }}><Notice text="Separe um documento com foto para receber." /></View>
      <View style={{ alignSelf: 'stretch', gap: 8, marginTop: 8 }}>
        <Btn title="Acompanhar pedido" icon="navigation" onPress={() => r.replace('/tracking')} />
        <Btn title="Voltar ao início" variant="ghost" onPress={() => r.replace('/home')} />
      </View>
    </Screen>
  );
}
