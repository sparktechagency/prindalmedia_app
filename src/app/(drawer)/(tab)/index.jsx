import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import Header from "../../../components/ui/Header";
import UserPost from "../../../components/ui/UserPost";
import tw from "../../../lib/tailwind";
const Home = () => {
  const tab = ["Following", "Discovery"];

  const [isActiveTab, setIsActiveTab] = useState("Following");

  //
  return (
    <View style={tw`flex-1  bg-[#FDFFFE] `}>
      {/* top header */}
      <View style={tw` flex-1 px-[4%] pt-[4%] `}>
        <View>
          <Header />
          <View style={tw`pb-4`}>
            <View
              style={tw`flex-row gap-4  ${
                isActiveTab === "Following"
                  ? " w-60  bg-[#3333331A] p-2 rounded-full "
                  : ""
              }  `}
            >
              {tab.map((item, index) => (
                <View key={index} style={tw``}>
                  <Pressable onPress={() => setIsActiveTab(item)}>
                    <Text
                      style={tw`
                  text-[16px] font-inter-400 px-4 py-1 ${
                    isActiveTab === item
                      ? ` ${
                          isActiveTab === "Following"
                            ? "text-white bg-orange rounded-full"
                            : "bg-black text-white  rounded-full"
                        } `
                      : "text-textgray"
                  }
                `}
                    >
                      {item}
                    </Text>
                  </Pressable>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* view all user post  */}
        <View style={tw` flex-1 `}>
          <UserPost isActiveTab={isActiveTab} />
        </View>
      </View>
    </View>
  );
};

export default Home;
