import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen, T, IconCircle, Btn } from '../src/components/ui';
import { c } from '../src/theme';
export default function Blocked() {
  const r = useRouter();
  return (
    <Screen style={{ justifyContent: 'center', alignItems: 'center' }}>
      <IconCircle n="shield-check" size={96} bg={c.tintWine} color={c.wineLight} />
      <T v="xl" style={{ marginTop: 24, textAlign: 'center' }}>Acesso bloqueado</T>
      <T v="mutedb" style={{ textAlign: 'center', marginVertical: 14 }}>Não é possível acessar o catálogo da Crema por menores de 18 anos. Volte quando atingir a maioridade.</T>
      <View style={{ alignSelf: 'stretch' }}><Btn title="Voltar" variant="outline" onPress={() => r.replace('/age')} /></View>
    </Screen>
  );
}
