import { useState } from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen, Header, Card, Row, T, Ic, IconCircle, Radio, Input, Btn } from '../src/components/ui';
import { useStore, payLabel, Pay, totals } from '../src/store';
import { c, brl } from '../src/theme';
export default function Payment() {
  const r = useRouter(); const { pay, setPay, items, coupon } = useStore(); const [troco, setTroco] = useState(false); const [val, setVal] = useState('200');
  const total = totals(items, coupon).total; const bad = pay === 'cash' && troco && Number(val) * 100 <= total;
  const opt = (k: Pay, i: string, t: string, s: string) => (
    <Card key={k} active={pay === k} style={{ height: 64, marginBottom: 10, justifyContent: 'center' }} onPress={() => setPay(k)}>
      <Row style={{ gap: 12 }}><IconCircle n={i} size={40} /><View style={{ flex: 1 }}><T v="semi">{t}</T><T v="label">{s}</T></View><Radio on={pay === k} /></Row>
    </Card>);
  return (
    <Screen scroll>
      <Header title="Forma de pagamento" />
      <T v="title" style={{ marginBottom: 10 }}>Pague pelo app</T>
      {opt('pix', 'qr-code', 'Pix', 'Aprovação na hora')}{opt('card', 'credit-card', 'Cartão de crédito', 'Mastercard •••• 4821')}
      <Card style={{ height: 52, borderStyle: 'dashed', marginBottom: 20, justifyContent: 'center' }}><Row style={{ gap: 8, justifyContent: 'center' }}><Ic n="plus" s={18} color={c.gold} /><T v="semi" color={c.gold}>Adicionar novo cartão</T></Row></Card>
      <T v="title" style={{ marginBottom: 10 }}>Pague na entrega</T>
      {opt('machine', 'smartphone', 'Cartão na maquininha', 'Crédito ou débito')}{opt('cash', 'banknote', 'Dinheiro', 'Informe se precisa de troco')}
      {pay === 'cash' && <View style={{ marginBottom: 10 }}>
        <Row style={{ justifyContent: 'space-between', marginBottom: 10 }}><T v="semi">Precisa de troco?</T><Btn title={troco ? 'Sim' : 'Não'} variant="dark" onPress={() => setTroco(!troco)} style={{ width: 80 }} /></Row>
        {troco && <Input label={`Troco para (maior que ${brl(total)})`} keyboardType="number-pad" value={val} onChangeText={setVal} icon="banknote" />}
        {bad && <T v="label" color={c.wineLight}>O valor precisa ser maior que o total.</T>}
      </View>}
      <Row style={{ gap: 6, justifyContent: 'center', marginVertical: 14 }}><Ic n="lock" s={16} color={c.muted} /><T v="label">Pagamento seguro e criptografado</T></Row>
      <Btn title={`Continuar com ${payLabel[pay]}`} disabled={bad} onPress={() => r.back()} />
    </Screen>
  );
}
