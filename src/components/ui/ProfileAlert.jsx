import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { Dialog, PanningProvider } from "react-native-ui-lib";
import tw from "twrnc";
import UserProfileGallery from "./UserProfileGallery";

const ProfileAlert = () => {
  const [isVisible, setIsVisible] = useState();
  const [image, setImage] = useState();
  // console.log(image.length);

  return (
    <View>
      {/* Profile Image or Placeholder */}
      {image ? (
        <Image source={{ uri: image }} style={tw`w-20 h-20 rounded-full`} />
      ) : (
        <View
          style={tw`w-20 h-20 rounded-full bg-gray-300 items-center justify-center`}
        >
          <Feather name="user" size={32} color="#888" />
        </View>
      )}
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <View
          style={tw`absolute bottom-0 -right-0 bg-blue-500 p-2 rounded-full`}
        >
          <Feather name="camera" size={18} color="white" />
        </View>
      </TouchableOpacity>

      <Dialog
        visible={isVisible}
        onDismiss={() => setIsVisible(false)}
        panDirection={PanningProvider.Directions.DOWN}
        containerStyle={{
          width: 300,
          // height: 200,
          alignSelf: "center",
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: 16,
          padding: 24,
        }}
      >
        <View style={tw`  flex-col  gap-4  `}>
          <View>
            <UserProfileGallery image={image} setImage={setImage} />
          </View>
          <View>
            <Pressable
              style={tw` items-center justify-center flex-row bg-black  rounded-2 w-full py-2  `}
            >
              <Text style={tw`  text-white  font-medium text-lg    `}>
                Camera
              </Text>
            </Pressable>
          </View>

          {/* <Button
            label="Done"
            onPress={() => setIsVisible(false)}
            backgroundColor="black"
            labelStyle={{ color: "white", fontWeight: "bold" }}
            style={{ borderRadius: 999, paddingVertical: 12, width: "100%" }}
          /> */}
        </View>
      </Dialog>
    </View>
  );
};

export default ProfileAlert;
