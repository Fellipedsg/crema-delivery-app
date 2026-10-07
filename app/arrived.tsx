import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen, T, IconCircle, Notice, Card, Row, Btn } from '../src/components/ui';
import { c, f } from '../src/theme';
export default function Arrived() {
  const r = useRouter();
  return (
    <Screen scroll style={{ alignItems: 'center', paddingTop: 30 }}>
      <IconCircle n="bike" size={96} bg={c.gold} color={c.bg} />
      <T v="xl" style={{ marginTop: 20 }}>Seu pedido chegou!</T>
      <T v="mutedb" style={{ textAlign: 'center', marginVertical: 10 }}>O entregador está na sua porta. Confira os itens antes de receber.</T>
      <T v="label" style={{ marginVertical: 8 }}>Informe este código ao entregador</T>
      <Row style={{ gap: 10, marginBottom: 12 }}>{'4821'.split('').map((d, i) => <View key={i} style={{ width: 64, height: 72, borderRadius: 14, backgroundColor: c.surface2, borderWidth: 1, borderColor: c.gold, alignItems: 'center', justifyContent: 'center' }}><T style={{ fontFamily: f.b, fontSize: 32, lineHeight: 40, color: c.gold }}>{d}</T></View>)}</Row>
      <View style={{ alignSelf: 'stretch' }}>
        <Notice danger title="Verificação de idade" text="Apresente um documento oficial com foto. Sem documento, bebidas e produtos de tabaco não podem ser entregues." />
        <Card style={{ marginVertical: 8 }}><Row style={{ justifyContent: 'space-between' }}><T v="semi">4 itens · Pago via Pix</T><T v="semi" color={c.gold} style={{ fontSize: 13 }}>Ver itens</T></Row></Card>
        <Btn title="Recebi meu pedido" icon="check" onPress={() => r.replace('/review')} style={{ marginTop: 8 }} />
        <Btn title="Tive um problema com a entrega" variant="ghost" onPress={() => r.replace('/home')} style={{ marginTop: 4 }} />
      </View>
    </Screen>
  );
}
