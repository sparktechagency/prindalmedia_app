import { IconSherd } from "@/assets/Icon";
import { Alert, Share, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";

import tw from "twrnc";

const ShareButton = () => {
  const onShare = async () => {
    try {
      await Share.share({
        message: "https://reactnative.dev/docs/touchableopacity",
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TouchableOpacity onPress={onShare} title="Share" style={tw`w-10`}>
          {/* <EvilIcons name="share-google" size={25} color="black" /> */}
          <SvgXml xml={IconSherd} />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ShareButton;
