import { Alert, View } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Screen, T, Row, Ic, Circle, Badge, TabBar } from '../src/components/ui';
import { user } from '../src/mocks/data';
import { c, g } from '../src/theme';
export default function Profile() {
  const r = useRouter();
  const menu: [string, string, string?][] = [['user', 'Meus dados'], ['map-pin', 'Endereços'], ['credit-card', 'Formas de pagamento'], ['ticket', 'Cupons', '2'], ['heart', 'Favoritos'], ['bell', 'Notificações'], ['message-circle', 'Ajuda e suporte']];
  const out = () => Alert.alert('Sair da conta?', undefined, [{ text: 'Cancelar', style: 'cancel' }, { text: 'Sair', style: 'destructive', onPress: () => r.replace('/login') }]);
  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <Screen scroll bottom={90}>
        <Row style={{ justifyContent: 'space-between', marginBottom: 16 }}><T v="l">Perfil</T><Ic n="settings" /></Row>
        <Row style={{ gap: 14, marginBottom: 20 }}>
          <View style={{ width: 64, height: 64, borderRadius: 32, borderWidth: 2, borderColor: c.gold, backgroundColor: c.surface2, alignItems: 'center', justifyContent: 'center' }}><Ic n="user" s={30} color={c.gold} /></View>
          <View style={{ flex: 1 }}><T v="title">{user.name}</T><T v="label">{user.email}</T></View><Ic n="chevron-right" color={c.dim} />
        </Row>
        <LinearGradient colors={g.clube} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ borderRadius: 18, padding: 18, marginBottom: 20 }}>
          <T v="over" color="#3A2A0C">CLUBE CREMA</T>
          <Row style={{ justifyContent: 'space-between', marginVertical: 4 }}><T v="s" color="#1B1206" style={{ fontSize: 20 }}>Nível Ouro</T><T style={{ fontFamily: 'Inter_700Bold', fontSize: 18, color: '#1B1206' }}>{user.pts} pts</T></Row>
          <View style={{ height: 6, borderRadius: 3, backgroundColor: '#1B120633', marginVertical: 8 }}><View style={{ width: `${(user.pts / 500) * 100}%`, height: 6, borderRadius: 3, backgroundColor: '#1B1206' }} /></View>
          <T v="label" color="#3A2A0C">Faltam 180 pts para ganhar R$ 20 de desconto</T>
        </LinearGradient>
        {menu.map(([i, l, b]) => (
          <Row key={l} style={{ height: 54, gap: 14, borderBottomWidth: 1, borderBottomColor: c.line }}>
            <Ic n={i} color={c.goldLight} /><T v="body" style={{ flex: 1 }} onPress={l === 'Notificações' ? () => r.push('/notifications') : undefined}>{l}</T>{b && <Badge label={b} kind="wine" />}<Ic n="chevron-right" s={18} color={c.dim} />
          </Row>))}
        <Row style={{ height: 54, gap: 14 }} ><Ic n="log-out" color={c.wineLight} /><T v="semi" color={c.wineLight} onPress={out}>Sair</T></Row>
      </Screen>
      <TabBar />
    </View>
  );
}
