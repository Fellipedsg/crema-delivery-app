import React from 'react';
import { View, Text, Pressable, TextInput, ScrollView, StyleSheet, TextInputProps, ViewStyle, StyleProp } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter, usePathname } from 'expo-router';
import * as L from 'lucide-react-native';
import { c, g, f, brl } from '../theme';
import { useStore } from '../store';
import { Product } from '../mocks/data';

const map: Record<string, any> = {
  house: L.House, search: L.Search, 'shopping-bag': L.ShoppingBag, user: L.User, bell: L.Bell, 'map-pin': L.MapPin, heart: L.Heart,
  'chevron-left': L.ChevronLeft, 'chevron-right': L.ChevronRight, 'chevron-down': L.ChevronDown, plus: L.Plus, minus: L.Minus,
  wine: L.Wine, cigarette: L.Cigarette, beer: L.Beer, martini: L.Martini, leaf: L.Leaf, flame: L.Flame, 'credit-card': L.CreditCard,
  'qr-code': L.QrCode, banknote: L.Banknote, bike: L.Bike, check: L.Check, 'circle-check-big': L.CircleCheckBig, clock: L.Clock,
  star: L.Star, 'sliders-horizontal': L.SlidersHorizontal, settings: L.Settings, 'log-out': L.LogOut, package: L.Package,
  'package-check': L.PackageCheck, receipt: L.Receipt, ticket: L.Ticket, gift: L.Gift, eye: L.Eye, lock: L.Lock, mail: L.Mail,
  phone: L.Phone, x: L.X, navigation: L.Navigation, 'message-circle': L.MessageCircle, 'shield-check': L.ShieldCheck,
  'id-card': L.IdCard, 'trash-2': L.Trash2, copy: L.Copy, smartphone: L.Smartphone, store: L.Store, percent: L.Percent,
  wallet: L.Wallet, calendar: L.Calendar, zap: L.Zap, snowflake: L.Snowflake, image: L.Image, briefcase: L.Briefcase, 'rotate-ccw': L.RotateCcw,
};
export const Ic = ({ n, s = 24, color = c.text, fill }: { n: string; s?: number; color?: string; fill?: string }) => {
  const I = map[n] ?? L.Circle;
  return <I size={s} color={color} fill={fill ?? 'none'} />;
};

export const T = ({ v = 'body', color, style, ...p }: any) => {
  const base: Record<string, any> = {
    xl: { fontFamily: f.display, fontSize: 26, color: c.text }, l: { fontFamily: f.display, fontSize: 24, color: c.text },
    m: { fontFamily: f.display, fontSize: 22, color: c.text }, s: { fontFamily: f.display, fontSize: 16, color: c.text },
    price: { fontFamily: f.b, fontSize: 26, color: c.gold }, title: { fontFamily: f.s, fontSize: 17, color: c.text },
    body: { fontFamily: f.r, fontSize: 14, lineHeight: 20, color: c.text }, mutedb: { fontFamily: f.r, fontSize: 14, lineHeight: 20, color: c.muted },
    label: { fontFamily: f.m, fontSize: 12, color: c.muted }, cap: { fontFamily: f.r, fontSize: 11, color: c.dim },
    over: { fontFamily: f.b, fontSize: 11, letterSpacing: 1.1, color: c.gold, textTransform: 'uppercase' },
    semi: { fontFamily: f.s, fontSize: 14, color: c.text }, bold: { fontFamily: f.b, fontSize: 16, color: c.gold },
  };
  const flat: any = StyleSheet.flatten([base[v], color && { color }, style]) ?? {};
  // fonte grande herdando lineHeight pequeno do 'body' cortava o texto
  if (flat.fontSize > 18 && flat.lineHeight && flat.lineHeight < flat.fontSize * 1.15) flat.lineHeight = Math.round(flat.fontSize * 1.25);
  return <Text {...p} style={flat} />;
};

