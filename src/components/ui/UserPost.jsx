import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  IconHeart,
  IconLove,
  IconRestruernt,
  IconStar,
  IconVerify,
} from "@/assets/Icon";
import userApi from "../../utils/user.json";

import { router } from "expo-router";
import { SvgXml } from "react-native-svg";
import tw from "../../lib/tailwind";
import BookMark from "./BookMark";
import ButtomSheet from "./ButtomSheet";
import ShareButton from "./ShareButton";
import TacoSlider from "./TacoSlider";

const UserPost = ({ isActiveTab }) => {
  const [isHeart, setIsHeart] = useState(false);
  // const [likeCount, setLikeCount] = useState(0);

  const [user, setUser] = useState(userApi);

  useEffect(() => {
    setUser(userApi);
  }, []);

  // const handleHeart = (id) => {
  //   setIsHeart((pre) => {
  //     const newState = !pre;
  //     setLikeCount((count) => (newState ? count + 1 : count - 1));
  //     return newState;
  //   });
  // };

  // user follow or not follow
  const [isFollower, setIsFollower] = useState(false);

  // profile navigate
  const handleNavigate = () => {
    console.log("asdfg");
    router.push(`/randomuser/${1}`);
  };
  const renderItem = ({ item }) => (
    <View style={tw` my-3 py-2 flex-col gap-3`}>
      <View style={tw` flex-row items-center  gap-2`}>
        {/* navigate profile */}
        <TouchableOpacity onPress={handleNavigate}>
          <Image
            style={tw`w-10 h-10 rounded-full `}
            source={{ uri: item?.user?.avatar }}
          />
        </TouchableOpacity>
        {/* user name and verify icons wrapp */}
        <View style={tw`flex gap-0.5 flex-1  `}>
          {/* user name and verify icons wrapp */}
          <View style={tw`flex-row  items-center justify-between`}>
            {/* name  */}
            <TouchableOpacity
              onPress={handleNavigate}
              style={tw`flex-row items-center gap-2`}
            >
              <Text style={tw` text-3.5 font-inter-700  text-[#121212] `}>
                {item?.user?.name}
              </Text>
              <SvgXml xml={IconVerify} />
            </TouchableOpacity>

            {/* following /  */}
            {isActiveTab === "Discovery" ? (
              <View>
                <Pressable
                  onPress={() => setIsFollower(!isFollower)}
                  style={tw`  ${
                    isFollower ? " border-2 border-[#E53E3E]  " : "bg-orange"
                  }  py-1 px-5  rounded-full `}
                >
                  <Text
                    style={tw` ${
                      isFollower
                        ? "text-[#E53E3E] font-inter-700"
                        : "text-white font-inter-700"
                    }  `}
                  >
                    {" "}
                    {isFollower ? "Unfollow" : "follow"}{" "}
                  </Text>
                </Pressable>
              </View>
            ) : (
              ""
            )}
          </View>
          <View style={tw`flex-row gap-1 items-center `}>
            <SvgXml xml={IconRestruernt} />
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
          <View style={tw`flex-row gap-4 justify-center items-center  `}>
            {/* heart icon */}
            <View style={tw`flex-row justify-center gap-1 items-center `}>
              <TouchableOpacity onPress={() => setIsHeart(!isHeart)}>
                {/* <SvgXml xml={IconLove} /> */}
                {isHeart ? (
                  <SvgXml xml={IconLove} />
                ) : (
                  <SvgXml xml={IconHeart} />
                )}
              </TouchableOpacity>

              <Text style={tw` text-3 font-inter-600 text-[#454545] `}>
                1111
              </Text>
            </View>
            {/* message */}
            <View style={tw`flex-row gap-1 justify-center items-center `}>
              <ButtomSheet />
              <Text style={tw` text-3 font-inter-600 text-[#454545] `}>
                {item?.comments}
              </Text>
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
              <Text style={tw` text-4 font-inter-700 text-textPrimary `}>
                {item?.title}
              </Text>
              {/* star icons */}
              <View style={tw`flex-row gap-1 items-center`}>
                <SvgXml xml={IconStar} />
                <Text style={tw` text-[16px]  font-inter-700 `}>
                  {item?.rating}
                </Text>
              </View>
            </View>
            {/* past date  */}
            <View style={tw`flex-row justify-between  items-center  `}>
              {/* view mail   */}
              <View style={tw`flex-row gap-1 items-center  `}>
                {item?.category?.map((ite, index) => (
                  <Text
                    key={index}
                    style={tw` text-[12px] font-inter-700 text-[#454545]  `}
                  >
                    {ite}
                  </Text>
                ))}
              </View>
              {/* star icons */}
              <View style={tw`flex-row gap-1 items-center`}>
                <Text style={tw` text-[14px] font-inter-400 text-[#454545] `}>
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
    <View
      style={tw`
     `}
    >
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
