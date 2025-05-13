import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(auth)/register"
        options={{
          title: 'Register',
          presentation: 'modal'
        }}
      />
      <Stack.Screen
        name="(auth)/login"
        options={{
          title: 'Login',
          presentation: 'modal'
        }}
      />
    </Stack>
  );
}