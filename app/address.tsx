import { useState } from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen, Header, Btn, Input, Chip, Row, T, Ic } from '../src/components/ui';
import { MapMock } from '../src/components/MapMock';
import { c } from '../src/theme';
export default function Address() {
  const r = useRouter(); const [lbl, setLbl] = useState('Casa'); const [cep, setCep] = useState(''); const [street, setStreet] = useState('');
  const onCep = (v: string) => { const d = v.replace(/\D/g, '').slice(0, 8); setCep(d.length > 5 ? d.slice(0, 5) + '-' + d.slice(5) : d); if (d.length === 8) setStreet('Rua das Flores'); };
  return (
    <Screen scroll>
      <Header title="Onde vamos entregar?" />
      <MapMock height={200} pin />
      <Btn title="Usar minha localização atual" variant="outline" icon="navigation" style={{ marginVertical: 14 }} onPress={() => { setCep('49000-000'); setStreet('Rua das Flores'); }} />
      <Row style={{ gap: 12 }}><View style={{ flex: 1 }}><Input label="CEP" placeholder="00000-000" keyboardType="number-pad" value={cep} onChangeText={onCep} /></View><View style={{ flex: 1 }}><Input label="Número" placeholder="120" keyboardType="number-pad" defaultValue="120" /></View></Row>
      <Input label="Rua/Avenida" value={street} onChangeText={setStreet} />
      <Input label="Complemento/referência" placeholder="Apto, bloco, ponto de referência" />
      <T v="label" style={{ marginBottom: 8 }}>Salvar como</T>
      <Row style={{ gap: 8, marginBottom: 20 }}>{[['Casa', 'house'], ['Trabalho', 'briefcase'], ['Outro', 'map-pin']].map(([l, i]) => <Chip key={l} label={l} icon={i} active={lbl === l} onPress={() => setLbl(l)} />)}</Row>
      <Row style={{ gap: 6, marginBottom: 12 }}><Ic n="check" s={16} color={c.success} /><T v="label" color={c.success}>Endereço dentro da área de entrega</T></Row>
      <Btn title="Salvar endereço" onPress={() => r.replace('/home')} />
    </Screen>
  );
}
