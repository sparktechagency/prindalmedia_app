import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, SafeAreaView, Text, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import tw from "twrnc";
import AuthHeading from "../../components/ui/AuthHeading";

const OTPVerifyTow = () => {
  const [otpVerify, setOtpVerify] = useState("");

  const handleNavigate = () => {
    if (otpVerify) {
      router.push("auth/ResetPassword");
    } else {
      Alert.alert("OTP", "OTP Not Verify");
    }
  };

  return (
    <View style={tw`bg-[#FDFFFE] justify-center h-full p-[4%]`}>
      <SafeAreaView>
        <View style={tw`flex flex-col `}>
          {/*   */}
          <AuthHeading
            Heading={"Verify OTP"}
            SubHeading={"We have sent a six digit code to your email"}
          />
          <View style={tw`flex flex-col gap-2 justify-end items-end `}>
            <OtpInput
              style={tw`bg-[#F3F3F3]`}
              focusColor="black"
              placeholder="000000"
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
            {/* navigation */}
            <Link
              href=""
              style={tw`text-[#0063E5] text-sm font-semibold underline `}
            >
              Send again?
            </Link>
          </View>

          <View style={tw`w-full flex-col rounded-full bg-[#121212] mt-10 `}>
            <Pressable onPress={handleNavigate} style={tw`py-4`}>
              <Text style={tw`text-center text-white text-xl`}>Verify</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default OTPVerifyTow;
