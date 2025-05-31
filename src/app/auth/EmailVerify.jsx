import { Fontisto } from "@expo/vector-icons";
import { router } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import * as Yup from "yup";
import AuthHeading from "../../components/ui/AuthHeading";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const EmailVerify = () => {
  const [verifyEmail, setVerifyEmail] = useState("");

  const handleFormSubmit = (values) => {
    setVerifyEmail(values.email);
    router.push("auth/OTPVerifyTow");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={tw`p-[4%] bg-[#FDFFFE] flex-1 justify-center `}>
        <SafeAreaView style={tw` dark:bg-black flex-col items-center `}>
          {/*  */}

          <AuthHeading
            Heading={"Forgot password"}
            SubHeading={" Enter your email address to reset your password"}
          />

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
                <View style={tw`mt-2 w-full flex-col gap-2`}>
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
                      placeholderTextColor="#888"
                      selectionColor={"#888"}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={tw`text-red-500`}>{errors.email}</Text>
                  )}
                </View>

                {/* Submit button */}
                <View
                  style={tw`w-full flex-col gap-4 mt-10 rounded-full bg-[#ED6237]`}
                >
                  <TouchableOpacity onPress={handleSubmit} style={tw`py-4`}>
                    <Text style={tw`text-center text-white text-xl`}>
                      Submit
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EmailVerify;
