import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { useState } from "react";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import * as Yup from "yup";
//  Yup validation schema
const validationSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required("Current password is required")
    .min(6, "Password must be at least 6 characters"),
    
  newPassword: Yup.string()
    .required("New password is required")
    .min(6, "Password must be at least 6 characters"),
    
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
});


const ChangePassword = () => {
  const navigate = useNavigation();
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);


   const handleSubmit = (values) => {
    console.log("Submitted data", values);
    // Handle API call or navigation
  };

  return (
    <Formik
      initialValues={{
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
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
      }) => (
        <View style={tw`p-[6%] flex-1 justify-between`}>
          {/* Back and Title */}
          <TouchableOpacity onPress={() => navigate.goBack()}>
            <View style={tw`flex-row items-center gap-2 mt-4 mb-6`}>
              <MaterialIcons name="arrow-back-ios" size={24} color="black" />
              <Text style={tw`text-4.2 font-bold`}>Edit</Text>
            </View>
          </TouchableOpacity>

          {/* Image */}
          <View style={tw`items-center`}>
            <Image
              source={require("../../../assets/images/changePassword.png")}
              style={tw`w-48 h-42`}
            />
          </View>

          {/* Inputs */}
          <View style={tw`mt-10`}>

            {/* Current Password */}
            <Text style={tw`text-4 text-[#121212] font-semibold mt-2`}>
              Current Password
            </Text>
            <View style={tw`flex-row items-center bg-[#f3f3f3] rounded-2 px-4 py-2`}>
              <AntDesign name="lock" size={20} style={tw`mr-2 text-[#888888]`} />
              <TextInput
                secureTextEntry={!showCurrent}
                placeholder="Enter current password..."
                placeholderTextColor="#888888"
                style={tw`flex-1 text-base text-black`}
                onChangeText={handleChange("currentPassword")}
                onBlur={handleBlur("currentPassword")}
                value={values.currentPassword}
              />
              <Feather
                onPress={() => setShowCurrent(!showCurrent)}
                name={showCurrent ? "eye-off" : "eye"}
                size={18}
                style={tw`text-[#888888]`}
              />
            </View>
            {touched.currentPassword && errors.currentPassword && (
              <Text style={tw`text-red-500 mt-1 ml-2 text-xs`}>
                {errors.currentPassword}
              </Text>
            )}

            {/* New Password */}
            <Text style={tw`text-4 text-[#121212] font-semibold mt-4`}>
              New Password
            </Text>
            <View style={tw`flex-row items-center bg-[#f3f3f3] rounded-2 px-4 py-2`}>
              <AntDesign name="lock" size={20} style={tw`mr-2 text-[#888888]`} />
              <TextInput
                secureTextEntry={!showNew}
                placeholder="Enter new password..."
                placeholderTextColor="#888888"
                style={tw`flex-1 text-base text-black`}
                onChangeText={handleChange("newPassword")}
                onBlur={handleBlur("newPassword")}
                value={values.newPassword}
              />
              <Feather
                onPress={() => setShowNew(!showNew)}
                name={showNew ? "eye-off" : "eye"}
                size={18}
                style={tw`text-[#888888]`}
              />
            </View>
            {touched.newPassword && errors.newPassword && (
              <Text style={tw`text-red-500 mt-1 ml-2 text-xs`}>
                {errors.newPassword}
              </Text>
            )}

            {/* Confirm Password */}
            <Text style={tw`text-4 text-[#121212] font-semibold mt-4`}>
              Confirm Password
            </Text>
            <View style={tw`flex-row items-center bg-[#f3f3f3] rounded-2 px-4 py-2`}>
              <AntDesign name="lock" size={20} style={tw`mr-2 text-[#888888]`} />
              <TextInput
                secureTextEntry={!showConfirm}
                placeholder="Confirm new password..."
                placeholderTextColor="#888888"
                style={tw`flex-1 text-base text-black`}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
              />
              <Feather
                onPress={() => setShowConfirm(!showConfirm)}
                name={showConfirm ? "eye-off" : "eye"}
                size={18}
                style={tw`text-[#888888]`}
              />
            </View>
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={tw`text-red-500 mt-1 ml-2 text-xs`}>
                {errors.confirmPassword}
              </Text>
            )}
          </View>

          {/* Submit Button */}
          <View style={tw`items-center justify-center flex-row mb-5`}>
            <Pressable
              onPress={handleSubmit}
              style={tw`items-center justify-center flex-row bg-black w-full rounded-full`}
            >
              <Text style={tw`text-white py-3 font-medium text-lg`}>
                Save changes
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default ChangePassword;
