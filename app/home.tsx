import { useState } from 'react';
import { View, ScrollView, Pressable, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Screen, T, Ic, Row, Input, ProductCard, TabBar, IconCircle } from '../src/components/ui';
import { products, categories } from '../src/mocks/data';
import { useStore, quickItem } from '../src/store';
import { c, g, f } from '../src/theme';

export default function Home() {
  const r = useRouter(); const add = useStore((s) => s.add); const [dot, setDot] = useState(0);
  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <Screen scroll bottom={90}>
        <Row style={{ justifyContent: 'space-between', marginBottom: 16 }}>
          <Row style={{ gap: 10 }}>
            <Ic n="map-pin" color={c.gold} />
            <View><T v="label">Entregar em</T><Pressable onPress={() => r.push('/address')}><Row style={{ gap: 4 }}><T v="semi" style={{ fontSize: 15 }}>Rua das Flores, 120</T><Ic n="chevron-down" s={16} /></Row></Pressable></View>
          </Row>
          <Pressable onPress={() => r.push('/notifications')}><Ic n="bell" /><View style={{ position: 'absolute', right: 0, top: 0, width: 9, height: 9, borderRadius: 5, backgroundColor: c.wine }} /></Pressable>
        </Row>
        <Row style={{ gap: 10 }}>
          <View style={{ flex: 1 }}><Pressable onPress={() => r.push('/search')}><View pointerEvents="none"><Input icon="search" placeholder="Buscar vinhos, essências, gelo..." /></View></Pressable></View>
          <View style={{ marginTop: -14 }}><LinearGradient colors={g.gold} style={{ width: 52, height: 48, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}><Ic n="sliders-horizontal" color={c.bg} /></LinearGradient></View>
        </Row>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} onScroll={(e) => setDot(Math.round(e.nativeEvent.contentOffset.x / 350))} scrollEventThrottle={50} style={{ marginHorizontal: -20 }} contentContainerStyle={{ paddingHorizontal: 20 }} snapToInterval={350} decelerationRate="fast">
          {[['HAPPY HOUR CREMA', 'Combo Narguilé + Gelo de Coco', 'a partir de R$ 59,90'], ['ADEGA', 'Vinhos com 10% off', 'a partir de R$ 39,90']].map((b, i) => (
            <LinearGradient key={i} colors={g.hero} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ width: 350, height: 140, borderRadius: 20, borderWidth: 1, borderColor: c.gold + '59', padding: 18, justifyContent: 'center' }}>
              <T v="over">{b[0]}</T><T v="m" style={{ fontSize: 19, lineHeight: 26, marginVertical: 6, width: 200 }}>{b[1]}</T>
              <View style={{ alignSelf: 'flex-start', backgroundColor: c.tintGold, borderRadius: 12, paddingHorizontal: 10, paddingVertical: 4 }}><T v="semi" color={c.gold} style={{ fontSize: 12 }}>{b[2]}</T></View>
            </LinearGradient>
          ))}
        </ScrollView>
        <Row style={{ justifyContent: 'center', gap: 6, marginVertical: 12 }}>{[0, 1].map((i) => <View key={i} style={{ width: dot === i ? 18 : 6, height: 6, borderRadius: 3, backgroundColor: dot === i ? c.gold : c.surface3 }} />)}</Row>
        <Row style={{ gap: 12 }}>
          {[['Adega', 'Bebidas e gelo', 'wine', g.adega, '/category/vinhos'], ['Tabacaria', 'Essências e acessórios', 'cigarette', g.tabacaria, '/category/essencias']].map(([t, s, i, gr, to]: any) => (
            <Pressable key={t} style={{ flex: 1 }} onPress={() => r.push(to)}>
              <LinearGradient colors={gr} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ height: 88, borderRadius: 16, borderWidth: 1, borderColor: c.line, padding: 12, justifyContent: 'space-between' }}>
                <Ic n={i} color={c.goldLight} /><View><T v="s">{t}</T><T v="cap" color={c.muted}>{s}</T></View>
              </LinearGradient>
            </Pressable>
          ))}
        </Row>
        <Row style={{ justifyContent: 'space-between', marginTop: 24, marginBottom: 12 }}><T v="title">Categorias</T><T v="semi" color={c.gold} style={{ fontSize: 13 }}>Ver todas</T></Row>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -20 }} contentContainerStyle={{ paddingHorizontal: 20, gap: 16 }}>
          {categories.map((k) => (
            <Pressable key={k.id} style={{ alignItems: 'center', gap: 6 }} onPress={() => r.push(`/category/${k.id}`)}>
              <IconCircle n={k.icon} size={56} bg={c.surface2} /><T v="label" color={c.text}>{k.name}</T>
            </Pressable>
          ))}
        </ScrollView>
        <Row style={{ justifyContent: 'space-between', marginTop: 24, marginBottom: 12 }}><T v="title">Mais pedidos</T><T v="semi" color={c.gold} style={{ fontSize: 13 }}>Ver todos</T></Row>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -20 }} contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}>
          {products.map((p) => <ProductCard key={p.id} p={p} small onPress={() => r.push(`/product/${p.id}`)} onAdd={() => (p.flavors ? r.push(`/product/${p.id}`) : add(quickItem(p.id)))} />)}
        </ScrollView>
      </Screen>
      <TabBar />
    </View>
  );
}
