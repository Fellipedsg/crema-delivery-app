import { useState } from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen, Header, T, Input, Btn, Check, Row } from '../src/components/ui';
import { useStore } from '../src/store';
import { c } from '../src/theme';
import { ageOf } from './age';

const cpfOk = (v: string) => {
  const d = v.replace(/\D/g, ''); if (d.length !== 11 || /^(\d)\1+$/.test(d)) return false;
  const dv = (n: number) => { let s = 0; for (let i = 0; i < n; i++) s += +d[i] * (n + 1 - i); const r = (s * 10) % 11; return r === 10 ? 0 : r; };
  return dv(9) === +d[9] && dv(10) === +d[10];
};
const mask = (v: string, p: string) => { let i = 0; const d = v.replace(/\D/g, ''); let o = ''; for (const ch of p) { if (i >= d.length) break; o += ch === '#' ? d[i++] : ch; } return o; };
export default function Signup() {
  const r = useRouter(); const { birth } = useStore();
  const [f, set] = useState({ name: 'Rafael Costa', cpf: '', phone: '', email: '', pass: '' }); const [ok, setOk] = useState(false);
  const errs = [!f.name.trim() && 'Informe o nome', !cpfOk(f.cpf) && 'CPF inválido', ageOf(birth.replace(/ /g, '')) < 18 && 'É preciso ter 18 anos ou mais', !/\S+@\S+\.\S+/.test(f.email) && 'E-mail inválido', f.pass.length < 8 && 'Senha com 8+ caracteres', !ok && 'Aceite os termos'].filter(Boolean);
  return (
    <Screen scroll>
      <Header title="Criar conta" />
      <T v="label">Etapa 1 de 2 · Seus dados</T>
      <View style={{ height: 4, backgroundColor: c.surface3, borderRadius: 2, marginVertical: 10 }}><View style={{ width: '50%', height: 4, backgroundColor: c.gold, borderRadius: 2 }} /></View>
      <View style={{ height: 8 }} />
      <Input label="Nome completo" icon="user" value={f.name} onChangeText={(v) => set({ ...f, name: v })} />
      <Input label="CPF" icon="id-card" placeholder="000.000.000-00" keyboardType="number-pad" value={f.cpf} onChangeText={(v) => set({ ...f, cpf: mask(v, '###.###.###-##') })} />
      <Input label="Data de nascimento" icon="calendar" value={birth} editable={false} />
      <Input label="Celular/WhatsApp" icon="phone" placeholder="(79) 9 0000-0000" keyboardType="number-pad" value={f.phone} onChangeText={(v) => set({ ...f, phone: mask(v, '(##) # ####-####') })} />
      <Input label="E-mail" icon="mail" autoCapitalize="none" keyboardType="email-address" value={f.email} onChangeText={(v) => set({ ...f, email: v })} />
      <Input label="Senha" icon="lock" secureTextEntry placeholder="Mínimo de 8 caracteres" value={f.pass} onChangeText={(v) => set({ ...f, pass: v })} />
      <Row style={{ gap: 12, alignItems: 'flex-start', marginBottom: 12 }}><Check on={ok} onPress={() => setOk(!ok)} /><T v="mutedb" style={{ flex: 1, fontSize: 13 }}>Confirmo que tenho 18 anos ou mais e aceito os Termos de Uso e a Política de Privacidade.</T></Row>
      {errs.length > 0 && <T v="label" color={c.wineLight} style={{ marginBottom: 10 }}>{String(errs[0])}</T>}
      <Btn title="Continuar" disabled={errs.length > 0} onPress={() => r.push('/sms')} />
      <T v="mutedb" style={{ textAlign: 'center', marginTop: 16 }}>Já tem conta? <T v="semi" color={c.gold} onPress={() => r.replace('/login')}>Entrar</T></T>
    </Screen>
  );
}
