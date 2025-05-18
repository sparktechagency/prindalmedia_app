import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import tw from "twrnc";
import AddPhoto from "../../../components/ui/AddPhoto";
import Location from "../../../components/ui/Location";
import SelectRadioButton from "../../../components/ui/SelectRadioButton";
import TagManager from "../../../components/ui/TagManager";
import TagPepoleView from "../../../components/ui/TagPepoleView";
import UserRating from "../../../components/ui/UserRating";

//  updated and more better code readabel

const Post = () => {
  const [userName, setuserName] = useState("");
  // restaurant, setRestaurant -> this hook
  const [selectedOption, setSelectedOption] = useState("");
  // meal, setMeal -> this hoos
  const [selectedOptionFood, setSelectedOptionFood] = useState("");

  // view dailog
  const [isVisible, setIsVisible] = useState(false);

  //get locations all data get user
  const [selectedLocation, setSelectedLocation] = useState(null);
  // console.log( 'view new locations ' ,selectedLocation?.name);
  // console.log( 'view new   {"lat": 23.7520933, "lng": 90.4246379} ' ,selectedLocation?.geometry?.location);

  // user Rating
  const [rating, setRating] = useState();
  // console.log(rating);

  //get image url
  const [image, setImage] = useState(null);
  // console.log(image);

  return (
    <View style={tw`px-[4%] pt-[4%] flex-1 bg-[#FDFFFE]`}>
      <Text style={tw` text-xl font-bold my-3 text-[#121212]`}>
        Share your meal
      </Text>

      {/* Login input  */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*  */}
        <View style={tw` flex-col justify-between gap-8`}>
          <View style={tw` w-full  gap-4 flex-col justify-between mt-3`}>
            {/* dish/drink  input */}
            <View style={tw`flex-col gap-2`}>
              <Text style={tw`text-[16px] font-semibold text-[#121212]`}>
                Meal Name
              </Text>
              <View style={tw`bg-[#F3F3F3] rounded-md `}>
                <TextInput
                  placeholder="What’s the name of your dish/drink?"
                  style={tw`px-4 py-4 `}
                  placeholderTextColor={"#888888"}
                />
              </View>
            </View>

            {/* Where did you have it?   SelectRadioButton */}
            <SelectRadioButton
              setSelectedOption={setSelectedOption}
              selectedOption={selectedOption}
              selectedOptionFood={selectedOptionFood}
              setSelectedOptionFood={setSelectedOptionFood}
            />

            {/* Food type? */}

            {/* Location */}
            <View>
              <Location setSelectedLocation={setSelectedLocation} />
            </View>

            {/* Description */}
            <View style={tw`flex-col gap-2 `}>
              <Text style={tw`text-[16px] font-semibold text-[#121212]`}>
                Description
              </Text>
              <View style={tw`bg-[#F3F3F3] rounded-[8px] `}>
                <TextInput
                  style={tw`h-30 top-0 px-4 w-full  flex items-start `}
                  placeholder="What’s the name of your dish/drink?"
                  multiline
                  numberOfLines={6}
                  verticalAlign="top"
                  textAlignVertical="top"
                  textAlign="left"
                  placeholderTextColor={"#888888"}
                />
              </View>
            </View>

            {/* user rating  */}
            <View style={tw``}>
              <UserRating Rating={setRating} />
            </View>

            {/* tage user */}
            <View>
              <TagManager newTag={userName} setNewTag={setuserName} />
            </View>

            {/* add Photo  / tag user  */}
            <View
              style={tw`flex-row flex-1 items-center justify-center gap-4 rounded-md `}
            >
              <View>
                <AddPhoto image={image} setImage={setImage} />
              </View>

              {/* tag pepole  */}
              <View>
                <TagPepoleView
                  setuserName={setuserName}
                  isVisible={isVisible}
                  setIsVisible={setIsVisible}
                />
              </View>
            </View>
          </View>
          {/*  */}
          <View>
            {/* add post button */}
            <View style={tw` items-center justify-center flex-row  `}>
              <Pressable
                style={tw` items-center justify-center flex-row bg-black px-9 py-3 rounded-full `}
              >
                <Text
                  style={tw`  text-white  flex items-center justify-center font-bold text-[16px]   `}
                >
                  Post
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Post;
