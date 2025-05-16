import { Fontisto } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { router } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import tw from "twrnc";
import * as Yup from "yup";
import image from "../../../assets/images/SplashScreen.png";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const EmailVerify = () => {
  const [verifyEmail, setVerifyEmail] = useState("");

  const handleFormSubmit = (values) => {
    setVerifyEmail(values.email);
    router.push("auth/OTPVerifyTo");
  };

  return (
     <View >
       <ImageBackground
        source={image}
        resizeMode="cover"
        style={tw`w-full  overflow-hidden`}
      >
        <View
          style={tw`p-5 h-full  dark:bg-black flex-col gap-10 items-center justify-center`}
        >
          <View style={tw`w-full flex-col gap-3`}>
            <Text style={tw`text-2xl text-[#121212] font-bold dark:text-white text-center`}>
              Forgot password
            </Text>

            <Text
              style={tw`mt-2 text-3 text-[#888888] dark:text-gray-300 text-center`}
            >
              Enter your email address to reset your password
            </Text>
          </View>

          <Formik
            initialValues={{ email: "" }}
            validationSchema={ForgotPasswordSchema}
            onSubmit={handleFormSubmit}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                {/* Email input */}
                <View style={tw`mt-2 w-full flex-col gap-3`}>
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
                      style={tw`flex-1 text-base text-black dark:text-white`}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={tw`text-red-500`}>{errors.email}</Text>
                  )}
                </View>

                {/* Submit button */}
                <View
                  style={tw`w-full flex-col gap-4 mt-4 rounded-full bg-[#121212]`}
                >
                  <Pressable onPress={handleSubmit} style={tw`py-4`}>
                    <Text style={tw`text-center text-white text-xl`}>
                      Submit
                    </Text>
                  </Pressable>
                </View>
              </>
            )}
          </Formik>
        </View>
      </ImageBackground>
    </View>
  );
};

export default EmailVerify;
