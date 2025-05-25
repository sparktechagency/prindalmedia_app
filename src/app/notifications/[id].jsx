import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "../../lib/tailwind";

import {
  IconBackButton,
  IconComment,
  IconDelete,
  IconHeart,
  IconLove,
  IconsSendOrange,
} from "@/assets/Icon";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import { useState } from "react";
import { SvgXml } from "react-native-svg";
import BookMark from "../../components/ui/BookMark";
import ShareButton from "../../components/ui/ShareButton";
import TacoSlider from "../../components/ui/TacoSlider";

const ViewNotification = () => {
  const [isHeart, setIsHeart] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const [comment, setComment] = useState("");

  const { id } = useSearchParams();
  // console.log(id);

  const handleHeart = (id) => {
    setIsHeart((pre) => {
      const newState = !pre;
      setLikeCount((count) => (newState ? count + 1 : count - 1));
      return newState;
    });
  };
  // close buttom sheet
  const handleComment = () => {
    if (comment.trim() !== "") {
      // console.log("Comment sent:", comment);
      setComment("");
      // bottomSheetRef.current?.close(); // Uncomment if using a bottom sheet
    }
  };

  const handleDeleted = () =>
    Alert.alert(
      "Delete Confirmation",
      "Are you sure you want to delete your comment?",
      [
        {
          text: "No",
          onPress: () => console.log("User chose not to delete"),
          style: "cancel",
        },
        {
          text: "Yes, Delete",
          onPress: () => console.log("Comment deleted"),
        },
      ],
      { cancelable: true }
    );

  return (
    <View style={tw`flex-1 bg-primaryBg`}>
      <View style={tw`flex-row px-[4%] items-center gap-2 my-3`}>
        <TouchableOpacity
          onPress={() => {
            router?.back();
          }}
        >
          <SvgXml xml={IconBackButton} />
        </TouchableOpacity>
        <Text style={tw`text-5 text-[#121212] font-inter-700`}>Back</Text>
      </View>
      <>
        <View style={tw` flex-1 .  flex-col  p-4 gap-2 bg-[#D5D5D533]`}>
          {/* redirects  to sing view post page  */}
          <View style={tw` flex-1 `}>
            <TacoSlider />
          </View>
          <View style={tw`flex-col gap-1`}>
            {/* details view wrapp Like comment  */}
            <View style={tw`flex-row gap-4 items-center  justify-between mt-3`}>
              {/*  */}
              <View style={tw`flex-row gap-4 items-center  `}>
                {/* heart icon */}
                <View style={tw`flex-row gap-1 items-center `}>
                  <View style={tw`flex-row justify-center gap-1 items-center `}>
                    <TouchableOpacity onPress={handleHeart}>
                      {/* <SvgXml xml={IconLove} /> */}
                      {isHeart ? (
                        <SvgXml xml={IconHeart} />
                      ) : (
                        <SvgXml xml={IconLove} />
                      )}
                    </TouchableOpacity>

                    {/* <Text style={tw` text-3 font-inter-600 text-[#454545] `}>
                      1111
                    </Text> */}
                  </View>
                  <Text>{likeCount}</Text>
                </View>
                {/* message */}
                <View style={tw`flex-row gap-1 items-center `}>
                  <SvgXml xml={IconComment} />
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

        {/* comment sections  */}

        <View style={tw` flex-1 p-[4%] `}>
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
                <TouchableOpacity onPress={handleDeleted}>
                  <SvgXml xml={IconDelete} />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          {/* dfj */}
          {/* User Comment  */}
          <View style={tw` flex-col gap-1 `}>
            <View
              style={tw`flex-row justify-between items-center bg-[#F3F3F3] rounded-[16] py-1 px-2`}
            >
              {/* Lock icon + Input */}
              <View style={tw`flex-row items-center `}>
                <Image
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/1.jpg",
                  }}
                  style={tw`w-6 h-6 rounded-full `}
                />

                <TextInput
                  style={tw`text-base text-black dark:text-white`}
                  placeholder="Write a comment...."
                  placeholderTextColor={"#121212"}
                  onChangeText={(text) => setComment(text)}
                  value={comment}
                />
              </View>

              {/* Eye icon */}

              <TouchableOpacity onPress={handleComment}>
                <SvgXml xml={IconsSendOrange} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    </View>
  );
};

export default ViewNotification;