export const Screen = ({ children, scroll, pad = true, bottom = 0, style, flush }: { children: React.ReactNode; scroll?: boolean; pad?: boolean; bottom?: number; style?: StyleProp<ViewStyle>; flush?: boolean }) => {
  const { top } = useSafeAreaInsets();
  const inner = [{ paddingHorizontal: pad ? 20 : 0, paddingBottom: bottom + 24 }, style];
  return (
    <View style={{ flex: 1, backgroundColor: c.bg, paddingTop: flush ? 0 : top + 8 }}>
      {scroll ? <ScrollView contentContainerStyle={inner} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">{children}</ScrollView>
        : <View style={[{ flex: 1 }, inner]}>{children}</View>}
    </View>
  );
};

export const Circle = ({ n, onPress, size = 40, color = c.text, bg = c.surface2 }: any) => (
  <Pressable onPress={onPress} style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: bg, borderWidth: 1, borderColor: c.line, alignItems: 'center', justifyContent: 'center' }}>
    <Ic n={n} s={size > 36 ? 22 : 16} color={color} />
  </Pressable>
);

export const Header = ({ title, right, close, noBack }: { title?: string; right?: React.ReactNode; close?: boolean; noBack?: boolean }) => {
  const r = useRouter();
  return (
    <View style={{ height: 44, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
      {noBack ? <View style={{ width: 40 }} /> : <Circle n={close ? 'x' : 'chevron-left'} onPress={() => (r.canGoBack() ? r.back() : r.replace('/home'))} />}
      <View pointerEvents="none" style={{ position: 'absolute', left: 60, right: 60, alignItems: 'center' }}><T v="title" numberOfLines={1}>{title}</T></View>
      <View style={{ minWidth: 40, alignItems: 'flex-end' }}>{right}</View>
    </View>
  );
};

export const Btn = ({ title, onPress, variant = 'primary', icon, disabled, style }: { title: string; onPress?: () => void; variant?: 'primary' | 'outline' | 'dark' | 'ghost'; icon?: string; disabled?: boolean; style?: StyleProp<ViewStyle> }) => {
  const col = variant === 'primary' ? c.bg : variant === 'outline' ? c.gold : variant === 'ghost' ? c.muted : c.text;
  const content = (
    <>
      {icon && <Ic n={icon} s={20} color={col} />}
      <Text style={{ fontFamily: f.s, fontSize: 16, color: col }}>{title}</Text>
    </>
  );
  const box: ViewStyle = { height: 52, borderRadius: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, overflow: 'hidden' };
  return (
    <Pressable onPress={disabled ? undefined : onPress} style={[{ opacity: disabled ? 0.4 : 1 }, style]}>
      {variant === 'primary' ? <LinearGradient colors={g.gold} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={box}>{content}</LinearGradient>
        : <View style={[box, variant === 'outline' && { borderWidth: 1, borderColor: c.gold }, variant === 'dark' && { backgroundColor: c.surface2, borderWidth: 1, borderColor: c.line }]}>{content}</View>}
    </Pressable>
  );
};

export const Input = ({ label, icon, right, onRight, ...p }: TextInputProps & { label?: string; icon?: string; right?: string; onRight?: () => void }) => {
  const [focus, setFocus] = React.useState(false);
  return (
    <View style={{ marginBottom: 14 }}>
      {label && <T v="label" style={{ marginBottom: 6 }}>{label}</T>}
      <View style={{ height: p.multiline ? 88 : 48, borderRadius: 12, backgroundColor: c.surface2, borderWidth: focus ? 2 : 1, borderColor: focus ? c.gold : c.line, flexDirection: 'row', alignItems: p.multiline ? 'flex-start' : 'center', paddingHorizontal: 14, gap: 10, paddingTop: p.multiline ? 12 : 0 }}>
        {icon && <Ic n={icon} s={20} color={c.muted} />}
        <TextInput {...p} placeholderTextColor={c.dim} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{ flex: 1, color: c.text, fontFamily: f.r, fontSize: 14, height: '100%' }} />
        {right && (right.length > 3 ? <Pressable onPress={onRight}><Text style={{ color: c.gold, fontFamily: f.s, fontSize: 13 }}>{right}</Text></Pressable> : <Pressable onPress={onRight}><Ic n={right} s={20} color={c.muted} /></Pressable>)}
      </View>
    </View>
  );
};

export const Chip = ({ label, active, onPress, icon }: { label: string; active?: boolean; onPress?: () => void; icon?: string }) => {
  const col = active ? c.bg : c.text;
  const body = (<>{icon && <Ic n={icon} s={16} color={col} />}<Text style={{ fontFamily: f.m, fontSize: 13, color: col }}>{label}</Text></>);
  const st: ViewStyle = { height: 34, borderRadius: 17, paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center', gap: 6, overflow: 'hidden' };
  return (
    <Pressable onPress={onPress}>
      {active ? <LinearGradient colors={g.gold} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={st}>{body}</LinearGradient>
        : <View style={[st, { backgroundColor: c.surface2, borderWidth: 1, borderColor: c.line }]}>{body}</View>}
    </Pressable>
  );
};
export const Chips = ({ children }: { children: React.ReactNode }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingHorizontal: 20 }} style={{ marginHorizontal: -20, flexGrow: 0 }}>{children}</ScrollView>
);

