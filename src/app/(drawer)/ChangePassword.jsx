import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

import { useState } from 'react';


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
          <View style={tw`flex-row items-center gap-2 my-4`}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
            <Text style={tw`text-4.2 font-bold`}>Edit</Text>
          </View>
        </TouchableOpacity>
        <View style={tw`items-center relative`}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }} // Replace with your image
            style={tw`w-20 h-20 rounded-full`}
          />
          
        </View>

        <View style={tw` mt-10`}>
          {/* Current Password input */}
        <View style={tw`mt-2 w-full flex-col gap-3`}>
          <Text style={tw`text-lg font-medium`}>Current Password</Text>

          <View
            style={tw`flex-row justify-between items-center bg-[#dbd5d5] rounded-md px-4 py-2`}
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
              />
            </View>

            {/* Eye icon */}
            <Feather
              style={tw`mr-2 text-[#888888]`}
              onPress={handleCurremtPassword}
              name={currentpassword ? "eye-off" : "eye"}
              size={18}
              color="black"
            />
          </View>
        </View>

          {/* password input */}
        <View style={tw`mt-2 w-full flex-col gap-3`}>
          <Text style={tw`text-lg font-medium`}>New Password</Text>

          <View
            style={tw`flex-row justify-between items-center bg-[#dfdede] rounded-md px-4 py-2`}
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
            style={tw`flex-row justify-between items-center bg-[#dbd5d5] rounded-md px-4 py-2`}
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
  )
}

export default ChangePassword