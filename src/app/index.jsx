import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";
import Checkbox from "expo-checkbox";
import { Link, router } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import tw from "twrnc";
import * as Yup from 'yup';


const validation = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
});

export default function Index() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  console.log(email);

  const handleSubmit = () =>{
    router.push('/(tab)')
  }

  return (
    <View style={tw`p-5 h-full flex-1 bg-white dark:bg-black flex-col gap-10 items-center justify-center`}>
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
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
          <View style={tw`w-full flex-col gap-3`}>
            <Text style={tw`text-2xl text-black dark:text-white text-center`}>
              Welcome back!
            </Text>
            <Text style={tw`mt-2 text-base text-gray-700 dark:text-gray-300 text-center`}>
              Please sign in to continue.
            </Text>

            {/* Email */}
            <Text style={tw`text-lg font-medium`}>Email</Text>
            <View style={tw`flex-row items-center bg-[#F3F3F3] px-4 py-2 rounded-md`}>
              <Fontisto name="email" size={20} color="black" style={tw`mr-2`} />
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
            <View style={tw`flex-row items-center bg-[#F3F3F3] px-4 py-2 rounded-md`}>
              <AntDesign name="lock" size={20} color="black" style={tw`mr-2`} />
              <TextInput
                style={tw`flex-1 text-base text-black dark:text-white`}
                secureTextEntry={!showPassword}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <Feather
                onPress={() => setShowPassword(prev => !prev)}
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
            <Pressable onPress={handleSubmit} style={tw`mt-6 bg-black p-4 rounded-full`}>
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
    </View>
  );
}
