import React, { useState } from "react";
import {Pressable,  Text, View } from "react-native";
import tw from "twrnc";

import UserPost from "../../../components/ui/UserPost";
const Home = () => {
  const tab = ["Following", "Discovery"];

  const [isActiveTab, setIsActiveTab] = useState("Following");
  

  return (
    <View style={tw`flex-1 p-4`}>
      <View style={tw`mb-4`}>
        <View style={tw`flex-row gap-4`}>
          {tab.map((item, index) => (
            <Pressable key={index} onPress={() => setIsActiveTab(item)}>
              <Text
                style={tw`
                  text-xl font-medium px-5 py-2 ${
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


      <View>
          <UserPost />
      </View>

     
    </View>
  );
};

export default Home;
