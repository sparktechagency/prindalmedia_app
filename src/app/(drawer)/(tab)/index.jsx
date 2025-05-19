import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import tw from "twrnc";

import Header from "../../../components/ui/Header";
import UserPost from "../../../components/ui/UserPost";
const Home = () => {
  const tab = ["Following", "Discovery"];

  const [isActiveTab, setIsActiveTab] = useState("Following");

  //
  return (
    <View style={tw`flex-1 bg-[#FDFFFE] `}>
      {/* top header */}
      <View style={tw` p-[4%] `}>
        <Header />
        <View style={tw` `}>
          <View style={tw`flex-row gap-4`}>
            {tab.map((item, index) => (
              <Pressable key={index} onPress={() => setIsActiveTab(item)}>
                <Text
                  style={tw`
                  text-[16px] text-[#454545] font-inter-400 px-4 py-1 ${
                    isActiveTab === item
                      ? "bg-black text-white rounded-full"
                      : ""
                  }
                `}
                >
                  {item}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>

      {/* view all user post  */}
      <UserPost />
    </View>
  );
};

export default Home;
