import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen, Header, Card, Row, T, IconCircle, Badge } from '../src/components/ui';
import { useStore } from '../src/store';
const list = [
  { code: 'CREMA10', desc: 'R$ 10 de desconto na próxima compra', until: 'Válido até 31/10' },
  { code: 'HAPPY15', desc: '15% off das 18h às 21h', until: 'Válido hoje' },
];
export default function Coupons() {
  const r = useRouter(); const setCoupon = useStore((s) => s.setCoupon);
  return (
    <Screen scroll>
      <Header title="Cupons" />
      {list.map((c) => (
        <Card key={c.code} style={{ marginBottom: 10 }} onPress={() => { if (c.code === 'CREMA10') setCoupon(true); r.push('/bag'); }}>
          <Row style={{ gap: 12 }}><IconCircle n="ticket" /><View style={{ flex: 1 }}><T v="semi">{c.code}</T><T v="label">{c.desc}</T><T v="cap">{c.until}</T></View><Badge label="Usar" /></Row>
        </Card>
      ))}
    </Screen>
  );
}
