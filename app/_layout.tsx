import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Cinzel_700Bold } from '@expo-google-fonts/cinzel';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { c } from '../src/theme';

export default function Layout() {
  const [ok] = useFonts({ Cinzel_700Bold, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold });
  if (!ok) return <View style={{ flex: 1, backgroundColor: c.bg }} />;
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      {/* 500ms em toda transição de tela (iOS: simple_push / fade / slide_from_bottom respeitam animationDuration) */}
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: c.bg }, animation: 'simple_push', animationDuration: 500 }}>
        <Stack.Screen name="index" options={{ animation: 'fade' }} />
        {['home', 'search', 'orders', 'profile'].map((n) => <Stack.Screen key={n} name={n} options={{ animation: 'fade', gestureEnabled: false }} />)}
        <Stack.Screen name="arrived" options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen name="review" options={{ animation: 'slide_from_bottom' }} />
      </Stack>
    </SafeAreaProvider>
  );
}
