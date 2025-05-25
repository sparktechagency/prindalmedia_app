import { Iconlock, IconMail, user } from "@/assets/Icon";
import Feather from "@expo/vector-icons/Feather";
import Checkbox from "expo-checkbox";
import { ImageBackground } from "expo-image";
import { Formik } from "formik";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";
import * as Yup from "yup";
import tw from "../../lib/tailwind";

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Full name is required"),
  userName: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  checkbox: Yup.boolean().oneOf([true], "You must accept terms"),
});

export default function SingUp() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  console.log(email);

  const handleSubmit = (values) => {
    console.log("Submitted data", values);
    // Handle API call or navigation
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      // keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <ImageBackground
        source={require("@/assets/images/Signupscreen.png")}
        style={tw`flex-1`}
      >
        <ScrollView
          contentContainerStyle={tw`flex-grow flex-1 justify-end`}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={[
              tw`bg-primaryBg  rounded-t-3xl px-6 pt-2 pb-5`,
              {
                shadowOffset: { width: 0, height: -4 },
                shadowOpacity: 0.1,
                shadowRadius: 6,
                elevation: 10,
              },
            ]}
          >
            <Formik
              initialValues={{
                fullname: "",
                userName: "",
                email: "",
                password: "",
                confirmPassword: "",
                checkbox: false,
              }}
              validationSchema={validationSchema}
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
                <View>
                  <Text
                    style={tw`mt-2 text-7  text-textPrimary font-inter-700 mb-2 text-center`}
                  >
                    Create an account
                  </Text>
                  <View style={tw`flex-col gap-2   w-full`}>
                    <Text style={tw`text-4 text-[#121212] font-inter-500`}>
                      Full Name
                    </Text>
                    <View
                      style={tw`flex-row  items-center bg-[#F3F3F3] px-4 py-2 rounded-1.5`}
                    >
                      <SvgXml xml={user} />

                      <TextInput
                        style={tw`flex-1 text-base text-black dark:text-white`}
                        onChangeText={handleChange("fullname")}
                        onBlur={handleBlur("fullname")}
                        value={values.fullname}
                      />
                    </View>
                    {touched.fullname && errors.fullname && (
                      <Text style={tw`text-red-500`}>{errors.fullname}</Text>
                    )}
                  </View>

                  {/* user name  */}
                  <View style={tw`flex-col gap-2 w-full`}>
                    <Text style={tw`text-4 text-[#121212] font-inter-500`}>
                      Username
                    </Text>
                    <View
                      style={tw`flex-row items-center bg-[#F3F3F3] px-4 py-2 rounded-md`}
                    >
                      <SvgXml xml={user} />

                      <TextInput
                        style={tw`flex-1 text-base text-black dark:text-white`}
                        onChangeText={handleChange("userName")}
                        onBlur={handleBlur("userName")}
                        value={values.userName}
                      />
                    </View>
                    {touched.userName && errors.userName && (
                      <Text style={tw`text-red-500`}>{errors.userName}</Text>
                    )}
                  </View>

                  {/* Email */}
                  <View style={tw`flex-col gap-1 w-full`}>
                    <Text style={tw`text-4 text-[#121212] font-inter-500`}>
                      Email
                    </Text>
                    <View
                      style={tw`flex-row items-center bg-[#F3F3F3] px-4 py-2 rounded-md`}
                    >
                      {/* <Fontisto
                        name="email"
                        size={20}
                        color="black"
                        style={tw`mr-2`}
                      /> */}

                      <SvgXml xml={IconMail} />

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
                  </View>

                  {/* Password */}
                  <View style={tw`flex-col gap-1 w-full`}>
                    <Text style={tw`text-4 text-[#121212] font-inter-500`}>
                      Password
                    </Text>
                    <View
                      style={tw`flex-row items-center bg-[#F3F3F3] px-4 py-2 rounded-md`}
                    >
                      <SvgXml xml={Iconlock} />

                      <TextInput
                        style={tw`flex-1 text-base text-black dark:text-white`}
                        secureTextEntry={!showPassword}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                      />
                      <Feather
                        onPress={() => setShowPassword(!showPassword)}
                        name={showPassword ? "eye-off" : "eye"}
                        size={18}
                        color="#888888"
                      />
                    </View>
                    {touched.password && errors.password && (
                      <Text style={tw`text-red-500`}>{errors.password}</Text>
                    )}
                  </View>

                  {/* Confirm Password */}
                  <View style={tw`flex-col gap-1 w-full`}>
                    <Text style={tw`text-4 text-[#121212] font-inter-500`}>
                      Confirm Password
                    </Text>
                    <View
                      style={tw`flex-row items-center bg-[#F3F3F3] px-4 py-2 rounded-md`}
                    >
                      <SvgXml xml={Iconlock} />

                      <TextInput
                        style={tw`flex-1 text-base text-black dark:text-white`}
                        secureTextEntry={!showConfirm}
                        onChangeText={handleChange("confirmPassword")}
                        onBlur={handleBlur("confirmPassword")}
                        value={values.confirmPassword}
                      />
                      <Feather
                        onPress={() => setShowConfirm(!showConfirm)}
                        name={showConfirm ? "eye-off" : "eye"}
                        size={18}
                        color="#888888"
                      />
                    </View>
                    {touched.confirmPassword && errors.confirmPassword && (
                      <Text style={tw`text-red-500`}>
                        {errors.confirmPassword}
                      </Text>
                    )}
                  </View>

                  {/* Checkbox */}
                  <View style={tw`flex-row items-start mt-2 w-full`}>
                    <Checkbox
                      value={values.checkbox}
                      onValueChange={(val) => setFieldValue("checkbox", val)}
                      color="#888888"
                      style={tw`mt-1 mr-2 w-4 h-4`}
                    />
                    <Text style={tw`flex-1 text-sm text-[#888888]`}>
                      By creating this account, you agree to the
                      <Text style={tw`text-[#ED6237]`}> Terms of Use </Text>&
                      <Text style={tw`text-[#ED6237]`}> Privacy Policy</Text>.
                    </Text>
                  </View>
                  {/* check box error  */}
                  <View style={tw`w-full flex-row items-start justify-start  `}>
                    {touched.checkbox && errors.checkbox && (
                      <Text style={tw`text-red-500  `}>{errors.checkbox}</Text>
                    )}
                  </View>

                  {/* Submit Button */}
                  <View style={tw`w-full mt-3 rounded-full bg-[#ED6237]`}>
                    <Pressable onPress={handleSubmit} style={tw`py-4`}>
                      <Text style={tw`text-center text-white text-xl`}>
                        Register
                      </Text>
                    </Pressable>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
