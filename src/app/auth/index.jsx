import { Iconlock, IconMail } from "@/assets/Icon";
import tw from "@/src/lib/tailwind";
import Feather from "@expo/vector-icons/Feather";
import Checkbox from "expo-checkbox";
import { Link, router } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";
import * as Yup from "yup";

const validation = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

export default function Index() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // console.log(email);

  const handleSubmit = (value) => {
    router.push("/(tab)");
    setEmail(value);
  };

  return (
    <ImageBackground
      source={require("@/assets/images/Loginscreen.png")}
      resizeMode="cover"
      style={tw`flex-1 justify-end`}
    >
      <View style={tw`bg-white rounded-t-3xl px-4 pt-10 pb-12`}>
        <ScrollView keyboardShouldPersistTaps="always">
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              checkbox: false,
              createdOn: new Date(),
            }}
            validationSchema={validation}
            onSubmit={handleSubmit}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue,
            }) => (
              <View style={tw`flex-col gap-3`}>
                {/* Top Heading */}
                <Text style={tw`text-xl font-bold text-black text-center`}>
                  Welcome back!
                </Text>
                <Text style={tw`text-sm text-[#888] text-center mb-4`}>
                  Please sign in to continue.
                </Text>

                {/* Email */}
                <Text style={tw`text-sm font-semibold text-[#121212]`}>
                  Email
                </Text>
                <View
                  style={tw`flex-row items-center bg-[#F3F3F3] px-4 py-3 rounded-md`}
                >
                  <SvgXml xml={IconMail} />
                  <TextInput
                    style={tw`flex-1 text-base text-black ml-2`}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholder="Enter your email"
                    placeholderTextColor="#888"
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={tw`text-red-500 text-sm`}>{errors.email}</Text>
                )}

                {/* Password */}
                <Text style={tw`text-sm font-semibold text-[#121212]`}>
                  Password
                </Text>
                <View
                  style={tw`flex-row items-center bg-[#F3F3F3] px-4 py-3 rounded-md`}
                >
                  <SvgXml xml={Iconlock} />
                  <TextInput
                    style={tw`flex-1 text-base text-black ml-2`}
                    secureTextEntry={!showPassword}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    placeholder="Enter your password"
                    placeholderTextColor="#888"
                  />
                  <Feather
                    onPress={() => setShowPassword((prev) => !prev)}
                    name={showPassword ? "eye-off" : "eye"}
                    size={18}
                    color="#888"
                  />
                </View>
                {touched.password && errors.password && (
                  <Text style={tw`text-red-500 text-sm`}>
                    {errors.password}
                  </Text>
                )}

                {/* Checkbox and Forgot */}
                <View style={tw`flex-row justify-between items-center mt-2`}>
                  <View style={tw`flex-row items-center`}>
                    <Checkbox
                      value={values.checkbox}
                      onValueChange={(val) => setFieldValue("checkbox", val)}
                      color="#B0B0B0"
                      style={{ width: 16, height: 16 }}
                    />
                    <Text style={tw`text-[#888888] text-sm ml-2`}>
                      Remember me
                    </Text>
                  </View>
                  <Link
                    href="auth/OTPOne"
                    style={tw`text-[#E25C44] underline  font-inter-600 text-xs`}
                  >
                    Forgot password?
                  </Link>
                </View>

                {/* Sign in button */}
                <Pressable
                  onPress={() => {
                    // handleSubmit()
                    router.push("/(tab)");
                  }}
                  style={tw`mt-6 bg-[#F15A29] p-4 rounded-full`}
                >
                  <Text
                    style={tw`text-center text-white text-base font-semibold`}
                  >
                    Sign in
                  </Text>
                </Pressable>

                {/* Sign up link */}
                <Text style={tw`text-center text-[#121212] mt-4`}>
                  Don’t have an account?{" "}
                  <Link
                    href="/auth/SingUp"
                    style={tw`text-[#ED6237] underline`}
                  >
                    Sign up
                  </Link>
                </Text>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
