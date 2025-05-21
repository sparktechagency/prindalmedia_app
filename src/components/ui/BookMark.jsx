import { IconBookMark, IconBookMarkFull } from "@/assets/Icon";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import { SvgXml } from "react-native-svg";
import tw from "twrnc";

const BookMark = () => {
  const [isBookMark, setIsBookMark] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleBookmark = () => {
    setIsBookMark(!isBookMark);
    setShowAlert(true);
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

      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title={isBookMark ? "Bookmark Added" : "Bookmark Removed"}
        message={
          isBookMark
            ? "This item was removed from your bookmarks."
            : "This item was added to your bookmarks."
        }
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor="#0063E5"
        onConfirmPressed={() => setShowAlert(false)}
      />
    </View>
  );
};

export default BookMark;
