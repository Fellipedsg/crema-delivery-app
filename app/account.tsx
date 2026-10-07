import { Screen, Header, Input, Btn } from '../src/components/ui';
import { user } from '../src/mocks/data';
import { useRouter } from 'expo-router';
export default function Account() {
  const r = useRouter();
  return (
    <Screen scroll>
      <Header title="Meus dados" />
      <Input label="Nome completo" icon="user" defaultValue={user.name} />
      <Input label="CPF" icon="id-card" defaultValue="529.982.247-25" editable={false} />
      <Input label="Data de nascimento" icon="calendar" defaultValue="15 / 05 / 1995" editable={false} />
      <Input label="Celular/WhatsApp" icon="phone" defaultValue="(79) 9 9123-4321" />
      <Input label="E-mail" icon="mail" defaultValue={user.email} autoCapitalize="none" />
      <Btn title="Salvar alterações" onPress={() => r.back()} />
    </Screen>
  );
}
