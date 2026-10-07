import { useState } from 'react';
import { Alert, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen, Header, Circle, Card, Row, T, Placeholder, Stepper, Input, Btn, Summary, Ic } from '../src/components/ui';
import { useStore } from '../src/store';
import { prod } from '../src/mocks/data';
import { c, brl } from '../src/theme';
export default function Bag() {
  const r = useRouter(); const { items, setQty, clear, coupon, setCoupon } = useStore(); const n = items.length;
  const [code, setCode] = useState('CREMA10');
  const confirm = (msg: string, ok: () => void) => Alert.alert(msg, undefined, [{ text: 'Cancelar', style: 'cancel' }, { text: 'Remover', style: 'destructive', onPress: ok }]);
  return (
    <Screen scroll>
      <Header title="Minha sacola" right={<Circle n="trash-2" onPress={() => items.length && confirm('Esvaziar a sacola?', clear)} />} />
      {items.length === 0 ? (
        <View style={{ alignItems: 'center', marginTop: 60, gap: 12 }}><Ic n="shopping-bag" s={48} color={c.dim} /><T v="mutedb">Sua sacola está vazia.</T><Btn title="Ver produtos" onPress={() => r.replace('/home')} style={{ alignSelf: 'stretch' }} /></View>
      ) : (<>
        <Row style={{ justifyContent: 'space-between', marginBottom: 12 }}><Row style={{ gap: 8 }}><Ic n="store" s={18} color={c.gold} /><T v="semi">Crema Tabacaria & Adega</T></Row><T v="label">{n} {n === 1 ? 'item' : 'itens'}</T></Row>
        {items.map((i) => (
          <Card key={i.key} style={{ height: 84, marginBottom: 10, padding: 10, flexDirection: 'row', gap: 12, alignItems: 'center' }}>
            <Placeholder w={64} h={64} />
            <View style={{ flex: 1 }}><T v="semi" numberOfLines={1}>{prod(i.id).name}</T><T v="label" numberOfLines={1}>{i.label}</T><T v="bold" style={{ fontSize: 15, marginTop: 4 }}>{brl(i.unit * i.qty)}</T></View>
            <Stepper small value={i.qty} onChange={(q) => (q <= 0 ? confirm('Remover item?', () => setQty(i.key, 0)) : setQty(i.key, q))} />
          </Card>
        ))}
        <T v="semi" color={c.gold} style={{ marginVertical: 8 }} onPress={() => r.replace('/home')}>+ Adicionar mais itens</T>
        <Input icon="ticket" value={code} onChangeText={setCode} autoCapitalize="characters" right={coupon ? 'Remover' : 'Aplicar'} onRight={() => (coupon ? setCoupon(false) : code.toUpperCase() === 'CREMA10' && setCoupon(true))} />
        {coupon && <T v="label" color={c.success} style={{ marginTop: -6, marginBottom: 8 }}>Cupom aplicado: R$ 10,00 de desconto</T>}
        <Summary />
        <T v="cap" style={{ marginBottom: 12 }}>Pedido mínimo: R$ 30,00 · Loja aberta até 23h</T>
        <Btn title="Ir para o pagamento" onPress={() => r.push('/checkout')} />
      </>)}
    </Screen>
  );
}
