import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Cinzel_700Bold } from '@expo-google-fonts/cinzel';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { View, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { c } from '../src/theme';

export default function Layout() {
  const [ok] = useFonts({ Cinzel_700Bold, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold });
  if (!ok) return <View style={{ flex: 1, backgroundColor: c.bg }} />;
  return (
    <SafeAreaProvider>
      <View style={Platform.OS === 'web' ? { flex: 1, backgroundColor: '#000', alignItems: 'center' } : { flex: 1 }}>
      <View style={Platform.OS === 'web' ? { flex: 1, width: '100%', maxWidth: 430, overflow: 'hidden' } : { flex: 1 }}>
      <StatusBar style="light" />
      {/* 500ms em toda transição de tela (iOS: simple_push / fade / slide_from_bottom respeitam animationDuration) */}
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: c.bg }, animation: 'simple_push', animationDuration: 500 }}>
        <Stack.Screen name="index" options={{ animation: 'fade' }} />
        {['home', 'search', 'orders', 'profile'].map((n) => <Stack.Screen key={n} name={n} options={{ animation: 'fade', gestureEnabled: false }} />)}
        <Stack.Screen name="arrived" options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen name="review" options={{ animation: 'slide_from_bottom' }} />
      </Stack>
      </View>
      </View>
    </SafeAreaProvider>
  );
}
