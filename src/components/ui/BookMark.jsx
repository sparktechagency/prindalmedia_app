import { IconBookMark, IconBookMarkFull } from "@/assets/Icon";
import { useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import tw from "twrnc";

const BookMark = () => {
  const [isBookMark, setIsBookMark] = useState(false);

  const handleBookmark = () => {
    const newStatus = !isBookMark;
    setIsBookMark(newStatus);

    Alert.alert(
      "Bookmark",
      newStatus ? "Added to bookmarks!" : "Removed from bookmarks.",
      [{ text: "OK" }]
    );
  };

  return (
    <View>
      <View style={tw`flex-row gap-1 items-center`}>
        <TouchableOpacity onPress={handleBookmark}>
          {isBookMark ? (
            <SvgXml xml={IconBookMarkFull} />
          ) : (
            <SvgXml xml={IconBookMark} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookMark;
