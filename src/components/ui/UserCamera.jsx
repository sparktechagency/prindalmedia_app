// import { CameraView, useCameraPermissions } from "expo-camera";
// import { useState } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import tw from "../../lib/tailwind";

// export default function UserCamera() {
//   const [facing, setFacing] = useState("back");
//   const [permission, requestPermission] = useCameraPermissions();

//   if (!permission) {
//     // Camera permissions are still loading.
//     return <View />;
//   }

//   if (!permission.granted) {
//     // Camera permissions are not granted yet.
//     return (
//       <View style={styles.container}>
//         <Text style={styles.message}>
//           We need your permission to show the camera
//         </Text>
//         <TouchableOpacity onPress={requestPermission}>
//           <Text style={tw`text-2xl text-red-500`}>permission</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   function toggleCameraFacing() {
//     setFacing((current) => (current === "back" ? "front" : "back"));
//   }

//   return (
//     <View style={styles.container}>
//       <CameraView style={styles.camera} facing={facing}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
//             <Text style={styles.text}>Flip Camera</Text>
//           </TouchableOpacity>
//         </View>
//       </CameraView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   message: {
//     textAlign: "center",
//     paddingBottom: 10,
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     flexDirection: "row",
//     backgroundColor: "transparent",
//     margin: 64,
//   },
//   button: {
//     flex: 1,
//     alignSelf: "flex-end",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "white",
//   },
// });

import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "../../lib/tailwind";

export default function UserCamera({ onClose }) {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-center mb-4 text-base`}>
          We need your permission to show the camera
        </Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text style={tw`text-2xl text-red-500`}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View style={tw`flex-1`}>
      <CameraView style={tw`flex-1`} facing={facing} />
      <TouchableOpacity
        style={tw`absolute bottom-12 self-center bg-black/50 px-5 py-3 rounded-xl`}
        onPress={toggleCameraFacing}
      >
        <Text style={tw`text-white text-lg font-bold`}>Flip Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`absolute top-12 right-5 bg-white/70 px-4 py-2 rounded`}
        onPress={onClose}
      >
        <Text style={tw`text-black font-bold`}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}
