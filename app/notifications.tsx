import { useState } from 'react';
import { View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen, Header, Chips, Chip, T, Row, IconCircle } from '../src/components/ui';
import { notifs } from '../src/mocks/data';
import { c } from '../src/theme';
export default function Notifications() {
  const r = useRouter(); const [f, setF] = useState('todas'); const [read, setRead] = useState(false);
  const list = notifs.filter((n) => f === 'todas' || n.t === f);
  return (
    <Screen scroll>
      <Header title="Notificações" right={<T v="semi" color={c.gold} style={{ fontSize: 13 }} onPress={() => setRead(true)}>Ler todas</T>} />
      <Chips>{[['todas', 'Todas'], ['pedidos', 'Pedidos'], ['promocoes', 'Promoções']].map(([k, l]) => <Chip key={k} label={l} active={f === k} onPress={() => setF(k)} />)}</Chips>
      {['Hoje', 'Ontem'].map((gname) => { const items = list.filter((n) => n.g === gname); return items.length ? (
        <View key={gname}><T v="label" style={{ marginTop: 20, marginBottom: 8 }}>{gname}</T>
          {items.map((n) => (
            <Pressable key={n.id} onPress={() => r.push(n.to as any)}><Row style={{ gap: 12, paddingVertical: 10, alignItems: 'flex-start' }}>
              <IconCircle n={n.icon} /><View style={{ flex: 1 }}><T v="semi">{n.title}</T><T v="label" style={{ lineHeight: 17 }}>{n.body}</T></View>
              <View style={{ alignItems: 'flex-end', gap: 6 }}><T v="cap">{n.when}</T>{n.unread && !read && <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: c.gold }} />}</View></Row></Pressable>))}
        </View>) : null; })}
    </Screen>
  );
}
