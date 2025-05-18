import * as ImagePicker from "expo-image-picker";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

export default function UserProfileGallery({ image, setImage }) {
  console.log(image);

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
      {/* {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : ( */}
      <>
        <View
          style={tw` items-center justify-center flex-row bg-black  rounded-2 w-full py-2  `}
        >
          <Text style={tw`  text-white  font-medium text-lg    `}>Gallery</Text>
        </View>
      </>
      {/* )} */}
    </TouchableOpacity>
  );
}
