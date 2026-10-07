import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen, Header, Card, Row, T, IconCircle, Btn, Badge } from '../src/components/ui';
const list = [
  { id: 1, icon: 'house', label: 'Casa', line: 'Rua das Flores, 120 – Centro', main: true },
  { id: 2, icon: 'briefcase', label: 'Trabalho', line: 'Av. Beira Mar, 800 – Atalaia', main: false },
];
export default function Addresses() {
  const r = useRouter();
  return (
    <Screen scroll>
      <Header title="Endereços" />
      {list.map((a) => (
        <Card key={a.id} active={a.main} style={{ marginBottom: 10 }}>
          <Row style={{ gap: 12 }}><IconCircle n={a.icon} /><View style={{ flex: 1 }}><T v="semi">{a.label}</T><T v="label">{a.line}</T></View>{a.main && <Badge label="Principal" />}</Row>
        </Card>
      ))}
      <Btn title="Adicionar endereço" variant="outline" icon="plus" onPress={() => r.push('/address')} style={{ marginTop: 8 }} />
    </Screen>
  );
}
