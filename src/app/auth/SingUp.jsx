import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import Checkbox from "expo-checkbox";
import { Formik } from "formik";
import { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import tw from "twrnc";
import * as Yup from "yup";
import AuthHeading from "../../components/ui/AuthHeading";

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
    <View style={tw`p-[4%] bg-[#FDFFFE]`}>
      <SafeAreaView
        style={tw` h-full dark:bg-black flex-col gap-1 items-center justify-center`}
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
            <>
              {/* top hading  */}
              <AuthHeading Heading={"Create an account"} />

              {/* full  name  */}
              <View style={tw`flex-col gap-2 w-full`}>
                <Text style={tw`text-4 text-[#121212] font-medium`}>
                  Full Name
                </Text>
                <View
                  style={tw`flex-row items-center bg-[#F3F3F3] px-4 py-2 rounded-md`}
                >
                  <FontAwesome5
                    name="user"
                    size={20}
                    color="black"
                    style={tw`mr-2`}
                  />
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
                <Text style={tw`text-4 text-[#121212] font-medium`}>
                  Username
                </Text>
                <View
                  style={tw`flex-row items-center bg-[#F3F3F3] px-4 py-2 rounded-md`}
                >
                  <FontAwesome5
                    name="user"
                    size={20}
                    color="black"
                    style={tw`mr-2`}
                  />
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
                <Text style={tw`text-4 text-[#121212] font-medium`}>Email</Text>
                <View
                  style={tw`flex-row items-center bg-[#F3F3F3] px-4 py-2 rounded-md`}
                >
                  <Fontisto
                    name="email"
                    size={20}
                    color="black"
                    style={tw`mr-2`}
                  />
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
                <Text style={tw`text-4 text-[#121212] font-medium`}>
                  Password
                </Text>
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
                    onPress={() => setShowPassword(!showPassword)}
                    name={showPassword ? "eye-off" : "eye"}
                    size={18}
                    color="black"
                  />
                </View>
                {touched.password && errors.password && (
                  <Text style={tw`text-red-500`}>{errors.password}</Text>
                )}
              </View>

              {/* Confirm Password */}
              <View style={tw`flex-col gap-1 w-full`}>
                <Text style={tw`text-4 text-[#121212] font-medium`}>
                  Confirm Password
                </Text>
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
                    secureTextEntry={!showConfirm}
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
                  />
                  <Feather
                    onPress={() => setShowConfirm(!showConfirm)}
                    name={showConfirm ? "eye-off" : "eye"}
                    size={18}
                    color="black"
                  />
                </View>
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={tw`text-red-500`}>{errors.confirmPassword}</Text>
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
                  <Text style={tw`text-[#0063E5]`}> Terms of Use </Text>&
                  <Text style={tw`text-[#0063E5]`}> Privacy Policy</Text>.
                </Text>
              </View>
              {/* check box error  */}
              <View style={tw`w-full flex-row items-start justify-start  `}>
                {touched.checkbox && errors.checkbox && (
                  <Text style={tw`text-red-500  `}>{errors.checkbox}</Text>
                )}
              </View>

              {/* Submit Button */}
              <View style={tw`w-full mt-10 rounded-full bg-[#121212]`}>
                <Pressable onPress={handleSubmit} style={tw`py-4`}>
                  <Text style={tw`text-center text-white text-xl`}>
                    Register
                  </Text>
                </Pressable>
              </View>
            </>
          )}
        </Formik>
      </SafeAreaView>
    </View>
  );
}
