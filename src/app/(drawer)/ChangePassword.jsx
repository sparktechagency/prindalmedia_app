import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";

import { useState } from "react";

const ChangePassword = () => {
  const navigate = useNavigation();
  const [password, setPassword] = useState("");
  const [currentpassword, setCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleShowPassword = () => setPassword(!password);
  const handleConfirmPassword = () => setConfirmPassword(!confirmPassword);
  const handleCurremtPassword = () => setCurrentPassword(!currentpassword);

  return (
    <View style={tw`p-[6%] flex-1 flex-col justify-between `}>
      <View>
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <View style={tw`flex-row items-center gap-2 mt-4 mb-6 `}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
            <Text style={tw`text-4.2 font-bold `}>Edit</Text>
          </View>
        </TouchableOpacity>
        <View style={tw`items-center`}>
          <Image
            source={require("../../../assets/images/changePassword.png")} // Replace with your image
            style={tw`w-48 h-42`}
          />
        </View>

        <View style={tw` mt-10`}>
          {/* Current Password input */}
          <View style={tw`mt-2 w-full flex-col gap-3`}>
            <Text style={tw`text-4 text-[#121212] font-semibold`}>
              Current Password
            </Text>

            <View
              style={tw`flex-row justify-between items-center bg-[#f3f3f3] rounded-2 px-4 py-2`}
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
                  secureTextEntry={currentpassword ? true : false}
                  onChangeText={setCurrentPassword}
                  placeholder="Enter your previous password..."
                  placeholderTextColor={"#888888"}
                />
              </View>

              {/* Eye icon */}
              <Feather
                style={tw`mr-2 text-[#888888]`}
                onPress={handleCurremtPassword}
                name={currentpassword ? "eye-off" : "eye"}
                size={18}
                color="black"
                placeholder="Enter a new password..."
              />
            </View>
          </View>

          {/* password input */}
          <View style={tw`mt-2 w-full flex-col gap-3`}>
            <Text style={tw`text-4 text-[#121212] font-semibold`}>
              New Password
            </Text>

            <View
              style={tw`flex-row justify-between items-center bg-[#f3f3f3]  rounded-2 px-4 py-2`}
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
                  placeholder="Enter a new password..."
                  placeholderTextColor={"#888888"}
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
            <Text style={tw`text-4 text-[#121212] font-semibold`}>
              Confirm Password
            </Text>

            <View
              style={tw`flex-row justify-between items-center bg-[#f3f3f3] rounded-2 px-4 py-2`}
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
                  placeholder="Retype password..."
                  placeholderTextColor={"#888888"}
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
      </View>

      {/* add post button */}
      <View style={tw` items-center justify-center flex-row mb-5 `}>
        <Pressable
          style={tw` items-center justify-center flex-row bg-black w-full rounded-full `}
        >
          <Text
            style={tw`  text-white  flex items-center justify-center py-3 font-medium text-lg    `}
          >
            Save changes
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ChangePassword;