export const Card = ({ children, active, style, onPress }: { children: React.ReactNode; active?: boolean; style?: StyleProp<ViewStyle>; onPress?: () => void }) => (
  <Pressable onPress={onPress} style={[{ backgroundColor: c.surface1, borderRadius: 16, borderWidth: 1, borderColor: active ? c.gold : c.line, padding: 14 }, style]}>{children}</Pressable>
);
export const Row = ({ children, style }: { children: React.ReactNode; style?: StyleProp<ViewStyle> }) => <View style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>{children}</View>;

export const Radio = ({ on }: { on: boolean }) => (
  <View style={{ width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: on ? c.gold : c.dim, alignItems: 'center', justifyContent: 'center' }}>
    {on && <LinearGradient colors={g.gold} style={{ width: 10, height: 10, borderRadius: 5 }} />}
  </View>
);
export const Check = ({ on, onPress }: { on: boolean; onPress?: () => void }) => (
  <Pressable onPress={onPress}>
    {on ? <LinearGradient colors={g.gold} style={{ width: 22, height: 22, borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}><Ic n="check" s={14} color={c.bg} /></LinearGradient>
      : <View style={{ width: 22, height: 22, borderRadius: 6, borderWidth: 1.5, borderColor: c.dim }} />}
  </Pressable>
);

export const Stepper = ({ value, onChange, small }: { value: number; onChange: (n: number) => void; small?: boolean }) => (
  <View style={{ width: small ? 96 : 124, height: small ? 34 : 52, borderRadius: 999, backgroundColor: c.surface3, borderWidth: 1, borderColor: c.line, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
    <Pressable hitSlop={8} onPress={() => onChange(value - 1)}><Ic n="minus" s={small ? 16 : 20} /></Pressable>
    <Text style={{ fontFamily: f.b, color: c.text, fontSize: small ? 14 : 18 }}>{value}</Text>
    <Pressable hitSlop={8} onPress={() => onChange(value + 1)}><Ic n="plus" s={small ? 16 : 20} color={c.gold} /></Pressable>
  </View>
);

export const Badge = ({ label, kind = 'gold' }: { label: string; kind?: 'gold' | 'green' | 'wine' }) => {
  const bg = { gold: c.tintGold, green: c.tintGreen, wine: c.tintWine }[kind];
  const col = { gold: c.gold, green: c.success, wine: c.wineLight }[kind];
  return <View style={{ backgroundColor: bg, borderRadius: 12, height: 22, paddingHorizontal: 10, justifyContent: 'center' }}><Text style={{ color: col, fontFamily: f.s, fontSize: 11 }}>{label}</Text></View>;
};
export const Notice = ({ text, danger, title }: { text: string; danger?: boolean; title?: string }) => (
  <View style={{ backgroundColor: danger ? c.danger : c.notice, borderRadius: 14, borderWidth: 1, borderColor: danger ? c.wine : c.gold + '66', padding: 14, flexDirection: 'row', gap: 12, marginVertical: 8 }}>
    <Ic n="id-card" s={22} color={c.goldLight} />
    <View style={{ flex: 1 }}>{title && <T v="semi" style={{ marginBottom: 2 }}>{title}</T>}<T v="label" color={c.text} style={{ fontSize: 12, lineHeight: 17 }}>{text}</T></View>
  </View>
);
export const Placeholder = ({ w, h, r = 12 }: { w?: number | string; h: number; r?: number }) => (
  <View style={{ width: w as any, height: h, borderRadius: r, backgroundColor: c.surface3, alignItems: 'center', justifyContent: 'center' }}><Ic n="image" s={24} color={c.dim} /></View>
);
export const IconCircle = ({ n, size = 44, bg = c.tintGold, color = c.goldLight }: any) => (
  <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: bg, alignItems: 'center', justifyContent: 'center' }}><Ic n={n} s={size * 0.5} color={color} /></View>
);
export const SumRow = ({ l, v, color, bold }: { l: string; v: string; color?: string; bold?: boolean }) => (
  <Row style={{ justifyContent: 'space-between', marginVertical: 4 }}>
    <T v={bold ? 'title' : 'mutedb'}>{l}</T><T v={bold ? 'bold' : 'semi'} color={color} style={bold ? { fontSize: 20 } : undefined}>{v}</T>
  </Row>
);

export const Summary = () => {
  const { items, coupon } = useStore();
  const t = totalsOf(items, coupon);
  return (
    <View style={{ marginVertical: 8 }}>
      <SumRow l="Subtotal" v={brl(t.subtotal)} /><SumRow l="Taxa de entrega" v={brl(t.delivery)} />
      {t.discount > 0 && <SumRow l="Desconto" v={'- ' + brl(t.discount)} color={c.success} />}
      <View style={{ height: 1, backgroundColor: c.line, marginVertical: 8 }} /><SumRow l="Total" v={brl(t.total)} bold />
    </View>
  );
};
import { totals as totalsOf } from '../store';

export const TabBar = () => {
  const r = useRouter(); const path = usePathname(); const { bottom } = useSafeAreaInsets();
  const qty = useStore((s) => s.items.reduce((a, i) => a + i.qty, 0));
  const tabs = [['/home', 'house', 'Início'], ['/search', 'search', 'Buscar'], null, ['/orders', 'receipt', 'Pedidos'], ['/profile', 'user', 'Perfil']] as const;
  return (
    <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 64 + bottom, backgroundColor: c.surface1, borderTopWidth: 1, borderTopColor: c.line, flexDirection: 'row', paddingBottom: bottom }}>
      {tabs.map((t, i) => t ? (
        <Pressable key={t[0]} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 3 }} onPress={() => path !== t[0] && r.replace(t[0] as any)}>
          <Ic n={t[1]} color={path === t[0] ? c.gold : c.dim} /><Text style={{ fontFamily: f.m, fontSize: 11, color: path === t[0] ? c.gold : c.dim }}>{t[2]}</Text>
        </Pressable>
      ) : (
        <View key={i} style={{ flex: 1, alignItems: 'center' }}>
          <Pressable onPress={() => r.push('/bag')} style={{ position: 'absolute', top: -34, width: 64, height: 64, borderRadius: 32, borderWidth: 5, borderColor: c.bg, overflow: 'visible' }}>
            <LinearGradient colors={g.gold} style={{ flex: 1, borderRadius: 32, alignItems: 'center', justifyContent: 'center' }}><Ic n="shopping-bag" s={28} color={c.bg} /></LinearGradient>
            {qty > 0 && <View style={{ position: 'absolute', top: -6, right: -6, minWidth: 22, height: 22, borderRadius: 11, backgroundColor: c.wine, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: c.bg }}><Text style={{ color: c.text, fontFamily: f.b, fontSize: 11 }}>{qty}</Text></View>}
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export const ProductCard = ({ p, small, onAdd, onPress }: { p: Product; small?: boolean; onAdd: () => void; onPress: () => void }) => {
  const w = small ? 150 : '48.2%';
  return (
    <Pressable onPress={onPress} style={{ width: w as any, backgroundColor: c.surface1, borderRadius: small ? 16 : 18, borderWidth: 1, borderColor: c.line, padding: small ? 8 : 8, marginBottom: small ? 0 : 12 }}>
      <View>
        <Placeholder h={small ? 76 : 140} />
        {!small && <View style={{ position: 'absolute', top: 6, right: 6, width: 28, height: 28, borderRadius: 14, backgroundColor: c.bg + 'B3', alignItems: 'center', justifyContent: 'center' }}><Ic n="heart" s={15} color={p.fav ? c.wineLight : c.text} fill={p.fav ? c.wineLight : undefined} /></View>}
        {p.badge && !small && <View style={{ position: 'absolute', top: 6, left: 6, backgroundColor: c.wine, borderRadius: 8, paddingHorizontal: 6, paddingVertical: 2 }}><Text style={{ color: c.text, fontFamily: f.b, fontSize: 10 }}>{p.badge}</Text></View>}
      </View>
      <Text numberOfLines={2} style={{ fontFamily: f.s, fontSize: small ? 13 : 14, color: c.text, marginTop: 8, minHeight: small ? 18 : 36 }}>{p.name}</Text>
      <Text style={{ fontFamily: f.r, fontSize: small ? 11 : 12, color: c.muted, marginTop: 2 }}>{[p.origin, p.unit].filter(Boolean).join(' · ')}</Text>
      <Row style={{ justifyContent: 'space-between', marginTop: 8 }}>
        <Text style={{ fontFamily: f.b, fontSize: small ? 15 : 16, color: c.gold }}>{brl(p.price)}</Text>
        <Pressable onPress={onAdd}><LinearGradient colors={g.gold} style={{ width: small ? 28 : 32, height: small ? 28 : 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}><Ic n="plus" s={18} color={c.bg} /></LinearGradient></Pressable>
      </Row>
    </Pressable>
  );
};

export const BottomBar = ({ children }: { children: React.ReactNode }) => {
  const { bottom } = useSafeAreaInsets();
  return <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: c.surface1, borderTopWidth: 1, borderTopColor: c.line, paddingHorizontal: 20, paddingTop: 16, paddingBottom: bottom + 8, flexDirection: 'row', alignItems: 'center', gap: 12 }}>{children}</View>;
};
export const Logo = ({ w = 340 }: { w?: number }) => {
  const { Image } = require('react-native');
  return <Image source={require('../../assets/logo.png')} style={{ width: w, height: w * (940 / 1312) }} resizeMode="contain" />;
};
export const Emblem = ({ s = 120 }: { s?: number }) => {
  const { Image } = require('react-native');
  return <Image source={require('../../assets/emblem.png')} style={{ width: s, height: s, borderRadius: s / 2, borderWidth: 2, borderColor: c.gold }} />;
};
export const Toast = ({ text }: { text: string }) => text ? <View style={{ position: 'absolute', top: 70, alignSelf: 'center', backgroundColor: c.surface3, borderColor: c.gold, borderWidth: 1, paddingHorizontal: 16, paddingVertical: 10, borderRadius: 20 }}><T v="semi">{text}</T></View> : null;
