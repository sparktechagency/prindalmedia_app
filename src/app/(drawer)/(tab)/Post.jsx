import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AddPhoto from "../../../components/ui/AddPhoto";
import Location from "../../../components/ui/Location";
import SelectRadioButton from "../../../components/ui/SelectRadioButton";
import TagManager from "../../../components/ui/TagManager";
import TagPepoleView from "../../../components/ui/TagPepoleView";
import UserRating from "../../../components/ui/UserRating";
import tw from "../../../lib/tailwind";

//  updated and more better code readabel

const Post = () => {
  const [userName, setuserName] = useState("");
  const [mealName, setMealName] = useState("");
  const [description, setDescription] = useState("");

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
  const [restaurant, setRestaurant] = useState();
  console.log(restaurant);

  //
  const [tags, setTags] = useState([]);

  //get image url
  const [image, setImage] = useState(null);
  // console.log(image);

  // console.log(selectedOption);
  const [hover, setHover] = useState("");

  const handleSubmit = () => {
    // You can customize validation logic here
    const formData = {
      userName,
      selectedOption, // e.g., restaurant
      selectedOptionFood, // e.g., meal
      selectedLocation,
      rating,
      image,
      mealName,
      description,
      hover,
      tags,
      restaurant,
    };

    Alert.alert(
      "Success!",
      "Your data has been submitted.",
      [
        {
          text: "OK",
          // onPress: () => console.log("Alert closed"),
          style: "default",
        },
      ],
      { cancelable: true }
    );

    // Here you can send formData to your backend or log it
    console.log("Submitted Data:", rating);

    // ✅ Reset all states
    setuserName("");
    setSelectedOption("");
    setSelectedOptionFood("");
    setSelectedLocation(null);
    setHover("");
    setMealName("");
    setDescription("");
    setRating("");
    setTags("");
    setImage(null);
    setIsVisible(false); // hide dialog if needed
    setRestaurant("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={tw`px-[4%] pt-[4%]  flex-1 bg-[#FDFFFE]`}>
        <Text style={tw` text-xl font-inter-700 my-3 text-[#121212]`}>
          Share your meal
        </Text>

        {/* Login input  */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {/*  */}
          <View style={tw` flex-col justify-between gap-8`}>
            <View style={tw` w-full  gap-4 flex-col justify-between mt-3`}>
              {/* dish/drink  input */}
              <View style={tw`flex-col gap-2`}>
                <Text style={tw`text-[16px] font-inter-600 text-[#121212]`}>
                  Meal Name
                </Text>
                <View style={tw`bg-[#F3F3F3] rounded-md text-[#121212]`}>
                  <TextInput
                    placeholder="What’s the name of your dish/drink?"
                    style={tw`px-4 py-4`}
                    placeholderTextColor={"#888888"}
                    onChangeText={(text) => setMealName(text)}
                    value={mealName}
                  />
                </View>
              </View>

              {/* Where did you have it?   SelectRadioButton */}
              <SelectRadioButton
                setSelectedOption={setSelectedOption}
                selectedOption={selectedOption}
                selectedOptionFood={selectedOptionFood}
                setSelectedOptionFood={setSelectedOptionFood}
                setRestaurant={setRestaurant}
              />

              {/* Food type? */}

              {/* Location */}
              <View>
                {selectedOption === "home-made" ? (
                  ""
                ) : (
                  <Location setSelectedLocation={setSelectedLocation} />
                )}
              </View>

              {/* Description */}
              <View style={tw`flex-col gap-2 `}>
                <Text style={tw`text-[16px] font-inter-600 text-[#121212`}>
                  {selectedOption === "home-made" ? "Reciepe" : "Description"}
                </Text>
                <View style={tw`bg-[#F3F3F3] rounded-[8px] `}>
                  <TextInput
                    style={tw`h-30 top-0 px-4 w-full  flex items-start `}
                    placeholder="What did you think of it? How was the experience?"
                    multiline
                    numberOfLines={6}
                    verticalAlign="top"
                    textAlignVertical="top"
                    textAlign="left"
                    placeholderTextColor={"#888888"}
                    onChange={(text) => setDescription(text)}
                    value={description}
                  />
                </View>
              </View>

              {/* user rating  */}
              <View>
                {selectedOption === "home-made" ? (
                  ""
                ) : (
                  <UserRating
                    hover={hover}
                    setHover={setHover}
                    setRating={setRating}
                    rating={rating}
                  />
                )}
              </View>
              {/* <View style={tw``}>
                
              </View> */}

              {/* tage user */}
              <View>
                <TagManager
                  tags={tags}
                  setTags={setTags}
                  newTag={userName}
                  setNewTag={setuserName}
                />
              </View>

              {/* add Photo  / tag user  */}
              <View
                style={tw`flex-row  items-center justify-center gap-4 rounded-md `}
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
            <View style={tw` pb-1  `}>
              {/* add post button */}
              <View style={tw` items-center justify-center flex-row   `}>
                <Pressable
                  onPress={handleSubmit}
                  style={tw` items-center justify-center flex-row bg-orange px-9 py-3 rounded-full `}
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Post;
