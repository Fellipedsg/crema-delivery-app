import { useState } from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen, T, Row, Chip, Card, Badge, Btn, Placeholder, TabBar, Ic } from '../src/components/ui';
import { orders } from '../src/mocks/data';
import { useStore, quickItem } from '../src/store';
import { c, brl } from '../src/theme';
export default function Orders() {
  const r = useRouter(); const [tab, setTab] = useState('and'); const add = useStore((s) => s.add);
  const active = orders[0]; const past = orders.slice(1);
  const kind = (s: string) => (s === 'entregue' ? 'green' : s === 'cancelado' ? 'wine' : 'gold') as any;
  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <Screen scroll bottom={90}>
        <T v="l" style={{ marginBottom: 14 }}>Meus pedidos</T>
        <Row style={{ gap: 8, marginBottom: 16 }}><Chip label="Em andamento" active={tab === 'and'} onPress={() => setTab('and')} /><Chip label="Histórico" active={tab === 'his'} onPress={() => setTab('his')} /></Row>
        {tab === 'and' && <>
          <Card active style={{ marginBottom: 20 }}>
            <Row style={{ justifyContent: 'space-between' }}><T v="semi" style={{ fontSize: 16 }}>{active.id}</T><Badge label="A caminho" /></Row>
            <T v="label" style={{ marginVertical: 6 }}>{active.date} · {active.items} itens</T>
            <Row style={{ gap: 4, marginVertical: 8 }}>{[0, 1, 2, 3].map((i) => <View key={i} style={{ flex: 1, height: 4, borderRadius: 2, backgroundColor: i < 3 ? c.gold : c.surface3 }} />)}</Row>
            <T v="semi" color={c.gold} style={{ fontSize: 13 }}>Chega em ~12 min</T>
            <Row style={{ justifyContent: 'space-between', marginVertical: 12 }}>
              <Row style={{ gap: 6 }}>{[0, 1, 2].map((i) => <Placeholder key={i} w={40} h={40} r={8} />)}<T v="mutedb">+1</T></Row><T v="bold">{brl(active.total)}</T></Row>
            <Btn title="Acompanhar entrega" onPress={() => r.push('/tracking')} />
          </Card></>}
        {(tab === 'his' || tab === 'and') && <><T v="title" style={{ marginBottom: 10 }}>{tab === 'and' ? 'Anteriores' : 'Todos os pedidos'}</T>
          {past.map((o) => (
            <Card key={o.id} style={{ marginBottom: 10 }}>
              <Row style={{ gap: 12 }}><Placeholder w={48} h={48} r={10} /><View style={{ flex: 1 }}><Row style={{ justifyContent: 'space-between' }}><T v="semi">{o.id}</T><Badge label={o.status === 'entregue' ? 'Entregue' : 'Cancelado'} kind={kind(o.status)} /></Row><T v="label" numberOfLines={1}>{o.names}</T><T v="label">{o.date} · {brl(o.total)}</T></View></Row>
              <Row style={{ gap: 6, marginTop: 10 }} ><Ic n="rotate-ccw" s={16} color={c.gold} /><T v="semi" color={c.gold} style={{ fontSize: 13 }} onPress={() => { o.ids.forEach((id) => add(id === 'essencia' ? { ...quickItem(id), flavor: 'Menta', size: '50g', label: '50g · Sabor: Menta' } : quickItem(id))); r.push('/bag'); }}>Pedir de novo</T></Row>
            </Card>))}</>}
      </Screen>
      <TabBar />
    </View>
  );
}
