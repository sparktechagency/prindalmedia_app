import { Feather } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
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

const ViewDeatils = () => {
  const navigate = useNavigation();

  return (
    <View style={tw`p-[6%] flex-1 flex-col justify-between `}>
      <View>
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <View style={tw`flex-row items-center gap-2 my-t mb-12`}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
            <Text style={tw`text-5 text-[#121212] font-bold`}>Edit</Text>
          </View>
        </TouchableOpacity>
        <View style={tw`items-center relative`}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }} // Replace with your image
            style={tw`w-20 h-20 rounded-full`}
          />
          <TouchableOpacity>
            <View
              style={tw`absolute bottom-0 -right-11 bg-blue-500 p-2 rounded-full`}
            >
              <Feather name="camera" size={18} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={tw` mt-10 `}>
          <Text style={tw`text-4.2 font-bold mb-6`}>Basic information</Text>

          {/* dish/drink  input */}
          <View style={tw`flex-col gap-4`}>
            <Text style={tw`text-4 text-[#121212] font-semibold`}>Name</Text>
            <View style={tw`bg-[#e7e7e7] rounded-md `}>
              <TextInput
                placeholder="What’s the name of your dish/drink?"
                style={tw`px-4 py-4.5 `}
                placeholderTextColor={"black"}
              />
            </View>
            {/* Description */}
            <View style={tw`flex-col gap-2 `}>
              <Text style={tw`text-4 text-[#121212] font-semibold`}>Bio</Text>
              <View style={tw`bg-[#e7e7e7] rounded-[8px] `}>
                <TextInput
                  style={tw`h-30 top-0 px-4 w-full  flex items-start `}
                  placeholder="What’s the name of your dish/drink?"
                  multiline
                  numberOfLines={6}
                  verticalAlign="top"
                  textAlignVertical="top"
                  textAlign="left"
                  placeholderTextColor={"black"}
                />
              </View>
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

export default ViewDeatils;
