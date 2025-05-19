import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RootLayout() {
  const { bottom, top } = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingBottom: bottom,
        paddingTop: top,
      }}
    >
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{}} />
        <Stack.Screen name="auth/EmailVerify" options={{}} />
        <Stack.Screen name="auth/OTPOne" options={{}} />
        <Stack.Screen name="auth/OTPVerifyTow" options={{}} />
        <Stack.Screen name="auth/ResetPassword" options={{}} />
        <Stack.Screen name="auth/SingUp" options={{}} />
        <Stack.Screen name="(drawer)" options={{}} />
      </Stack>
    </SafeAreaView>
  );
}
