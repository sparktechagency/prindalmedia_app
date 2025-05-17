import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Checkbox from "expo-checkbox";
import { Link, router } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import {
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import tw from "twrnc";
import * as Yup from "yup";
import image from "../../assets/images/SplashScreen.png";
import AuthHeading from '../components/ui/AuthHeading';

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
    <View
      style={tw`  h-full flex-1  dark:bg-black flex-col gap-10 items-center justify-center`}
    >
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={tw`w-full  justify-center items-center rounded-lg overflow-hidden`}
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
            <View style={tw`w-full p-[4%]  h-full flex-col justify-center gap-3`}>
              

              {/* top Heading */}
              <AuthHeading Heading={'Welcome back!'} SubHeading={'Please sign in to continue.'} />

              {/* Email */}
              <Text style={tw`text-lg font-medium`}>Email</Text>
              <View
                style={tw`flex-row items-center bg-[#F3F3F3] px-4 py-2 rounded-md`}
              >
                
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
              <Text style={tw`text-lg font-medium mt-4`}>Password</Text>
              <View
                style={tw`flex-row items-center bg-[#F3F3F3] px-4 py-2 rounded-md`}
              >
                <AntDesign
                  name="lock"
                  size={20}
                  color="black"
                  style={tw`mr-2`}
                />
                <TextInput
                  style={tw`flex-1 text-base text-black dark:text-white`}
                  secureTextEntry={!showPassword}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                <Feather
                  onPress={() => setShowPassword((prev) => !prev)}
                  name={showPassword ? "eye-off" : "eye"}
                  size={18}
                  color="black"
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
                    color="black"
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
                <Text style={tw`text-center text-white text-xl`}>Sign in</Text>
              </Pressable>

              <Text style={tw`text-center mt-4`}>
                Don’t have an account?{" "}
                <Link href="/auth/SingUp" style={tw`text-blue-700`}>
                  Sign up
                </Link>
              </Text>
            </View>
          )}
        </Formik>
      </ImageBackground>
    </View>
  );
}
