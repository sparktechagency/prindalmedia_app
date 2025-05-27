import { useState } from "react";
import { Pressable, Text, View } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
import {
  IconsListRecipes,
  IconsListRestaurants,
  IconsSearch
} from "@/assets/Icon";
import { TextInput } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import MyList from "../../../components/ui/MyList";
import tw from "../../../lib/tailwind";

// tabs name and icons
const tabs = [
  { label: "Restaurants", icon: "history" },
  { label: "Home-Made", icon: "account-group-outline" },
];

const Bookmarks = () => {
  const [activeTab, setActiveTab] = useState("Restaurants");
  //

  return (
    <View style={tw`flex-1 bg-[#FDFFFE] `}>
      <View style={tw`flex-1 p-[4%]  `}>
        <Text style={tw`text-xl font-inter-700 p-4`}>My Lists</Text>

        {/*  */}

        <View style={tw` flex-1 flex-col gap-4 justify-start`}>
          <View style={tw` flex-col gap-5 justify-start`}>
            <View style={tw`my-2`}>
              <View
                style={tw`bg-[#F3F3F3] flex-row items-center justify-between px-2 rounded-4 gap-1`}
              >
                <SvgXml xml={IconsSearch} />

                <TextInput
                  style={tw` py-4 flex-1 text-textPrimary`}
                  placeholder="Search by user name or food name"
                  placeholderTextColor="#888888"
                  // onChangeText={(text) => handleSearchLocation(text)}
                  // value={searchText}
                />
              </View>
            </View>

            {/* Tabs */}
            <View style={tw`flex-row items-center justify-between `}>
              <View style={tw` flex-row  items-center gap-2 justify-center   `}>
                {tabs.map((item, index) => (
                  <Pressable
                    key={item.label}
                    onPress={() => setActiveTab(item.label)}
                    style={tw`flex-row items-center gap-2  rounded-full ${
                      activeTab === item.label ? " text-orange" : ""
                    }`}
                  >
                    {/* view icons  */}
                    <Icons
                      size={20}
                      color={activeTab === item.label ? "white" : "#454545"}
                      style={tw`mr-2`}
                    />
                    {/* tabs name and bg change  */}
                    <Text
                      style={tw`${
                        activeTab === item.label
                          ? "text-orange underline "
                          : "text-[#454545] "
                      }  text-4 font-inter-600 gap-2`}
                    >
                      {item.label}
                    </Text>
                  </Pressable>
                ))}
              </View>
              <View style={tw`flex-row items-center  ml-3 gap-2 `}>
                <SvgXml
                  xml={
                    activeTab === "Restaurants"
                      ? IconsListRestaurants
                      : IconsListRecipes
                  }
                />
                <Text>{activeTab === "Restaurants" ? 257 : 258} </Text>
              </View>
            </View>
          </View>

          {/* added the all tabs view components */}
          <View style={tw`flex-1 `}>
            {/* {activeTab === "Restaurants" && <Recent />}
            {activeTab === "Recipes" && <Recent />} */}
            {activeTab === "Restaurants" && <MyList />}
            {activeTab === "Recipes" && <MyList />}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Bookmarks;
