import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import icons from "../../../assets/images/restaurant.png";

import userApi from "../../utils/user.json";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "../../lib/tailwind";
import BookMark from "./BookMark";
import ButtomSheet from "./ButtomSheet";
import ShareButton from "./ShareButton";
import TacoSlider from "./TacoSlider";

const UserPost = () => {
  const [isHeart, setIsHeart] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const [user, setUser] = useState(userApi);

  useEffect(() => {
    setUser(userApi);
  }, []);

  const handleHeart = (id) => {
    setIsHeart((pre) => {
      const newState = !pre;
      setLikeCount((count) => (newState ? count + 1 : count - 1));
      return newState;
    });
  };

  const renderItem = ({ item }) => (
    <View style={tw`my-4 flex-col gap-3`}>
      <View style={tw` flex-row items-center gap-2`}>
        <Image
          style={tw`w-10 h-10 rounded-full `}
          source={{ uri: item?.user?.avatar }}
        />
        {/* user name and verify icons wrapp */}
        <View style={tw`flex gap-0.5  `}>
          {/* user name and verify icons wrapp */}
          <View style={tw`flex-row items-center gap-2`}>
            <Text style={tw` text-3.5 font-inter-700  text-[#121212] `}>
              {item?.user?.name}
            </Text>
            <MaterialCommunityIcons
              name="check-decagram"
              size={16}
              color="#3b82f6"
            />
          </View>
          <View style={tw`flex-row gap-1 items-center `}>
            <Image style={tw`w-4 h-4`} source={icons} />
            <Text style={tw` text-3 font-inter-400 text-[#454545] `}>
              {item?.user?.location}
            </Text>
          </View>
        </View>
      </View>

      {/* redirects  to sing view post page  */}

      <View>
        <TacoSlider />
      </View>

      <View>
        {/* details view wrapp Like comment  */}
        <View style={tw`flex-row gap-4 items-center  justify-between mt-3`}>
          {/*  */}
          <View style={tw`flex-row gap-4 items-center  `}>
            {/* heart icon */}
            <View style={tw`flex-row gap-1 items-center `}>
              <AntDesign
                onPress={handleHeart}
                name="heart"
                size={20}
                color={isHeart ? "red" : "black"}
              />
              <Text>{likeCount}</Text>
            </View>
            {/* message */}
            <View style={tw`flex-row gap-1 items-center `}>
              <ButtomSheet />
              <Text>{item?.comments}</Text>
            </View>
            {/* share */}
            <View>
              <ShareButton />
            </View>
          </View>

          {/* bookMark */}
          <View>
            <BookMark />
          </View>
        </View>

        {/*  view user info and details  */}
        <View style={tw`flex mt-2 gap-1   `}>
          <View style={tw`flex-col gap-1   `}>
            {/* rating */}
            <View style={tw`flex-row justify-between  items-center  `}>
              <Text style={tw` text-lg font-semibold `}>{item?.title}</Text>
              {/* star icons */}
              <View style={tw`flex-row gap-1 items-center`}>
                <FontAwesome name="star" size={20} color="#ffde21" />
                <Text style={tw` text-[16px]  font-bold `}>{item?.rating}</Text>
              </View>
            </View>
            {/* past date  */}
            <View style={tw`flex-row justify-between  items-center  `}>
              {/* view mail   */}
              <View style={tw`flex-row gap-1 items-center  `}>
                {item?.category?.map((ite, index) => (
                  <Text
                    key={index}
                    style={tw` text-[12px] font-semibold text-[#454545]  `}
                  >
                    {ite}
                  </Text>
                ))}
              </View>
              {/* star icons */}
              <View style={tw`flex-row gap-1 items-center`}>
                <Text style={tw` text-[14px] font-medium text-[#454545] `}>
                  {item?.date}
                </Text>
              </View>
            </View>
          </View>
          {/* post details  */}
          <View>
            {/*  */}
            <Text style={tw`items-start leading-5`}>{item?.description}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={tw`flex-1 p-[4%]`}>
      {/* view Full Post */}
      <FlatList
        data={user}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={true} // important!
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default UserPost;
