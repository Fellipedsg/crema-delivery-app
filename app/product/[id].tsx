import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Screen, Circle, T, Row, Ic, Chip, Check, Stepper, Btn, BottomBar, Placeholder, Badge } from '../../src/components/ui';
import { prod, WARN } from '../../src/mocks/data';
import { useStore } from '../../src/store';
import { c, f, brl } from '../../src/theme';

export default function Product() {
  const { id } = useLocalSearchParams<{ id: string }>(); const r = useRouter(); const add = useStore((s) => s.add);
  const p = prod(id!); const [qty, setQty] = useState(p.flavors ? 2 : 1); const [flavor, setFlavor] = useState<string>(); const [size, setSize] = useState(p.sizes?.[0].id);
  const [ad, setAd] = useState<string[]>(p.addons?.filter((a) => a.def).map((a) => a.id) ?? []); const [fav, setFav] = useState(!!p.fav);
  const base = p.sizes?.find((s) => s.id === size)?.price ?? p.price;
  const extra = (p.addons ?? []).filter((a) => ad.includes(a.id)).reduce((a, x) => a + x.price, 0);
  const unit = base + extra; const need = !!p.flavors && !flavor;
  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <Screen scroll flush pad={false} bottom={100}>
        <View style={{ height: 300 }}><Placeholder h={300} r={0} /></View>
        <View style={{ marginTop: -28, backgroundColor: c.bg, borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: 20 }}>
          <T v="over">{p.niche} · {p.sub === 'Tintos' ? 'Vinho tinto' : p.sub}</T>
          <T v="l" style={{ marginVertical: 6 }}>{p.name}</T>
          <Row style={{ gap: 10, marginBottom: 12 }}><Ic n="star" s={16} color={c.gold} fill={c.gold} /><T v="mutedb">{String(p.rating).replace('.', ',')} ({p.reviews} avaliações)</T>{p.cold && <Chip label="Gelado" icon="snowflake" />}</Row>
          <Row style={{ gap: 10, alignItems: 'baseline' }}>
            <T v="price">{brl(base)}</T>{p.oldPrice && <T v="mutedb" style={{ textDecorationLine: 'line-through' }}>{brl(p.oldPrice)}</T>}
          </Row>
          <T v="mutedb" style={{ marginVertical: 12 }}>{p.desc}</T>
          {p.addons && <><T v="title" style={{ marginBottom: 8 }}>Adicionais</T>
            {p.addons.map((a) => (
              <Row key={a.id} style={{ justifyContent: 'space-between', paddingVertical: 10 }}>
                <Row style={{ gap: 12 }}><Check on={ad.includes(a.id)} onPress={() => setAd(ad.includes(a.id) ? ad.filter((x) => x !== a.id) : [...ad, a.id])} /><T v="body">{a.name}</T></Row>
                <T v="mutedb">{a.price ? '+ ' + brl(a.price) : 'Grátis'}</T>
              </Row>))}</>}
          {p.flavors && <>
            <Row style={{ justifyContent: 'space-between', marginBottom: 10 }}><T v="title">Sabor</T><Badge label="Obrigatório" kind="wine" /></Row>
            <Row style={{ flexWrap: 'wrap', gap: 8 }}>{p.flavors.map((s) => <Chip key={s} label={s} active={flavor === s} onPress={() => setFlavor(s)} />)}</Row>
          </>}
          {p.sizes && <>
            <T v="title" style={{ marginTop: 20, marginBottom: 10 }}>Tamanho</T>
            <Row style={{ backgroundColor: c.surface2, borderRadius: 14, padding: 4, borderWidth: 1, borderColor: c.line }}>
              {p.sizes.map((s) => (
                <Pressable key={s.id} onPress={() => setSize(s.id)} style={{ flex: 1, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: size === s.id ? c.gold : 'transparent' }}>
                  <Text style={{ fontFamily: f.s, color: size === s.id ? c.bg : c.text }}>{s.label} · {brl(s.price!)}</Text>
                </Pressable>))}
            </Row></>}
          {p.warn && <T v="cap" style={{ marginTop: 20 }}>{WARN}</T>}
        </View>
      </Screen>
      <View style={{ position: 'absolute', top: 56, left: 20 }}><Circle n="chevron-left" bg={c.bg + 'B3'} onPress={() => r.back()} /></View>
      <View style={{ position: 'absolute', top: 56, right: 20 }}><Circle n="heart" bg={c.bg + 'B3'} color={fav ? c.wineLight : c.text} onPress={() => setFav(!fav)} /></View>
      {p.warn && <View style={{ position: 'absolute', top: 250, left: 20, backgroundColor: c.wine, borderRadius: 12, paddingHorizontal: 10, paddingVertical: 4 }}><Text style={{ color: c.text, fontFamily: f.b }}>18+</Text></View>}
      <BottomBar>
        <Stepper value={qty} onChange={(n) => setQty(Math.max(1, n))} />
        <Btn style={{ flex: 1 }} disabled={need} title={`Adicionar · ${brl(unit * qty)}`} onPress={() => {
          add({ id: p.id, qty, flavor, size, addons: ad, unit, label: [size ?? p.unit, flavor && `Sabor: ${flavor}`, p.addons && ad.length ? p.addons.filter((a) => ad.includes(a.id)).map((a) => a.name.split(',')[0]).join(', ') : ''].filter(Boolean).join(' · ') });
          r.push('/bag');
        }} />
      </BottomBar>
    </View>
  );
}
