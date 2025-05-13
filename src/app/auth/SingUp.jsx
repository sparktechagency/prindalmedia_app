import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";
import Checkbox from "expo-checkbox";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import tw from "twrnc";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { SafeAreaView, ScrollView } from "react-native-web";

export default function SingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  // console.log(email, password);

  const handleShowPassword = () => setPassword(!password);
  const handleConfirmPassword = () => setConfirmPassword(!confirmPassword);

  const handleLogin = () => {
    if (email && password && userName && confirmPassword) {

        if (password === confirmPassword) {
            router.push("/(tab)");
            Alert.alert("Home Page", "Sing up successful");
        }else{
            Alert.alert("Match Password");
        }

    } else {
      Alert.alert("Please fill in all fields");
    }
  };

  return (
    <SafeAreaView 
      style={tw`p-6 h-full  bg-white dark:bg-black flex-col gap-10 items-center justify-center `}
    >
      <View style={tw` w-full flex-col gap-3 `}>
        <Text
          style={tw`text-2xl text-black font-semibold dark:text-white text-center`}
        >
          Create an account
        </Text>
      </View>

      {/* Sing up input  */}
      <View style={tw`mt-2 w-full flex-col gap-3`}>
        {/* name  input */}
        <View style={tw`flex-col gap-3`}>
          <Text style={tw`text-lg font-medium`}>UserName</Text>
          <View
            style={tw`flex-row justify-between items-center bg-[#F3F3F3] rounded-md px-4 py-2`}
          >
            <FontAwesome5
              name="user"
              size={20}
              color="black"
              style={tw`mr-2 text-[#888888]`}
            />
            <TextInput
              style={tw`flex-1 text-base text-black dark:text-white `}
              onChangeText={setUserName}
              value={userName}
            />
          </View>
        </View>

        {/*  */}
        {/* email input */}
        <View style={tw`flex-col gap-3`}>
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
              style={tw`flex-1 text-base text-black dark:text-white `}
              onChangeText={setEmail}
              value={email}
            />
          </View>
        </View>

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

        {/*  Checbox box wrapp */}
        <View style={tw`flex-row p-3 justify-center mt-2`}>
          <View style={tw`flex-row justify-start gap-2`}>
            <Checkbox
              style={tw``}
              value={checkbox}
              onValueChange={setCheckbox}
            />
            <Text style={tw`flex-row items-center gap-10 leading-5  `}>
              By creating this account, you agree to the
              <Text style={tw`text-[#0063E5] `}> terms of use </Text>&
              <Text style={tw`text-[#0063E5]`}> privacy policy.</Text>
            </Text>
          </View>
        </View>
      </View>

      {/*  */}

      {/* Login button */}
      <View style={tw`w-full flex-col gap-4 mt-4 rounded-full bg-[#121212] `}>
        <Pressable onPress={handleLogin} style={tw`py-4`}>
          <Text style={tw`text-center text-white text-xl`}>Register</Text>
        </Pressable>
      </View>

    </SafeAreaView >
  );
}
