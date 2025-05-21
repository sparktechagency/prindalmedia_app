import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import BackButton from "../../components/ui/BackButton";
import Recent from "../../components/ui/Recent";
import tw from "../../lib/tailwind";

// tabs name and icons
const tabs = [
  { label: "Restaurants", icon: "history" },
  { label: "Recipes", icon: "account-group-outline" },
];

const RandomUser = () => {
  const [activeTab, setActiveTab] = useState("Restaurants");
  const [isFollower, setIsFollower] = useState(false);
  // console.log();

  return (
    <View style={tw` flex-1 bg-[#FDFFFE] `}>
      <View style={tw` p-[4%] flex-1 `}>
        <BackButton title={"Back"} />

        <View style={tw` px-2 `}>
          <View style={tw`items-center bg-[#FFFFFF] rounded-3xl `}>
            {/* Avatar */}
            <View style={tw`relative`}>
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/men/75.jpg",
                }}
                style={tw`w-24 h-24 rounded-full`}
              />
              {/* Verified Badge */}
              <View style={tw`absolute bottom-0 right-0  rounded-full`}>
                <MaterialIcons name="verified" size={24} color="#1DA1F2" />
              </View>
            </View>

            <View style={tw` flex-col gap-4 `}>
              <View>
                {/* Name and handle */}
                <View style={tw`mt-4 items-center`}>
                  <Text style={tw`text-xl font-inter-700`}>Mark Phillips</Text>
                  <Text style={tw`text-3 text-textgray font-inter-500`}>
                    @marke_7
                  </Text>
                </View>

                {/* Bio */}
                <Text style={tw`text-center text-textgray mt-4 leading-6`}>
                  Food lover sharing my journey through bites, sips
                  unforgettable meals 🍕🍔🌮
                </Text>

                {/* Follower stats */}
                <View style={tw`flex-row mt-4  justify-center  gap-2`}>
                  <View
                    style={tw`items-center bg-[#D5D5D51A] justify-center flex-row gap-1.3  p-2 rounded-2 px-6 `}
                  >
                    <Icon name="users" size={18} color="#121212" />
                    <Text style={tw` font-inter-400 `}>Followers:</Text>
                    <Text style={tw`text-textPrimary font-inter-700`}>
                      5.1k
                    </Text>
                  </View>

                  <View
                    style={tw`items-center bg-[#D5D5D51A]  justify-center flex-row gap-1.3  p-2 rounded-2 px-6 `}
                  >
                    <Icon name="users" size={18} color="#121212" />
                    <Text style={tw` font-inter-400 `}>Following:</Text>
                    <Text style={tw`text-textPrimary font-inter-700`}>
                      1.1k
                    </Text>
                  </View>
                  {/* </Link> */}
                </View>
              </View>

              {/* Unfollow Button */}

              <Pressable
                onPress={() => setIsFollower(!isFollower)}
                style={tw`  ${
                  isFollower ? " border   border-[#ED6237]   " : "bg-orange"
                } px-4 py-2 rounded-full  items-center  `}
              >
                <Text
                  style={tw` ${
                    isFollower
                      ? "text-textPrimary font-inter-700"
                      : "text-white font-inter-700"
                  }  `}
                >
                  {" "}
                  {isFollower ? "Unfollow" : "Follow"}{" "}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View style={tw` py-4 flex-row  items-center justify-between `}>
          <View>
            <View style={tw`flex-row items-center gap-2 `}>
              {/* <MaterialIcons name="arrow-back-ios" size={24} color="black" /> */}
              <Text style={tw`text-4 text-[#121212] font-inter-600`}>
                Lists
              </Text>
            </View>
          </View>
          <View
            style={tw` flex-row p-2 items-center justify-center  bg-[#3333331A] rounded-full `}
          >
            {tabs.map((item, index) => (
              <Pressable
                key={item.label}
                onPress={() => setActiveTab(item.label)}
                style={tw`flex-row items-center px-4 py-1 rounded-full ${
                  activeTab === item.label ? "bg-orange" : ""
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
                    activeTab === item.label ? "text-white" : "text-[#454545]"
                  } font-medium`}
                >
                  {item.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* added the all tabs view components */}
        <View style={tw`flex-1 `}>
          {activeTab === "Restaurants" && <Recent />}
          {activeTab === "Recipes" && <Recent />}
        </View>
      </View>
    </View>
  );
};

export default RandomUser;
