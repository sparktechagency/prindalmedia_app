import { IconBookMark, IconBookMarkFull } from "@/assets/Icon";
import tw from "@/src/lib/tailwind";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, Modal, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import BookMarkCustomRadioButton from "./BookMarkCustomRadioButton";

const BookMark = () => {
  const [isBookMark, setIsBookMark] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleBookmark = () => {
    if (!isBookMark) {
      // First time (add to bookmark)
      setIsBookMark(true);
      setIsVisible(true); // Show modal
    } else {
      // Second time (remove from bookmark)
      setIsBookMark(false);
      Alert.alert(
        "Remove Bookmark",
        "Are you sure you want to remove this from bookmarks?",
        [
          {
            text: "Cancel",
            // onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
        ],
        { cancelable: true }
      );
    }
  };

  // restaurant, setRestaurant -> this hook
  const [selectedOption, setSelectedOption] = useState("");
  // meal, setMeal -> this hoos
  const [selectedOptionFood, setSelectedOptionFood] = useState("");

  return (
    <View>
      <View style={tw`justify-center items-center`}>
        <TouchableOpacity onPress={handleBookmark}>
          {isBookMark ? (
            <SvgXml xml={IconBookMarkFull} />
          ) : (
            <SvgXml xml={IconBookMark} />
          )}
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isVisible}
          onRequestClose={() => setIsVisible(false)}
        >
          <View style={tw`flex-1  justify-center items-center`}>
            <View
              style={tw`bg-[#FDFFFE] shadow-2xl flex-col gap-6 w-72 rounded-xl  p-6 `}
            >
              <View style={tw`bg-white flex-row justify-between  `}>
                <Text style={tw`text-textPrimary text-xl font-inter-700`}>
                  Add to?
                </Text>
                <MaterialIcons
                  onPress={() => setIsVisible(false)}
                  name="close"
                  size={24}
                  color="black"
                />
              </View>
              <View style={tw`flex-col gap-2`}>
                <View style={tw`gap-2`}>
                  <View style={tw`flex-col gap-2`}>
                    <BookMarkCustomRadioButton
                      label="Restaurant List"
                      selected={selectedOption === "restaurant"}
                      onPress={() => setSelectedOption("restaurant")}
                    />
                    <BookMarkCustomRadioButton
                      label="Recipe List"
                      selected={selectedOption === "home-made"}
                      onPress={() => setSelectedOption("home-made")}
                    />
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => setIsVisible(false)}
                style={tw`bg-orange py-3 rounded-full w-full items-center`}
              >
                <Text style={tw`text-white font-bold`}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};
export default BookMark;
