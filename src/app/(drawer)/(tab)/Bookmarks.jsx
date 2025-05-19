import { useState } from "react";
import { Pressable, Text, View } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Recent from "../../../components/ui/Recent";
import tw from "../../../lib/tailwind";

// tabs name and icons
const tabs = [
  { label: "Restaurants", icon: "history" },
  { label: "Recipes", icon: "account-group-outline" },
];

const Bookmarks = () => {
  const [activeTab, setActiveTab] = useState("Restaurants");

  return (
    <View style={tw`flex-1 bg-[#FDFFFE] `}>
      <View style={tw`flex-1 p-[4%]  `}>
        <Text style={tw`text-xl font-bold p-4`}>Bookmarks</Text>

        {/* added the all tabs view components */}
        <View style={tw`flex-1 `}>
          {activeTab === "Restaurants" && <Recent />}
          {activeTab === "Recipes" && <Recent />}
        </View>

        {/* Tabs */}
        <View style={tw` mt-2 flex-row  items-center justify-center `}>
          <View
            style={tw` flex-row p-2 items-center w-[70%] justify-center  bg-[#3333331A] rounded-full `}
          >
            {tabs.map((item, index) => (
              <Pressable
                key={item.label}
                onPress={() => setActiveTab(item.label)}
                style={tw`flex-row items-center px-4 py-2 rounded-full ${
                  activeTab === item.label ? "bg-orange" : ""
                }`}
              >
                {/* view icons  */}
                <Icons
                  name={item.icon}
                  size={20}
                  color={activeTab === item.label ? "white" : "#454545"}
                  style={tw`mr-2`}
                />
                {/* tabs name and bg change  */}
                <Text
                  style={tw`${
                    activeTab === item.label ? "text-white" : "text-[#454545]"
                  } font-medium`}
                >
                  {item.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Bookmarks;
