import { AntDesign, Fontisto } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { RadioButton } from "react-native-ui-lib";
import tw from "twrnc";

const TagUser = ({ close }) => {
  const [value, setValue] = useState(false);
  const [searchPepole, setSearchPepole] = useState("");
  const [userName , setuserName ] = useState('');

  // console.log('new user' , userName);
  

  const handlePress = (name) => {
    setValue(!value);
    setuserName(name)
  };

  return (
    <View style={tw`bg-white rounded-[24px] p-[5%]`}>
      <View style={tw` flex-col gap-[40px] mb-[24px]`}>
        <View style={tw` flex-row items-center justify-between `}>
          <Text style={tw`text-2xl py-4 font-bold text-[#121212] `}>Tag people</Text>
          <AntDesign onPress={close} name="close" size={24} color="black" />
        </View>

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
              style={tw`flex-1 text-base text-black dark:text-white `}
              onChangeText={(text) => setSearchPepole(text)}
            />
          </View>
        </View>
       
      </View>
       <View style={tw` flex-row items-center justify-between `}>
          <Text style={tw`text-xl py-4 text-[#121212] font-semibold`}>Your Followers</Text>
        </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ height: 320 }}>
        
        {/* user info */}
        <TouchableOpacity
          onPress={() => handlePress("Casey")}
          style={tw`flex-row items-center justify-between p-3 `}
        >
          {/* Left: Avatar + Content */}
          <View style={tw`flex-row flex-1 items-center`}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/1.jpg",
              }}
              style={tw`w-10 h-10 rounded-full mr-3`}
            />
            <View style={tw`flex-1`}>
              <Text style={tw`font-bold text-black`}>Casey</Text>
            </View>
          </View>

          {/* Right: Delete Icon */}
          <TouchableOpacity>
            <RadioButton
              selected={value}
              onPress={() => setValue(!value)}
              color="#B0B0B0"
            />
          </TouchableOpacity>
        </TouchableOpacity>
        {/* user info */}
        <TouchableOpacity
          onPress={() => handlePress("Casey")}
          style={tw`flex-row items-center justify-between p-3 `}
        >
          {/* Left: Avatar + Content */}
          <View style={tw`flex-row flex-1 items-center`}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/1.jpg",
              }}
              style={tw`w-10 h-10 rounded-full mr-3`}
            />
            <View style={tw`flex-1`}>
              <Text style={tw`font-bold text-black`}>Casey</Text>
            </View>
          </View>

          {/* Right: Delete Icon */}
          <TouchableOpacity>
            <RadioButton
              selected={value}
              onPress={() => setValue(!value)}
              color="#B0B0B0"
            />
          </TouchableOpacity>
        </TouchableOpacity>
        {/* user info */}
        <TouchableOpacity
          onPress={() => handlePress("Casey")}
          style={tw`flex-row items-center justify-between p-3 `}
        >
          {/* Left: Avatar + Content */}
          <View style={tw`flex-row flex-1 items-center`}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/1.jpg",
              }}
              style={tw`w-10 h-10 rounded-full mr-3`}
            />
            <View style={tw`flex-1`}>
              <Text style={tw`font-bold text-black`}>Casey</Text>
            </View>
          </View>

          {/* Right: Delete Icon */}
          <TouchableOpacity>
            <RadioButton
              selected={value}
              onPress={() => setValue(!value)}
              color="#B0B0B0"
            />
          </TouchableOpacity>
        </TouchableOpacity>
        {/* user info */}
        <TouchableOpacity
          onPress={() => handlePress("Casey")}
          style={tw`flex-row items-center justify-between p-3 `}
        >
          {/* Left: Avatar + Content */}
          <View style={tw`flex-row flex-1 items-center`}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/1.jpg",
              }}
              style={tw`w-10 h-10 rounded-full mr-3`}
            />
            <View style={tw`flex-1`}>
              <Text style={tw`font-bold text-black`}>Casey</Text>
            </View>
          </View>

          {/* Right: Delete Icon */}
          <TouchableOpacity>
            <RadioButton
              selected={value}
              onPress={() => setValue(!value)}
              color="#B0B0B0"
            />
          </TouchableOpacity>
        </TouchableOpacity>
        {/* user info */}
        <TouchableOpacity
          onPress={() => handlePress("Casey")}
          style={tw`flex-row items-center justify-between p-3 `}
        >
          {/* Left: Avatar + Content */}
          <View style={tw`flex-row flex-1 items-center`}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/1.jpg",
              }}
              style={tw`w-10 h-10 rounded-full mr-3`}
            />
            <View style={tw`flex-1`}>
              <Text style={tw`font-bold text-black`}>Casey</Text>
            </View>
          </View>

          {/* Right: Delete Icon */}
          <TouchableOpacity>
            <RadioButton
              selected={value}
              onPress={() => setValue(!value)}
              color="#B0B0B0"
            />
          </TouchableOpacity>
        </TouchableOpacity>
        {/* user info */}
        <TouchableOpacity
          onPress={() => handlePress("Casey")}
          style={tw`flex-row items-center justify-between p-3 `}
        >
          {/* Left: Avatar + Content */}
          <View style={tw`flex-row flex-1 items-center`}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/1.jpg",
              }}
              style={tw`w-10 h-10 rounded-full mr-3`}
            />
            <View style={tw`flex-1`}>
              <Text style={tw`font-bold text-black`}>Casey</Text>
            </View>
          </View>

          {/* Right: Delete Icon */}
          <TouchableOpacity>
            <RadioButton
              selected={value}
              onPress={() => setValue(!value)}
              color="#B0B0B0"
            />
          </TouchableOpacity>
        </TouchableOpacity>
        {/* user info */}
        <TouchableOpacity
          onPress={() => handlePress("Casey")}
          style={tw`flex-row items-center justify-between p-3 `}
        >
          {/* Left: Avatar + Content */}
          <View style={tw`flex-row flex-1 items-center`}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/1.jpg",
              }}
              style={tw`w-10 h-10 rounded-full mr-3`}
            />
            <View style={tw`flex-1`}>
              <Text style={tw`font-bold text-black`}>Casey</Text>
            </View>
          </View>

          {/* Right: Delete Icon */}
          <TouchableOpacity>
            <RadioButton
              selected={value}
              onPress={() => setValue(!value)}
              color="#B0B0B0"
            />
          </TouchableOpacity>
        </TouchableOpacity>
        {/* user info */}
        <TouchableOpacity
          onPress={() => handlePress("Casey")}
          style={tw`flex-row items-center justify-between p-3 `}
        >
          {/* Left: Avatar + Content */}
          <View style={tw`flex-row flex-1 items-center`}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/1.jpg",
              }}
              style={tw`w-10 h-10 rounded-full mr-3`}
            />
            <View style={tw`flex-1`}>
              <Text style={tw`font-bold text-black`}>Casey</Text>
            </View>
          </View>

          {/* Right: Delete Icon */}
          <TouchableOpacity>
            <RadioButton
              selected={value}
              onPress={() => setValue(!value)}
              color="#B0B0B0"
            />
          </TouchableOpacity>
        </TouchableOpacity>
        {/* user info */}
        <TouchableOpacity
          onPress={() => handlePress("Casey")}
          style={tw`flex-row items-center justify-between p-3 `}
        >
          {/* Left: Avatar + Content */}
          <View style={tw`flex-row flex-1 items-center`}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/1.jpg",
              }}
              style={tw`w-10 h-10 rounded-full mr-3`}
            />
            <View style={tw`flex-1`}>
              <Text style={tw`font-bold text-black`}>Casey</Text>
            </View>
          </View>

          {/* Right: Delete Icon */}
          <TouchableOpacity>
            <RadioButton
              selected={value}
              onPress={() => setValue(!value)}
              color="#B0B0B0"
            />
          </TouchableOpacity>
        </TouchableOpacity>
        {/* user info */}
        <TouchableOpacity
          onPress={() => handlePress("Casey")}
          style={tw`flex-row items-center justify-between p-3 `}
        >
          {/* Left: Avatar + Content */}
          <View style={tw`flex-row flex-1 items-center`}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/1.jpg",
              }}
              style={tw`w-10 h-10 rounded-full mr-3`}
            />
            <View style={tw`flex-1`}>
              <Text style={tw`font-bold text-black`}>Casey</Text>
            </View>
          </View>

          {/* Right: Delete Icon */}
          <TouchableOpacity>
            <RadioButton
              selected={value}
              onPress={() => setValue(!value)}
              color="#B0B0B0"
            />
          </TouchableOpacity>
        </TouchableOpacity>
        {/* user info */}
        <TouchableOpacity
          onPress={() => handlePress("Casey")}
          style={tw`flex-row items-center justify-between p-3 `}
        >
          {/* Left: Avatar + Content */}
          <View style={tw`flex-row flex-1 items-center`}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/1.jpg",
              }}
              style={tw`w-10 h-10 rounded-full mr-3`}
            />
            <View style={tw`flex-1`}>
              <Text style={tw`font-bold text-black`}>Casey</Text>
            </View>
          </View>

          {/* Right: Delete Icon */}
          <TouchableOpacity>
            <RadioButton
              selected={value}
              onPress={() => setValue(!value)}
              color="#B0B0B0"
            />
          </TouchableOpacity>
        </TouchableOpacity>
        {/* user info */}
        <TouchableOpacity
          onPress={() => handlePress("Casey")}
          style={tw`flex-row items-center justify-between p-3 `}
        >
          {/* Left: Avatar + Content */}
          <View style={tw`flex-row flex-1 items-center`}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/1.jpg",
              }}
              style={tw`w-10 h-10 rounded-full mr-3`}
            />
            <View style={tw`flex-1`}>
              <Text style={tw`font-bold text-black`}>Casey</Text>
            </View>
          </View>

          {/* Right: Delete Icon */}
          <TouchableOpacity>
            <RadioButton
              selected={value}
              onPress={() => setValue(!value)}
              color="#B0B0B0"
            />
          </TouchableOpacity>
        </TouchableOpacity>
        

      </ScrollView>

      {/*  */}
      <View style={tw` mt-[67px]`}>
        <Pressable style={tw` bg-black flex items-center p-3 rounded-full `}>
          <Text style={tw` text-white text-xl`}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TagUser;
