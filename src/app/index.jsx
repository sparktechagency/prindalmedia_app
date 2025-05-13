import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";
import Checkbox from "expo-checkbox";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(email, password);

  const handleShowPassword = () => {
    // console.log("show password");
    setPassword(!password);
  };

  const handleLogin = () => {
    if (email && password) {
      router.push("/(tab)");
    } else {
      Alert.alert("Please fill in all fields");
    }
  };

  const [checkbox, setCheckbox] = useState(false);

  return (
    <SafeAreaView
      style={tw`p-5 h-full flex-1  bg-white dark:bg-black flex-col gap-10 items-center justify-center `}
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
              enableErrors
              validateOnChange
              validate={['required', (value) => value.length > 6]}
              validationMessage={['Field is required', 'Password is too short']}
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

        {/*  Checbox box wrapp */}
        <View style={tw`flex-row  justify-between mt-2`}>
          <View style={tw`flex-row gap-2`}>
            <Checkbox
              style={tw``}
              value={checkbox}
              onValueChange={setCheckbox}
              color={'black'}
            />
            <Text>Remember me</Text>
          </View>
          <View style={tw``}>
            <Link href={"/OTPOne"} style={tw`text-[#0063E5] underline`}>
              Forget password?
            </Link>
          </View>
        </View>
      </View>

      {/* Login button */}
      <View style={tw`w-full flex-col gap-4 mt-4 rounded-full bg-[#121212] `}>
        <Pressable onPress={handleLogin} style={tw`py-4`}>
          <Text style={tw`text-center text-white text-xl`}>Sign in</Text>
        </Pressable>
      </View>

      <View style={tw``}>
        <Text>
          Don’t have an account?{" "}
          <Link href={"/SingUp"} style={tw`text-blue-700`}>
            Sign up
          </Link>{" "}
        </Text>
      </View>
    </SafeAreaView>
  );
}
