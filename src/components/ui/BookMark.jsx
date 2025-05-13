import Entypo from '@expo/vector-icons/Entypo';
import { useState } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

const BookMark = () => {
  const [isBookMark, setIsBookMark] = useState(false);

  const handleBookMark = () => setIsBookMark(!isBookMark);

  return (
    <View>
      {/* heart icon */}
      <View style={tw`flex-row gap-1 items-center `}>
        <Entypo
          onPress={handleBookMark}
          name="bookmark"
          size={20}
          color={isBookMark ? "red" : "black"}
        />
      </View>
    </View>
  );
};

export default BookMark;
