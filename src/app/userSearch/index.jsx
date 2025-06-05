import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import tw from "../../lib/tailwind";

const Search = () => {
  const [searchPepole, setSearchPepole] = useState("");

  const handlePress = () => {
    router.push("/randomuser/1");
  };

  return (
    <View style={tw` flex-1 bg-primaryBg  p-[4%]`}>
      <View style={tw`flex-row items-center gap-2 my-4`}>
        <TouchableOpacity
          onPress={() => {
            router?.back();
          }}
        >
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>
        <Text style={tw`text-4.2 text-[#121212] font-bold`}>Search User</Text>
      </View>

      <View style={tw` flex-col gap-[40px] mb-[24px]`}>
        {/* search input */}
        <View style={tw`flex-col gap-3`}>
          <View
            style={tw`flex-row justify-between items-center bg-[#F3F3F3] rounded-[16px] px-4 py-1`}
          >
            <Fontisto
              name="search"
              size={20}
              color="black"
              style={tw`mr-2 text-[#888888]`}
            />
            <TextInput
              style={tw`flex-1 text-base text-textPrimary dark:text-white `}
              onChangeText={(text) => setSearchPepole(text)}
            />
          </View>
        </View>
      </View>
      <View style={tw` flex-row items-center justify-between `}>
        <Text style={tw`text-4 py-4 text-[#121212] font-inter-600`}>
          All User
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ height: 250 }}>
        {/* user info */}
        <TouchableOpacity
          onPress={handlePress}
          style={tw`flex-row items-center justify-between p-3 `}
        >
          {/* Left: Avatar + Content */}
          <View style={tw`flex-row flex-1 items-center`}>
            <Image
              source={{
                uri: "https://i.ibb.co/hFKjJHpC/Ellipse-4-1.png",
              }}
              style={tw`w-10 h-10 rounded-full mr-3`}
            />
            <View style={tw`flex-1`}>
              <Text style={tw`font-bold text-textPrimary`}>Casey</Text>
            </View>
          </View>

          {/* Right: Delete Icon */}
        </TouchableOpacity>
      </ScrollView>

      {/*  */}
    </View>
  );
};

export default Search;
