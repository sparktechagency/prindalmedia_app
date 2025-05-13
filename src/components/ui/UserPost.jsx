import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import tw from "twrnc";
import foodImage from "../../../assets/images/Rectangle.png";
import icons from "../../../assets/images/restaurant.png";

import userApi from "../../utils/user.json";

import ButtomSheet from "./ButtomSheet";
import ShareButton from "./ShareButton";
import BookMark from "./BookMark";

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
    <View style={tw`my-5 flex-col gap-3`}>
      <View style={tw` flex-row items-center gap-2  px-3`}>
        <Image
          style={tw`w-15 h-15 rounded-full `}
          source={{ uri: item?.user?.avatar }}
        />
        <View style={tw`flex gap-0.5  `}>
          <Text style={tw` text-lg font-semibold `}>{item?.user?.name}</Text>
          <View style={tw`flex-row gap-1  `}>
            <Image style={tw`w-5 h-5`} source={icons} />
            <Text>{item?.user?.location}</Text>
          </View>
        </View>
      </View>
      {/*  */}
      <View>
        <Image style={tw`w-full rounded `} source={foodImage} />
      </View>
      <View>
        {/* details view wrapp Like comment  */}
        <View
          style={tw`flex-row gap-4 items-center  justify-between mt-3 px-3 `}
        >
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
        <View style={tw`flex mt-4 gap-2  px-3  `}>
          <View style={tw`flex-col gap-2  `}>
            {/* rating */}
            <View style={tw`flex-row justify-between  items-center  `}>
              <Text style={tw` text-lg font-semibold `}>{item?.title}</Text>
              {/* star icons */}
              <View style={tw`flex-row gap-1 items-center`}>
                <FontAwesome name="star" size={20} color="#ffde21" />
                <Text style={tw` text-lg font-semibold `}>{item?.rating}</Text>
              </View>
            </View>
            {/* past date  */}
            <View style={tw`flex-row justify-between  items-center  `}>
              {/* view mail   */}
              <View style={tw`flex-row gap-1 items-center  `}>
                {item?.category?.map((ite, index) => (
                  <Text key={index} style={tw` text-lg  `}>
                    {ite}
                  </Text>
                ))}
              </View>
              {/* star icons */}
              <View style={tw`flex-row gap-1 items-center`}>
                <Text style={tw` text-[15px]  `}>{item?.date}</Text>
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
    <View>
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
