import { useEffect, useRef, useState } from 'react';
import { View, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen, Header, T, IconCircle, Btn } from '../src/components/ui';
import { c, f } from '../src/theme';
export default function Sms() {
  const r = useRouter(); const [code, setCode] = useState(''); const [t, setT] = useState(45); const ref = useRef<TextInput>(null);
  useEffect(() => { const i = setInterval(() => setT((x) => Math.max(0, x - 1)), 1000); return () => clearInterval(i); }, []);
  return (
    <Screen scroll>
      <Header />
      <View style={{ alignItems: 'center', marginTop: 8 }}>
        <IconCircle n="smartphone" size={72} />
        <T v="l" style={{ marginTop: 20 }}>Confirme seu celular</T>
        <T v="mutedb" style={{ textAlign: 'center', marginVertical: 12 }}>Enviamos um código de 6 dígitos por SMS para (79) 9 ••••-4321</T>
        <View style={{ flexDirection: 'row', gap: 12, marginVertical: 20 }}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <View key={i} style={{ width: 44, height: 58, borderRadius: 12, backgroundColor: c.surface2, borderWidth: i === code.length ? 2 : 1, borderColor: i === code.length ? c.gold : c.line, alignItems: 'center', justifyContent: 'center' }}>
              <T style={{ fontFamily: f.b, fontSize: 22 }}>{code[i] ?? ''}</T>
            </View>
          ))}
          <TextInput ref={ref} autoFocus value={code} onChangeText={(v) => setCode(v.replace(/\D/g, '').slice(0, 6))} keyboardType="number-pad" style={{ position: 'absolute', width: '100%', height: 58, opacity: 0.01 }} />
        </View>
        <T v="mutedb">{t > 0 ? `Reenviar código em 00:${String(t).padStart(2, '0')}` : <T v="semi" color={c.gold} onPress={() => setT(45)}>Reenviar código</T>}</T>
        <T v="semi" color={c.gold} style={{ marginVertical: 16 }}>Alterar número</T>
      </View>
      <Btn title="Confirmar" disabled={code.length < 6} onPress={() => r.push('/address')} />
    </Screen>
  );
}
