import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../../components/ui/BackButton";
import tw from "../../lib/tailwind";

import {
  AntDesign,
  FontAwesome,
  FontAwesome6,
  Ionicons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import BookMark from "../../components/ui/BookMark";
import ShareButton from "../../components/ui/ShareButton";
import TacoSlider from "../../components/ui/TacoSlider";

const ViewNotification = () => {
  const [isHeart, setIsHeart] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  //   const [user, setUser] = useState(userApi);

  //   useEffect(() => {
  //     setUser(userApi);
  //   }, []);
  const [comment, setComment] = useState("");

  const handleHeart = (id) => {
    setIsHeart((pre) => {
      const newState = !pre;
      setLikeCount((count) => (newState ? count + 1 : count - 1));
      return newState;
    });
  };
  // close buttom sheet
  const handleComment = () => {
    setComment("");
    // bottomSheetRef.current.close();
  };
  return (
    <View style={tw`flex-1 bg-primaryBg`}>
      <BackButton title={"Back"} />
      <View style={tw`flex-col gap-2 bg-[#D5D5D533] p-4`}>
        {/* redirects  to sing view post page  */}
        <View>
          <TacoSlider />
        </View>
        <View style={tw`flex-col gap-1`}>
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
                <FontAwesome6 name="message" size={14} color="black" />
                <Text>66</Text>
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
          <View style={tw`flex-col gap-2   `}>
            {/* rating */}
            <View style={tw`flex-row justify-between  items-center  `}>
              <Text style={tw` text-lg font-semibold `}>Spicy taco</Text>
              {/* star icons */}
              <View style={tw`flex-row gap-1 items-center`}>
                <FontAwesome name="star" size={20} color="#ffde21" />
                <Text style={tw` text-[16px]  font-bold `}>4.1</Text>
              </View>
            </View>
            {/* past date  */}
            <View style={tw`flex-row justify-between  items-center  `}>
              <Text style={tw` text-[14px] font-medium text-[#454545] `}>
                Meal Restaurant
              </Text>
              {/* view mail   */}
              {/* <View style={tw`flex-row gap-1 items-center  `}>
                {item?.category?.map((ite, index) => (
                  <Text
                    key={index}
                    style={tw` text-[12px] font-semibold text-[#454545]  `}
                  >
                    {ite}
                  </Text>
                ))}
              </View> */}
              {/* star icons */}
              <View style={tw`flex-row gap-1 items-center`}>
                <Text style={tw` text-[14px] font-medium text-[#454545] `}>
                  03/15/2026
                </Text>
              </View>
            </View>
            {/* post details  */}
            <View>
              {/*  */}
              <Text style={tw`items-start leading-5`}>
                Indulge in a creamy fettuccine Alfredo, tossed with tender
                chicken and fresh parsley.
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={tw`p-[4%] flex-1`}>
        <Text style={tw`text-lg font-medium pb-2 `}>Comment</Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={tw` flex-col gap-3`}>
            {/* user info */}
            <View style={tw`flex-row items-start justify-between  `}>
              {/* Left: Avatar + Content */}
              <View style={tw`flex-row flex-1`}>
                <Image
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/1.jpg",
                  }}
                  style={tw`w-10.5 h-10.5 rounded-full mr-3`}
                />
                <View style={tw`flex-1`}>
                  <Text style={tw` text-textgray font-inter-600 text-3`}>
                    Casey
                  </Text>
                  <Text
                    style={tw`text-textPrimary text-4 font-inter-400 mt-0.5`}
                  >
                    Its a nice food. Very tasty & sweet.
                  </Text>
                  <View style={tw`flex-row mt-1`}>
                    <TouchableOpacity>
                      <Text
                        style={tw`font-inter-400 text-[#888888] text-xs mr-4`}
                      >
                        Reply
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={tw`font-inter-400 text-[#888888] text-xs`}>
                        Like
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Right: Delete Icon */}
              <TouchableOpacity>
                <AntDesign name="delete" size={16} color="#666" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* dfj */}
        {/* User Comment  */}
        <View style={tw` w-full flex-col gap-2 `}>
          <View
            style={tw`flex-row justify-between items-center bg-[#F3F3F3] rounded-[16] p-2`}
          >
            {/* Lock icon + Input */}
            <View style={tw`flex-row items-center flex-1`}>
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/men/1.jpg",
                }}
                style={tw`w-6 h-6 rounded-full `}
              />

              <TextInput
                style={tw`flex-1  text-textPrimary dark:text-white `}
                placeholder="Write a comment...."
                placeholderTextColor={"#121212"}
                onChangeText={(text) => setComment(text)}
              />
            </View>

            {/* Eye icon */}
            <Ionicons
              name="send-sharp"
              size={20}
              //   style={tw`mr-2 text-[#00C49A]`}
              color="#0063E5"
              onPress={handleComment}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ViewNotification;
