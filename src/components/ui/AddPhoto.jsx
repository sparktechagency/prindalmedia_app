import { IconAddPhoto } from "@/assets/Icon";
import * as ImagePicker from "expo-image-picker";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import tw from "twrnc";

export default function AddPhoto({ image, setImage }) {
  // console.log(image);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result?.assets[0]);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <>
          <View
            style={tw`flex-row px-4 items-center justify-center gap-2 border-[1px] border-[#B0B0B0]  rounded-md  py-1.8  `}
          >
            <View style={tw` `}>
              <SvgXml xml={IconAddPhoto} />
            </View>
            <Text style={tw`text-[16px] font-bold text-[#121212] `}>
              Add photo
            </Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
});
