// import { Feather } from "@expo/vector-icons";
// import { useState } from "react";
// import { Image, Text, TouchableOpacity, View } from "react-native";
// import { Dialog, PanningProvider } from "react-native-ui-lib";
// import tw from "twrnc";

// import UserCamera from "./UserCamera";
// import UserProfileGallery from "./UserProfileGallery";

// const ProfileAlert = () => {
//   const [isVisible, setIsVisible] = useState();
//   const [image, setImage] = useState();
//   // console.log(image.length);

//   return (
//     <View>
//       {/* Profile Image or Placeholder */}
//       {image ? (
//         <Image source={{ uri: image }} style={tw`w-20 h-20 rounded-full`} />
//       ) : (
//         <View
//           style={tw`w-20 h-20 rounded-full bg-gray-300 items-center justify-center`}
//         >
//           <Feather name="user" size={32} color="#888" />
//         </View>
//       )}
//       <TouchableOpacity onPress={() => setIsVisible(true)}>
//         <View
//           style={tw`absolute bottom-0 -right-0 bg-blue-500 p-2 rounded-full`}
//         >
//           <Feather name="camera" size={18} color="white" />
//         </View>
//       </TouchableOpacity>

//       <Dialog
//         visible={isVisible}
//         onDismiss={() => setIsVisible(false)}
//         panDirection={PanningProvider.Directions.DOWN}
//         containerStyle={{
//           width: 300,
//           // height: 200,
//           alignSelf: "center",
//           justifyContent: "center",
//           backgroundColor: "white",
//           borderRadius: 16,
//           padding: 24,
//         }}
//       >
//         <View style={tw`  flex-col  gap-4  `}>
//           <View>
//             <UserProfileGallery image={image} setImage={setImage} />
//           </View>
//           {/*  */}
//           <View style={tw`  `}>
//             <Text>fhd</Text>
//           </View>
//           <UserCamera />
//         </View>
//       </Dialog>
//     </View>
//   );
// };

// export default ProfileAlert;

import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Modal, TouchableOpacity, View } from "react-native";
import { Dialog, PanningProvider } from "react-native-ui-lib";
import tw from "twrnc";

import UserCamera from "./UserCamera";
import UserProfileGallery from "./UserProfileGallery";

const ProfileAlert = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [image, setImage] = useState(null);

  return (
    <View>
      {/* Profile image or placeholder */}
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

      {/* Gallery + options dialog */}
      <Dialog
        visible={isVisible}
        onDismiss={() => setIsVisible(false)}
        panDirection={PanningProvider.Directions.DOWN}
        containerStyle={{
          width: 300,
          alignSelf: "center",
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: 16,
          padding: 20,
        }}
      >
        <View>
          <View style={tw` flex-row  justify-end `}>
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={tw` flex-row items-baseline `}>
            <UserProfileGallery image={image} setImage={setImage} />

            {/* Button to open camera */}
            <TouchableOpacity
              style={tw``}
              onPress={() => {
                setIsVisible(false);
                setIsCameraVisible(true);
              }}
            >
              <EvilIcons name="camera" size={65} color="#B0B0B0" />
            </TouchableOpacity>
          </View>
        </View>
      </Dialog>

      {/* Full screen camera modal */}
      <Modal visible={isCameraVisible} animationType="slide">
        <UserCamera onClose={() => setIsCameraVisible(false)} />
      </Modal>
    </View>
  );
};

export default ProfileAlert;
