import { Iconlock, IconMail } from "@/assets/Icon";
import Feather from "@expo/vector-icons/Feather";
import Checkbox from "expo-checkbox";
import { Link, router } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SvgXml } from "react-native-svg";
import tw from "twrnc";
import * as Yup from "yup";
import AuthHeading from "../components/ui/AuthHeading";
import { _HIGHT } from "../utils/utils";

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
    <View style={tw`flex-1 p-[4%]`}>
      <ScrollView scrollEnabled={false} style={tw``}>
        <View
          style={[
            tw`w-full  justify-center items-center rounded-lg overflow-hidden`,
            {
              height: _HIGHT,
            },
          ]}
        >
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
              <View style={tw`w-full  h-full flex-col justify-center gap-3`}>
                {/* top Heading */}
                <AuthHeading
                  Heading={"Welcome back!"}
                  SubHeading={"Please sign in to continue."}
                />

                {/* Email */}
                <Text style={tw`text-4  font-semibold text-[#121212] `}>
                  Email
                </Text>
                <View
                  style={tw`flex-row items-center bg-[#F3F3F3] px-4 py-2 rounded-md`}
                >
                  <SvgXml xml={IconMail} />
                  {/* <Fontisto name="email" size={24} color="#888888" /> */}
                  <TextInput
                    style={tw`flex-1 text-base text-black dark:text-white`}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={tw`text-red-500`}>{errors.email}</Text>
                )}

                {/* Password */}
                <Text style={tw`text-4  font-semibold text-[#121212]`}>
                  Password
                </Text>
                <View
                  style={tw`flex-row items-center bg-[#F3F3F3] px-4 py-2 rounded-md`}
                >
                  {/* <AntDesign
                    name="lock"
                    size={20}
                    color="#888888"
                    style={tw`mr-2`}
                  /> */}
                  <SvgXml xml={Iconlock} />

                  <TextInput
                    style={tw`flex-1  text-base text-black dark:text-white`}
                    secureTextEntry={!showPassword}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />
                  <Feather
                    onPress={() => setShowPassword((prev) => !prev)}
                    name={showPassword ? "eye-off" : "eye"}
                    size={18}
                    color="#888888"
                  />
                </View>
                {touched.password && errors.password && (
                  <Text style={tw`text-red-500`}>{errors.password}</Text>
                )}

                {/* Checkbox */}
                <View style={tw`flex-row justify-between mt-2`}>
                  <View style={tw`flex-row items-center gap-2`}>
                    <Checkbox
                      value={values.checkbox}
                      onValueChange={(val) => setFieldValue("checkbox", val)}
                      color="#B0B0B0"
                    />
                    <Text>Remember me</Text>
                  </View>
                  <Link href="auth/OTPOne" style={tw`text-[#0063E5] underline`}>
                    Forget password?
                  </Link>
                </View>

                {/* Submit Button */}
                <Pressable
                  onPress={handleSubmit}
                  style={tw`mt-6 bg-black p-4 rounded-full`}
                >
                  <Text style={tw`text-center text-white text-xl`}>
                    Sign in
                  </Text>
                </Pressable>

                <Text style={tw`text-center mt-32`}>
                  Don’t have an account?{" "}
                  <Link href="/auth/SingUp" style={tw`text-blue-700`}>
                    Sign up
                  </Link>
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
}
