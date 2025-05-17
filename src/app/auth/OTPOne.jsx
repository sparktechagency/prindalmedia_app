import { ImageBackground } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import tw from "twrnc";
import image from "../../../assets/images/SplashScreen.png";
import AuthHeading from "../../components/ui/AuthHeading";


const OTPOne = () => {


    const [otpVerify, setOtpVerify] = useState('');

    const handleNavigate = () => {
        if (otpVerify) {
            router.push('auth/EmailVerify')
        }else{
            Alert.alert( 'OTP' ,'OTP Not Verify')
        }
    }


  return (
    <View>
       <ImageBackground
        source={image}
        resizeMode="cover"
        style={tw`w-full  overflow-hidden`}
      >
    <View
      style={tw`flex flex-col gap-8 items-center justify-center h-full p-4`}
    >
      
      {/*  */}
      <AuthHeading Heading={'Verify OTP'} SubHeading={'We have sent a six digit code to your email'} />

      <OtpInput
        style={tw`bg-red-500`}
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

      <View style={tw`w-full flex-col gap-4 mt-10 rounded-full bg-[#121212] `}>
        <Pressable onPress={handleNavigate} style={tw`py-4`}>
          <Text style={tw`text-center text-white text-xl`}>Verify</Text>
        </Pressable>
      </View>
    </View>
    </ImageBackground>
    </View>
  );
};

export default OTPOne;
