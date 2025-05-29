import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  Alert,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";
import { useState } from "react";
import ProfileAlert from "../../components/ui/ProfileAlert";
import tw from "../../lib/tailwind";

const ViewDeatils = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const handleSubmit = () => {
    Alert.alert(
      "Success!",
      "Your data has been submitted.",
      [
        {
          text: "OK",
          // onPress: () => console.log("Alert closed"),
          style: "default",
        },
      ],
      { cancelable: true }
    );

    // hide dialog if needed
    setBio("");
    setName("");
  };
  return (
    <View style={tw` flex-1 bg-primaryBg `}>
      <View style={tw`p-[4%] flex-1  `}>
        <View>
          <View style={tw`flex-row items-center gap-2  mb-12`}>
            <TouchableOpacity
              onPress={() => {
                router?.back();
              }}
            >
              <MaterialIcons name="arrow-back-ios" size={24} color="black" />
            </TouchableOpacity>
            <Text style={tw`text-5 text-[#121212] font-inter-700`}>Edit</Text>
          </View>

          {/* user profile view alert  */}
          <View style={tw`items-center relative`}>
            <ProfileAlert />
          </View>
        </View>

        <View style={tw` flex-1 py-2  flex-col justify-between  `}>
          <View>
            {/* Name Input */}
            <View>
              {/* Header and Form Fields */}
              <Text style={tw`text-4 font-inter-700 mb-4 mt-10 `}>
                Basic Information
              </Text>
            </View>
            <View style={tw`mb-6`}>
              <Text style={tw`text-base text-[#121212] font-inter-600 mb-2`}>
                Name
              </Text>
              <View style={tw`bg-[#F3F3F3] rounded-md`}>
                <TextInput
                  placeholder="Enter your name"
                  placeholderTextColor="#888"
                  selectionColor={"#888"}
                  style={tw`px-4 py-4.5 text-base`}
                  onChange={(value) => setName(value)}
                  value={name}
                />
              </View>
            </View>

            {/* Bio Input */}
            <View>
              <Text style={tw`text-base text-[#121212] font-inter-600 mb-2`}>
                Bio
              </Text>
              <View style={tw`bg-[#F3F3F3] rounded-md`}>
                <TextInput
                  multiline
                  numberOfLines={6}
                  textAlignVertical="top"
                  placeholder="Write about yourself.."
                  placeholderTextColor="#888888"
                  style={tw`h-30 px-4 pt-4 text-base`}
                  onChange={(value) => setBio(value)}
                  value={bio}
                />
              </View>
            </View>
          </View>

          {/* Save Button */}
          <View style={tw``}>
            <Pressable
              onPress={handleSubmit}
              style={tw`bg-[#ED6237] w-full rounded-full items-center justify-center`}
            >
              <Text style={tw`text-white py-3 font-medium text-lg`}>
                Save Changes
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      {/*  */}
      {/* <UserCamera /> */}
    </View>
  );
};

export default ViewDeatils;
