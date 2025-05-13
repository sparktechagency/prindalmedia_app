import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import tw from "twrnc";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // console.log(email, password);

  const handleShowPassword = () => setPassword(!password);
  const handleConfirmPassword = () => setConfirmPassword(!confirmPassword);

  const handleLogin = () => {
    if (password === confirmPassword) {
      router.push("/(tab)");
      Alert.alert("Update Password", "new password set");
    } else {
      Alert.alert("Password Not Match", "srroy");
    }
  };

  return (
    <View
      style={tw`p-5 h-full  bg-white dark:bg-black flex-col gap-10 items-center justify-center `}
    >
      <View style={tw` w-full flex-col gap-3 `}>
        <Text style={tw`text-2xl text-black dark:text-white text-center`}>
          Welcome back!
        </Text>

        <Text
          style={tw`mt-2 text-base text-gray-700 dark:text-gray-300 text-center`}
        >
          Please sign in to continue.
        </Text>
      </View>

      {/* Login input  */}
      <View style={tw`mt-2 w-full flex-col gap-3`}>
        {/* password input */}
        <View style={tw`mt-2 w-full flex-col gap-3`}>
          <Text style={tw`text-lg font-medium`}>Password</Text>

          <View
            style={tw`flex-row justify-between items-center bg-[#F3F3F3] rounded-md px-4 py-2`}
          >
            {/* Lock icon + Input */}
            <View style={tw`flex-row items-center flex-1`}>
              <AntDesign
                style={tw`mr-2 text-[#888888]`}
                name="lock"
                size={20}
                color="black"
              />

              <TextInput
                style={tw`flex-1 text-base text-black dark:text-white `}
                secureTextEntry={password ? true : false}
                onChangeText={setPassword}
              />
            </View>

            {/* Eye icon */}
            <Feather
              style={tw`mr-2 text-[#888888]`}
              onPress={handleShowPassword}
              name={password ? "eye-off" : "eye"}
              size={18}
              color="black"
            />
          </View>
        </View>

        {/* confirm password input */}
        <View style={tw`mt-2 w-full flex-col gap-3`}>
          <Text style={tw`text-lg font-medium`}>Confirm Password</Text>

          <View
            style={tw`flex-row justify-between items-center bg-[#F3F3F3] rounded-md px-4 py-2`}
          >
            {/* Lock icon + Input */}
            <View style={tw`flex-row items-center flex-1`}>
              <AntDesign
                style={tw`mr-2 text-[#888888]`}
                name="lock"
                size={20}
                color="black"
              />

              <TextInput
                style={tw`flex-1 text-base text-black dark:text-white `}
                secureTextEntry={confirmPassword ? true : false}
                onChangeText={setConfirmPassword}
              />
            </View>

            {/* Eye icon */}
            <Feather
              style={tw`mr-2 text-[#888888]`}
              onPress={handleConfirmPassword}
              name={confirmPassword ? "eye-off" : "eye"}
              size={18}
              color="black"
            />
          </View>
        </View>
      </View>

      {/* Login button */}
      <View style={tw`w-full flex-col gap-4 mt-4 rounded-full bg-[#121212] `}>
        <Pressable onPress={handleLogin} style={tw`py-4`}>
          <Text style={tw`text-center text-white text-xl`}>Update</Text>
        </Pressable>
      </View>
    </View>
  );
}
