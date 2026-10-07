import { useState } from 'react';
import { View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Screen, Header, Chips, Chip, T, Row, Ic, ProductCard, Circle } from '../../src/components/ui';
import { products, categories } from '../../src/mocks/data';
import { useStore, quickItem } from '../../src/store';
export default function Category() {
  const { id } = useLocalSearchParams<{ id: string }>(); const r = useRouter(); const add = useStore((s) => s.add); const [sub, setSub] = useState('Todos');
  const cat = categories.find((k) => k.id === id); const subs = id === 'vinhos' ? ['Todos', 'Tintos', 'Brancos', 'Rosés', 'Espumantes'] : ['Todos'];
  const list = products.filter((p) => p.cat === id && (sub === 'Todos' || p.sub === sub));
  return (
    <Screen scroll>
      <Header title={cat?.name ?? 'Categoria'} right={<Circle n="search" onPress={() => r.push('/search')} />} />
      <Chips>{subs.map((s) => <Chip key={s} label={s} active={sub === s} onPress={() => setSub(s)} />)}</Chips>
      <Row style={{ justifyContent: 'space-between', marginVertical: 14 }}>
        <T v="label">{id === 'vinhos' ? 86 : list.length} produtos</T>
        <Row style={{ gap: 12 }}><Row style={{ gap: 4 }}><T v="semi" style={{ fontSize: 13 }}>Mais vendidos</T><Ic n="chevron-down" s={16} /></Row><Ic n="sliders-horizontal" s={18} /></Row>
      </Row>
      {list.length === 0 && <T v="mutedb">Nenhum produto nesta categoria no protótipo.</T>}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {list.map((p) => <ProductCard key={p.id} p={p} onPress={() => r.push(`/product/${p.id}`)} onAdd={() => (p.flavors ? r.push(`/product/${p.id}`) : add(quickItem(p.id)))} />)}
      </View>
    </Screen>
  );
}
