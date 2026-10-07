import { useState } from 'react';
import { View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen, Header, T, Ic, Chip, Row, Input, Btn } from '../src/components/ui';
import { c } from '../src/theme';
const labels = ['', 'Ruim', 'Regular', 'Bom', 'Muito bom!', 'Excelente!'];
export default function Review() {
  const r = useRouter(); const [st, setSt] = useState(4); const [tags, setTags] = useState<string[]>([]); const [tip, setTip] = useState('R$ 5');
  return (
    <Screen scroll>
      <Header title="Avaliar pedido" close />
      <View style={{ alignItems: 'center', gap: 6 }}><Ic n="circle-check-big" s={44} color={c.success} /><T v="mutedb">Entregue às 20:22 · #CR-4821</T></View>
      <T v="title" style={{ textAlign: 'center', marginTop: 20 }}>Como foi sua entrega?</T>
      <Row style={{ justifyContent: 'center', gap: 6, marginVertical: 12 }}>{[1, 2, 3, 4, 5].map((i) => <Pressable key={i} onPress={() => setSt(i)}><Ic n="star" s={40} color={c.gold} fill={i <= st ? c.gold : undefined} /></Pressable>)}</Row>
      <T v="semi" color={c.gold} style={{ textAlign: 'center', marginBottom: 16 }}>{labels[st]}</T>
      <T v="title" style={{ marginBottom: 10 }}>O que você mais gostou?</T>
      <Row style={{ flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>{['Entrega rápida', 'Bebida gelada', 'Entregador educado', 'Embalagem caprichada'].map((t) => <Chip key={t} label={t} active={tags.includes(t)} onPress={() => setTags(tags.includes(t) ? tags.filter((x) => x !== t) : [...tags, t])} />)}</Row>
      <Input label="Deixe um comentário" multiline placeholder="Opcional" />
      <Row style={{ justifyContent: 'space-between', marginBottom: 10 }}><T v="title">Gorjeta para o entregador</T><T v="label">Opcional</T></Row>
      <Row style={{ gap: 8, marginBottom: 20 }}>{['R$ 2', 'R$ 5', 'R$ 10', 'Outro'].map((t) => <Chip key={t} label={t} active={tip === t} onPress={() => setTip(t)} />)}</Row>
      <Btn title="Enviar avaliação" onPress={() => r.replace('/home')} />
    </Screen>
  );
}
