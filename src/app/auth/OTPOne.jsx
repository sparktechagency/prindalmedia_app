import { Link, router } from "expo-router";
import { useState } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import tw from "twrnc";

const OTPOne = () => {


    const [otpVerify, setOtpVerify] = useState('');

    const handleNavigate = () => {
        if (otpVerify) {
            router.push('/EmailVerify')
        }else{
            Alert.alert( 'OTP' ,'OTP Not Verify')
        }
    }


  return (
    <View
      style={tw`flex flex-col gap-8 items-center justify-center h-full p-4`}
    >
      <View style={tw` w-full flex-col gap-3 `}>
        <Text style={tw`text-2xl text-black dark:text-white text-center`}>
          Verify OTP
        </Text>

        <Text
          style={tw`mt-2 text-base text-gray-700 dark:text-gray-300 text-center`}
        >
          We have sent a six digit code to your email
        </Text>
      </View>

      <OtpInput
        style={tw`bg-red-500`}
        focusColor="black"
        placeholder="******"
        numberOfDigits={6}
        type="numeric"
        onFilled={(text) => setOtpVerify(text)}
        textInputProps={{
          accessibilityLabel: "One-Time Password",
        }}
        textProps={{
          accessibilityRole: "text",
          accessibilityLabel: "OTP digit",
          allowFontScaling: false,
        }}
      />

      <View style={tw`w-full flex-col gap-4 mt-4 rounded-full bg-[#121212] `}>
        <Pressable onPress={handleNavigate} style={tw`py-4`}>
          <Text style={tw`text-center text-white text-xl`}>Verify</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OTPOne;
