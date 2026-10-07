import { useState } from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen, T, Input, ProductCard, TabBar } from '../src/components/ui';
import { products } from '../src/mocks/data';
import { useStore, quickItem } from '../src/store';
import { c } from '../src/theme';
export default function Search() {
  const r = useRouter(); const add = useStore((s) => s.add); const [q, setQ] = useState('');
  const list = products.filter((p) => (p.name + p.cat + p.sub).toLowerCase().includes(q.toLowerCase()));
  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <Screen scroll bottom={90}>
        <T v="l" style={{ marginBottom: 14 }}>Buscar</T>
        <Input icon="search" placeholder="Buscar vinhos, essências, gelo..." value={q} onChangeText={setQ} autoFocus={false} />
        <T v="label" style={{ marginBottom: 12 }}>{list.length} produtos</T>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {list.map((p) => <ProductCard key={p.id} p={p} onPress={() => r.push(`/product/${p.id}`)} onAdd={() => (p.flavors ? r.push(`/product/${p.id}`) : add(quickItem(p.id)))} />)}
        </View>
      </Screen>
      <TabBar />
    </View>
  );
}
