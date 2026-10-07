import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Logo, T } from '../src/components/ui';
import { c, g } from '../src/theme';

export default function Splash() {
  const r = useRouter();
  const w = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(w, { toValue: 80, duration: 1800, useNativeDriver: false }).start();
    let off = false;
    const t = setTimeout(async () => {
      // idade já confirmada → pula o gate +18 (SPEC: splash)
      const ok = await AsyncStorage.getItem('crema.ageConfirmedAt').catch(() => null);
      if (!off) r.replace(ok ? '/home' : '/age');
    }, 2000);
    return () => { off = true; clearTimeout(t); };
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: c.bg, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ position: 'absolute', width: 360, height: 360, borderRadius: 180, backgroundColor: c.gold, opacity: 0.08 }} />
      <Logo />
      <View style={{ width: 80, height: 3, backgroundColor: c.surface3, borderRadius: 2, marginTop: 60, overflow: 'hidden' }}>
        <Animated.View style={{ width: w, height: 3 }}><LinearGradient colors={g.gold} style={{ flex: 1 }} /></Animated.View>
      </View>
      <View style={{ position: 'absolute', bottom: 56, alignItems: 'center', gap: 4 }}>
        <T v="label">Delivery de bebidas e tabacaria</T><T v="cap">Venda proibida para menores de 18 anos</T>
      </View>
    </View>
  );
}
