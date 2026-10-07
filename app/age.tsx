import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen, Emblem, T, Input, Btn } from '../src/components/ui';
import { useStore } from '../src/store';
import { c, f } from '../src/theme';
import { Text } from 'react-native';

export const maskDate = (v: string) => { const d = v.replace(/\D/g, '').slice(0, 8); return d.replace(/^(\d{2})(\d)/, '$1 / $2').replace(/^(\d{2}) \/ (\d{2})(\d)/, '$1 / $2 / $3'); };
export const ageOf = (v: string) => {
  const [d, m, y] = v.split('/').map((x) => parseInt(x.trim(), 10));
  if (!d || !m || !y || y < 1900) return -1;
  const now = new Date(); let a = now.getFullYear() - y;
  if (now.getMonth() + 1 < m || (now.getMonth() + 1 === m && now.getDate() < d)) a--;
  return a;
};
export default function Age() {
  const r = useRouter(); const { birth, setBirth } = useStore();
  const go = () => (ageOf(birth) >= 18 ? r.replace('/login') : r.replace('/blocked'));
  return (
    <Screen scroll style={{ alignItems: 'center', paddingTop: 40 }}>
      <View><Emblem />
        <View style={{ position: 'absolute', right: -14, top: 0, backgroundColor: c.wine, borderRadius: 14, paddingHorizontal: 10, paddingVertical: 4 }}><Text style={{ color: c.text, fontFamily: f.b }}>+18</Text></View>
      </View>
      <T v="xl" style={{ marginTop: 28, textAlign: 'center' }}>Você tem 18 anos?</T>
      <T v="mutedb" style={{ textAlign: 'center', marginVertical: 14 }}>A Crema vende bebidas alcoólicas e produtos de tabacaria. Por lei, a venda é proibida para menores de 18 anos.</T>
      <View style={{ alignSelf: 'stretch', marginTop: 8 }}>
        <Input label="Data de nascimento" icon="calendar" placeholder="DD / MM / AAAA" keyboardType="number-pad" value={birth} onChangeText={(v) => setBirth(maskDate(v))} />
        <Btn title="Sim, tenho 18 anos ou mais" onPress={go} disabled={ageOf(birth.replace(/ /g, '')) < 0} style={{ marginBottom: 12 }} />
        <Btn title="Não tenho 18 anos" variant="outline" onPress={() => r.replace('/blocked')} />
      </View>
      <T v="cap" style={{ marginTop: 28, textAlign: 'center' }}>Venda proibida para menores de 18 anos (ECA, art. 243).</T>
    </Screen>
  );
}
