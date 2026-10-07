import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen, Header, Card, Row, T, Ic, IconCircle, Input, Notice, Summary, Btn } from '../src/components/ui';
import { useStore, totals, payLabel } from '../src/store';
import { c, brl } from '../src/theme';
export default function Checkout() {
  const r = useRouter(); const { items, coupon, pay, when, setWhen } = useStore(); const t = totals(items, coupon);
  const go = () => r.push(pay === 'pix' ? '/pix' : '/confirmed');
  const sub = { pix: 'Aprovação imediata', card: 'Mastercard •••• 4821', machine: 'Crédito ou débito', cash: 'Dinheiro na entrega' }[pay];
  return (
    <Screen scroll>
      <Header title="Finalizar pedido" />
      <T v="title" style={{ marginBottom: 10 }}>Entregar em</T>
      <Card style={{ marginBottom: 18 }}><Row style={{ gap: 12 }}><IconCircle n="map-pin" /><View style={{ flex: 1 }}><T v="semi">Casa</T><T v="label">Rua das Flores, 120 – Centro</T></View><T v="semi" color={c.gold} style={{ fontSize: 13 }} onPress={() => r.push('/address')}>Trocar</T></Row></Card>
      <T v="title" style={{ marginBottom: 10 }}>Quando?</T>
      <Row style={{ gap: 12, marginBottom: 18 }}>
        {[['now', 'zap', 'Agora', '30–45 min'], ['later', 'calendar', 'Agendar', 'Escolha o horário']].map(([k, i, a, b]) => (
          <Card key={k} active={when === k} style={{ flex: 1 }} onPress={() => setWhen(k as any)}><Ic n={i} color={c.gold} /><T v="semi" style={{ marginTop: 8 }}>{a}</T><T v="label">{b}</T></Card>))}
      </Row>
      <T v="title" style={{ marginBottom: 10 }}>Pagamento</T>
      <Card style={{ marginBottom: 18 }}><Row style={{ gap: 12 }}><IconCircle n={pay === 'pix' ? 'qr-code' : pay === 'cash' ? 'banknote' : 'credit-card'} /><View style={{ flex: 1 }}><T v="semi">{payLabel[pay]}</T><T v="label">{sub}</T></View><T v="semi" color={c.gold} style={{ fontSize: 13 }} onPress={() => r.push('/payment')}>Trocar</T></Row></Card>
      <Input label="Observações" multiline placeholder="Ex: interfone 12, deixar na portaria..." />
      <Notice text="Tenha um documento com foto em mãos: o entregador vai conferir sua idade na entrega." />
      <Summary />
      <Btn title={`Confirmar pedido · ${brl(t.total)}`} onPress={go} />
    </Screen>
  );
}
