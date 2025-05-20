import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import * as Yup from "yup";
import BackButton from "../../components/ui/BackButton";
import tw from "../../lib/tailwind";
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
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
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
        <View style={tw` bg-primaryBg  h-full`}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={tw`p-[4%] flex-1  `}>
              {/* Back and Title */}
              <BackButton title={"Change password"} />

              <View style={tw`flex-col h-full  justify-between  `}>
                <View>
                  {/* Image */}
                  <View style={tw`items-center`}>
                    <Image
                      source={require("../../../assets/images/changePassword.png")}
                      style={tw`w-48 h-42`}
                    />
                  </View>

                  {/* Inputs */}
                  <View style={tw`flex-col gap-4 mt-5`}>
                    {/* Current Password */}
                    <View style={tw`flex-col gap-2`}>
                      <Text style={tw`text-3.5 text-[#121212] font-inter-600 `}>
                        Current Password
                      </Text>
                      <View
                        style={tw`flex-row items-center bg-[#f3f3f3] rounded-2 px-4 py-2`}
                      >
                        <AntDesign
                          name="lock"
                          size={20}
                          style={tw`mr-2 text-[#888888]`}
                        />
                        <TextInput
                          secureTextEntry={!showCurrent}
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
                    </View>

                    {/* New Password */}
                    <View style={tw`flex-col gap-2`}>
                      <Text style={tw`text-3.5 text-[#121212] font-inter-600 `}>
                        New Password
                      </Text>
                      <View
                        style={tw`flex-row items-center bg-[#f3f3f3] rounded-2 px-4 py-2`}
                      >
                        <AntDesign
                          name="lock"
                          size={20}
                          style={tw`mr-2 text-[#888888]`}
                        />
                        <TextInput
                          secureTextEntry={!showNew}
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
                    </View>

                    {/* Confirm Password */}
                    <View style={tw`flex-col gap-2`}>
                      <Text style={tw`text-3.5 text-[#121212] font-inter-600 `}>
                        Confirm Password
                      </Text>
                      <View
                        style={tw`flex-row items-center bg-[#f3f3f3] rounded-2 px-4 py-2`}
                      >
                        <AntDesign
                          name="lock"
                          size={20}
                          style={tw`mr-2 text-[#888888]`}
                        />
                        <TextInput
                          secureTextEntry={!showConfirm}
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
                  </View>
                </View>

                {/* Submit Button */}
                <View style={tw`items-center justify-center flex-row `}>
                  <Pressable
                    onPress={handleSubmit}
                    style={tw`items-center justify-center flex-row bg-orange w-full rounded-full`}
                  >
                    <Text style={tw`text-white py-3 font-medium text-lg`}>
                      Save changes
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};

export default ChangePassword;
