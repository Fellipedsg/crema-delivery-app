import { useState } from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen, Logo, T, Input, Btn, Row } from '../src/components/ui';
import { c } from '../src/theme';
export default function Login() {
  const r = useRouter(); const [show, setShow] = useState(false);
  return (
    <Screen scroll style={{ paddingTop: 8 }}>
      <View style={{ alignItems: 'center' }}><Logo w={150} /></View>
      <T v="l" style={{ marginTop: 8 }}>Bem-vindo de volta</T>
      <T v="mutedb" style={{ marginBottom: 20 }}>Entre para pedir bebidas geladas e essências.</T>
      <Input label="E-mail ou celular" icon="mail" placeholder="voce@email.com" autoCapitalize="none" defaultValue="rafael.costa@email.com" />
      <Input label="Senha" icon="lock" right="eye" onRight={() => setShow(!show)} secureTextEntry={!show} defaultValue="senha12345" />
      <T v="semi" color={c.gold} style={{ alignSelf: 'flex-end', fontSize: 13, marginBottom: 16 }}>Esqueci minha senha</T>
      <Btn title="Entrar" onPress={() => r.replace('/home')} />
      <Row style={{ marginVertical: 20, gap: 12 }}><View style={{ flex: 1, height: 1, backgroundColor: c.line }} /><T v="label">ou continue com</T><View style={{ flex: 1, height: 1, backgroundColor: c.line }} /></Row>
      <Row style={{ gap: 12 }}><Btn title="Google" variant="dark" style={{ flex: 1 }} onPress={() => r.replace('/home')} /><Btn title="Apple" variant="dark" style={{ flex: 1 }} onPress={() => r.replace('/home')} /></Row>
      <Btn title="Entrar só com o celular (SMS)" variant="ghost" icon="smartphone" style={{ marginTop: 12 }} onPress={() => r.push('/sms')} />
      <T v="mutedb" style={{ textAlign: 'center', marginTop: 12 }}>Não tem conta? <T v="semi" color={c.gold} onPress={() => r.push('/signup')}>Cadastre-se</T></T>
    </Screen>
  );
}
