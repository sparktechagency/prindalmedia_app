import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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
  const [rating, setRating] = useState("");
  const [restaurant, setRestaurant] = useState("");
  // console.log(restaurant);

  //
  const [tags, setTags] = useState([]);

  // console.log(userName);

  //get image url
  const [image, setImage] = useState([]);
  // console.log(image);

  const [modalVisible, setModalVisible] = useState(false);

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
    // console.log("Submitted Data:", rating);

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

  console.log(image?.length);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <View style={tw`px-4 pt-4 flex-1 bg-white`}>
        <Text style={tw`text-xl font-bold my-3 text-textPrimary`}>
          Share your meal
        </Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={tw`pb-4`}
        >
          <View style={tw`flex-col  gap-2`}>
            {/* Meal Name Input */}
            <View style={tw`flex-col gap-2`}>
              <Text style={tw`text-base font-semibold text-textPrimary`}>
                Meal Name
              </Text>
              <View style={tw`bg-[#F3F3F3] rounded-md`}>
                <TextInput
                  placeholder="What's the name of your dish/drink?"
                  style={tw`px-4 py-3 text-textPrimary`}
                  placeholderTextColor="#888888"
                  onChangeText={(text) => setMealName(text)}
                  value={mealName}
                  selectionColor="#888888"
                />
              </View>
            </View>

            {/* Location Type Selector */}
            <SelectRadioButton
              setSelectedOption={setSelectedOption}
              selectedOption={selectedOption}
              selectedOptionFood={selectedOptionFood}
              setSelectedOptionFood={setSelectedOptionFood}
              setRestaurant={setRestaurant}
            />

            {/* Location Input (Conditional) */}
            {selectedOption !== "home-made" && (
              <Location setSelectedLocation={setSelectedLocation} />
            )}

            {/* Description/Recipe Input */}
            <View style={tw`flex-col gap-2`}>
              <Text style={tw`text-base font-semibold text-textPrimary`}>
                {selectedOption === "home-made" ? "Recipe" : "Description"}
              </Text>
              <View style={tw`bg-[#F3F3F3] rounded-lg h-30`}>
                <TextInput
                  style={tw`p-4 text-textPrimary h-full text-left`}
                  placeholder="What did you think of it? How was the experience?"
                  multiline
                  numberOfLines={6}
                  textAlignVertical="top"
                  placeholderTextColor="#888888"
                  onChangeText={(text) => setDescription(text)}
                  value={description}
                  selectionColor="#888888"
                />
              </View>
            </View>

            {/* Rating (Conditional) */}
            {selectedOption !== "home-made" && (
              <UserRating
                hover={hover}
                setHover={setHover}
                setRating={setRating}
                rating={rating}
              />
            )}

            {/* Tag Management */}
            <TagManager
              tags={tags}
              setTags={setTags}
              newTag={userName}
              setNewTag={setuserName}
            />

            {image && image?.length === 0 && (
              <TouchableOpacity
                style={tw`w-20`}
                onPress={() => setModalVisible(true)}
              >
                <Text style={tw`text-sm text-orange font-inter-600`}>
                  View Image
                </Text>
              </TouchableOpacity>
            )}

            {/* Photo and People Tagging */}

            <View style={tw`flex-row  items-center justify-around`}>
              <AddPhoto
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setImage={setImage}
              />
              <TagPepoleView
                setuserName={setuserName}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
              />
            </View>

            {/* Submit Button */}
            <View style={tw` items-center justify-center flex-row   `}>
              <TouchableOpacity
                onPress={handleSubmit}
                style={tw` items-center justify-center flex-row bg-orange px-9 py-3 rounded-full `}
              >
                <Text
                  style={tw`  text-white  flex items-center justify-center font-bold text-[16px]   `}
                >
                  Post
                </Text>
              </TouchableOpacity>
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
    backgroundColor: "#FDFFFE",
  },
});

export default Post;
