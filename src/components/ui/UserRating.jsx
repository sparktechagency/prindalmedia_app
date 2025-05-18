import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import tw from "twrnc";

const RatingComponent = ({ Rating }) => {
  const [rating, setRating] = useState();
  const [hover, setHover] = useState();

  const handlePress = (value) => {
    setRating(value);
    Rating(value);
  };

  return (
    <View style={tw` flex-row items-center  gap-1 `}>
      <Text style={tw`text-[16px] font-bold text-[#121212] `}>Rate :</Text>
      <View style={tw`flex-row`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => handlePress(star)}
            onPressIn={() => setHover(star)}
            onPressOut={() => setHover(0)}
          >
            <Icon
              name={star <= (hover || rating) ? "star" : "staro"}
              size={24}
              color={star <= (hover || rating) ? "#00000" : "gray"}
              style={tw`mx-1`}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default RatingComponent;
