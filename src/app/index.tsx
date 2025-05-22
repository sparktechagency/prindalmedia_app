import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useRouter } from "expo-router";
import { useEffect } from "react";
import tw from "../lib/tailwind";

SplashScreen.preventAutoHideAsync(); // Prevent Expo's splash screen from auto-hiding

export default function App() {
  const route = useRouter();

  useEffect(() => {
    Font.loadAsync({
      InterBlack: require("@/assets/fonts/Inter_18pt-Black.ttf"),
      InterBold: require("@/assets/fonts/Inter_18pt-Bold.ttf"),
      InterSemiBold: require("@/assets/fonts/Inter_28pt-SemiBold.ttf"),
      InterLight: require("@/assets/fonts/Inter_24pt-Light.ttf"),
      InterRegular: require("@/assets/fonts/Inter_18pt-Regular.ttf"),
      InterMedium: require("@/assets/fonts/Inter_28pt-Medium.ttf"),
    });
    SplashScreen.hideAsync();
    setTimeout(() => {
      route?.replace("/auth");
    }, 1000);
  }, [route]);

  return (
    <View style={tw`flex-1 justify-center items-center bg-white pb-[25%]`}>
      <View style={tw`items-end`}>
        <View style={tw`mb-1`}>
          {/* Replace this with your logo image */}
          <View style={tw` justify-center flex-row items-center gap-2`}>
            <Image
              source={require("@/assets/images/appIcons.png")}
              style={tw` w-16 h-16 `}
            />
            <Image source={require("@/assets/images/logo.png")} style={tw` `} />
          </View>
        </View>
        <Text style={tw`text-3 font-inter-500 text-textgray`}>
          Share your taste.
        </Text>
      </View>

      <TouchableOpacity style={tw`absolute bottom-6`}>
        <Text style={tw`text-[#ED6237] underline font-inter-600 text-sm`}>
          Our Mission
        </Text>
      </TouchableOpacity>

      <ActivityIndicator
        size="large"
        color="black"
        style={tw`absolute bottom-16`}
      />
    </View>
  );
}
