import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import ProfileAlert from "../../components/ui/ProfileAlert";
import tw from "../../lib/tailwind";

const ViewDeatils = () => {
  const navigate = useNavigation();
  const [isVisible, setIsVisible] = useState();

  return (
    <View style={tw` flex-1 bg-primaryBg `}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`p-[4%]  `}>
          <View>
            <TouchableOpacity onPress={() => navigate.goBack()}>
              <View style={tw`flex-row items-center gap-2  mb-12`}>
                <MaterialIcons name="arrow-back-ios" size={24} color="black" />
                <Text style={tw`text-5 text-[#121212] font-inter-700`}>
                  Edit
                </Text>
              </View>
            </TouchableOpacity>
            <View style={tw`items-center relative`}>
              <ProfileAlert />
            </View>
          </View>

          <View style={tw` flex-col justify-between  `}>
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
                    placeholderTextColor="#888888"
                    style={tw`px-4 py-4.5 text-base`}
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
                  />
                </View>
              </View>
            </View>

            {/* Save Button */}
            <View style={tw`mt-60`}>
              <Pressable
                onPress={() => console.log("change pass")}
                style={tw`bg-[#ED6237] w-full rounded-full items-center justify-center`}
              >
                <Text style={tw`text-white py-3 font-medium text-lg`}>
                  Save Changes
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewDeatils;
