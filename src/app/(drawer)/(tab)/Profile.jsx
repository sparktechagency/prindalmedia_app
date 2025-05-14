// ProfileCard.tsx
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import tw from "twrnc";

const Profile = () => {
  const tabs = [
    { label: "Recent", icon: "history", route: "Recent" },
    { label: "Followers", icon: "account-group-outline", route: "Followers" },
    {label: "Following", icon: "account-multiple-outline", route: "Following"},
  ];

  const [activeTab, setActiveTab] = useState("Recent");

  return (
    <View>
      <View style={tw`p-[6%]`}>
        {/* Profile image and badge */}
        <View style={tw`items-center relative`}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }} // Replace with your image
            style={tw`w-20 h-20 rounded-full`}
          />
          <View
            style={tw`absolute bottom-0 right-32 bg-blue-500 p-2 rounded-full`}
          >
            <Icon name="edit" size={18} color="#fff" />
          </View>
        </View>

        {/* Name and handle */}
        <View style={tw`mt-4 items-center`}>
          <Text style={tw`text-xl font-semibold`}>Mark Phillips</Text>
          <Text style={tw`text-gray-500`}>@marke_7</Text>
        </View>

        {/* Bio */}
        <Text style={tw`text-center text-gray-600 mt-3`}>
          Food lover sharing my journey through bites, sips unforgettable meals
        </Text>

        {/* Follower stats */}
        <View style={tw`flex-row justify-around mt-5`}>
          <View style={tw`items-center flex-row gap-1.3 `}>
            <Icon name="users" size={18} color="gray" />
            <Text style={tw`mt-1 font-semibold`}>
              Followers: <Text style={tw`text-black`}>5.1k</Text>
            </Text>
          </View>
          <View style={tw`items-center flex-row gap-1.3`}>
            <Icon name="user-plus" size={18} color="gray" />
            <Text style={tw`mt-1 font-semibold`}>
              Following: <Text style={tw`text-black`}>1.2k</Text>
            </Text>
          </View>
        </View>

        {/* Tabs */}
        <View
          style={tw`flex-row p-[8px] items-center   rounded-full justify-around mt-6 bg-[#8E8E8E] bg-opacity-20 `}
        >
          {tabs.map((item, index) => (
            <Pressable
              key={item.label}
              onPress={() => setActiveTab(item.label)}
              style={tw`flex-row items-center px-4 py-2 rounded-full ${
                activeTab === item.label ? "bg-blue-600" : ""
              }`}
            >
              <Icons
                name={item.icon}
                size={20}
                color={activeTab === item.label ? "white" : "#454545"}
                style={tw`mr-2`}
              />
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
  );
};

export default Profile;
