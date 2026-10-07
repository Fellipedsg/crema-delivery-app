import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen, Header, ProductCard } from '../src/components/ui';
import { products } from '../src/mocks/data';
import { useStore, quickItem } from '../src/store';
export default function Favorites() {
  const r = useRouter(); const add = useStore((s) => s.add);
  return (
    <Screen scroll>
      <Header title="Favoritos" />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {products.filter((p) => p.fav).map((p) => <ProductCard key={p.id} p={p} onPress={() => r.push(`/product/${p.id}`)} onAdd={() => add(quickItem(p.id))} />)}
      </View>
    </Screen>
  );
}
