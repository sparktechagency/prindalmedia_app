import { AntDesign, Fontisto } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useState } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { TextInput } from "react-native";
import tw from "twrnc";

const EmailVerify = () => {
  const [verifyEmail, setVerifyEmail] = useState("");

  const handleNavigate = () => {
    if (verifyEmail) {
      router.push("/OTPVerifyTow");
    } else {
      Alert.alert("Email", "Email Not Verify");
    }
  };

  return (
    <View
      style={tw`p-5 h-full  bg-white dark:bg-black flex-col gap-10 items-center justify-center `}
    >
      <View style={tw` w-full flex-col gap-3 `}>
        <Text style={tw`text-2xl text-black dark:text-white text-center`}>
          Forgot password
        </Text>

        <Text
          style={tw`mt-2 text-base text-gray-700 dark:text-gray-300 text-center`}
        >
          Enter your email address to rest your password
        </Text>
      </View>

      {/* Login input  */}
      <View style={tw`mt-2 w-full flex-col gap-3`}>
        {/* email input */}
        <View style={tw`flex-col gap-3`}>
          <Text style={tw`text-lg font-medium`}>Email</Text>
          <View
            style={tw`flex-row justify-between items-center bg-[#F3F3F3] rounded-md px-4 py-2`}
          >
            <Fontisto
              name="email"
              size={20}
              color="black"
              style={tw`mr-2 text-[#888888]`}
            />
            <TextInput
              style={tw`flex-1 text-base text-black dark:text-white `}
              onChangeText={setVerifyEmail}
              value={verifyEmail}
            />
          </View>
        </View>
      </View>

      {/* Login button */}
      <View style={tw`w-full flex-col gap-4 mt-4 rounded-full bg-[#121212] `}>
        <Pressable onPress={handleNavigate} style={tw`py-4`}>
          <Text style={tw`text-center text-white text-xl`}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EmailVerify;
