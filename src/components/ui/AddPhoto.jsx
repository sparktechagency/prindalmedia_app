import { useState } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import tw from "twrnc";

export default function AddPhoto() {
  const [image, setImage] = useState(null);

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
            style={tw`flex-row items-center gap-2 border-[1px] border-[#B0B0B0]  rounded-md px-6 py-1.8  `}
          >
            <View style={tw` `}>
              <MaterialIcons
                name="add-photo-alternate"
                size={20}
                color="#B0B0B0"
              />
            </View>
            <Text style={tw`text-lg font-medium`}>Add photo</Text>
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
