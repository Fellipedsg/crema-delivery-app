import { View } from 'react-native';
import { Screen, Header, Card, Row, T, Ic, Btn } from '../src/components/ui';
import { c } from '../src/theme';
const faq = [
  ['Como funciona a verificação de idade?', 'O entregador confere um documento oficial com foto. Sem documento, a entrega não é concluída.'],
  ['Qual o prazo de entrega?', 'De 30 a 45 minutos para pedidos feitos agora. Você também pode agendar.'],
  ['Como cancelo um pedido?', 'Só é possível até o status "Preparando". Depois disso, fale com o suporte.'],
];
export default function Help() {
  return (
    <Screen scroll>
      <Header title="Ajuda e suporte" />
      {faq.map(([q, a]) => (
        <Card key={q} style={{ marginBottom: 10 }}><Row style={{ gap: 10, alignItems: 'flex-start' }}><Ic n="shield-check" s={20} color={c.gold} /><View style={{ flex: 1 }}><T v="semi">{q}</T><T v="label" style={{ marginTop: 4, lineHeight: 17 }}>{a}</T></View></Row></Card>
      ))}
      <Btn title="Falar com o suporte" icon="message-circle" style={{ marginTop: 8 }} />
    </Screen>
  );
}
