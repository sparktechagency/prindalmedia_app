import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import tw from "twrnc";

export default function RootLayout() {
  return (
    <SafeAreaView style={tw`flex-1 mt-5`}>
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
