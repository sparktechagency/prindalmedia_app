import { Entypo } from "@expo/vector-icons";
import React, { useCallback, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

import {
  IconHeart,
  IconLOcation,
  IconLove,
  IconRestruernt,
  IconStar,
  IconVerify,
} from "@/assets/Icon";

import tw from "../../lib/tailwind";
import SimplifyDate from "../../utils/SimplifyDate";
import BookMark from "./BookMark";
import ButtomSheet from "./ButtomSheet";
import ShareButton from "./ShareButton";
import TacoSlider from "./TacoSlider";

const PostViewCard = ({ item, openModal, handleNavigate }) => {
  const [isHeart, setIsHeart] = useState(false);
  const safeDate = item?.created_at?.split(".")[0];

  const toggleHeart = useCallback(() => {
    setIsHeart((prev) => !prev);
  }, []);

  return (
    <View style={tw`my-3 py-2 flex-col gap-3`}>
      {/* Header */}
      <View style={tw`flex-row items-center gap-2`}>
        <TouchableOpacity onPress={handleNavigate}>
          <Image
            style={tw`w-10 h-10 rounded-full`}
            source={{
              uri: "https://i.ibb.co/hFKjJHpC/Ellipse-4-1.png",
            }}
          />
        </TouchableOpacity>

        <View style={tw`flex gap-0.5 flex-1`}>
          <View style={tw`flex-row items-center justify-between`}>
            <View style={tw`flex-row gap-3`}>
              <TouchableOpacity
                onPress={handleNavigate}
                style={tw`flex-row items-center gap-2`}
              >
                <Text style={tw`text-3.5 font-inter-700 text-[#121212]`}>
                  John Doe {item?.id}
                </Text>
                <SvgXml xml={IconVerify} />
              </TouchableOpacity>

              <View style={tw`flex-row gap-1 items-center`}>
                {item?.tagged?.map((tag, index) => (
                  <Text
                    key={index}
                    style={tw`text-[12px] font-inter-700 text-[#454545]`}
                  >
                    #{tag}
                  </Text>
                ))}
              </View>
            </View>

            <TouchableOpacity onPress={openModal}>
              <Entypo name="dots-three-vertical" size={16} color="black" />
            </TouchableOpacity>
          </View>

          {/* Location */}
          <View style={tw`flex-row gap-2 items-center`}>
            <View style={tw`flex-row gap-1 items-center`}>
              <SvgXml xml={IconRestruernt} />
              <Text style={tw`text-3 font-inter-500 text-[#454545]`}>
                {item?.restaurant_name || "Unknown"}
              </Text>
            </View>
            <View style={tw`flex-row gap-1 items-center`}>
              <SvgXml xml={IconLOcation} />
              <Text style={tw`text-3 font-inter-500 text-[#454545]`}>
                {item?.location || "Unknown"}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Image Slider */}
      <TacoSlider />

      {/* Actions */}
      <View style={tw`flex-row gap-4 items-center justify-between mt-3`}>
        <View style={tw`flex-row gap-4 justify-center items-center`}>
          <View style={tw`flex-row justify-center gap-1 items-center`}>
            <TouchableOpacity onPress={toggleHeart}>
              <SvgXml xml={isHeart ? IconHeart : IconLove} />
            </TouchableOpacity>
            <Text style={tw`text-3 font-inter-600 text-[#454545]`}>1111</Text>
          </View>
          <View style={tw`flex-row gap-1 justify-center items-center`}>
            <ButtomSheet item={item} />
            <Text style={tw`text-3 font-inter-600 text-[#454545]`}>
              {item?.comments || 0}
            </Text>
          </View>
          <ShareButton />
        </View>
        <BookMark />
      </View>

      {/* Content */}
      <View style={tw`flex mt-2 gap-1.5`}>
        <View style={tw`flex-col gap-2`}>
          <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`text-4 font-inter-700 text-textPrimary`}>
              {item?.meal_name || item?.title || "Untitled"}
            </Text>
            <View style={tw`flex-row gap-1 items-center`}>
              <SvgXml xml={IconStar} />
              <Text style={tw`text-[16px] text-textPrimary font-inter-700`}>
                {item?.rating || 0}
              </Text>
            </View>
          </View>
          <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`text-sm font-inter-700 text-[#454545] leading-5`}>
              {item?.have_it}
            </Text>
            <Text style={tw`text-[12px] font-inter-500 text-[#454545]`}>
              <SimplifyDate date={safeDate} />
            </Text>
          </View>
        </View>
        <Text style={tw`text-sm font-inter-400 text-[#454545] leading-5`}>
          {item?.description}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(PostViewCard);
