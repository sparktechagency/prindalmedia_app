import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import tw from "twrnc";

import Header from "../../../components/ui/Header";
import UserPost from "../../../components/ui/UserPost";
const Home = () => {
  const tab = ["Following", "Discovery"];

  const [isActiveTab, setIsActiveTab] = useState("Following");
  

  return (
    <>      
    {/* top header */}
    <Header />

    <View style={tw`flex-1 p-6 bg-white`}>
      <View style={tw`mb-6`}>
        <View style={tw`flex-row gap-4`}>
          {tab.map((item, index) => (
            <Pressable key={index} onPress={() => setIsActiveTab(item)}>
              <Text
                style={tw`
                  text-[16px] text-[#454545] font-semibold px-5 py-2 ${
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


      {/* view all user post  */}
      <View>
          <UserPost />
      </View>

     
    </View>
    </>
  );
};

export default Home;
