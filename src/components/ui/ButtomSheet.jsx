import { IconComment, IconDelete, IconsBlue } from "@/assets/Icon";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { SvgXml } from "react-native-svg";
import tw from "../../lib/tailwind";

export default function ButtomSheet() {
  const bottomSheetRef = useRef();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    { id: 1, user: "Casey", text: "It's a nice food. Very tasty & sweet." },
    { id: 2, user: "Alex", text: "Loved it!" },
    { id: 3, user: "Mia", text: "Not bad." },
    { id: 4, user: "Mia", text: "Not bad." },
    { id: 5, user: "Mia", text: "Not bad." },
  ]);

  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  const handleComment = () => {
    if (comment.trim() === "") return;

    const newComment = {
      id: Date.now(),
      user: "You",
      text: comment.trim(),
    };
    setComments([newComment, ...comments]);
    setComment("");
  };

  const handlClose = () => {
    bottomSheetRef.current.close();
  };

  const handleDelete = (id) => {
    Alert.alert(
      "Delete Comment",
      "Are you sure you want to delete this comment?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () =>
            setComments((prevComments) =>
              prevComments.filter((c) => c.id !== id)
            ),
        },
      ]
    );
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={openBottomSheet}>
        <SvgXml xml={IconComment} />
      </TouchableOpacity>

      <RBSheet
        ref={bottomSheetRef}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={500}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 15,
            paddingHorizontal: 20,
          },
        }}
      >
        <View style={tw`flex-1`}>
          {/* Header */}
          <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`text-lg font-inter-700 py-3`}>Comment</Text>
            <Ionicons
              name="close"
              size={24}
              color="#121212"
              onPress={handlClose}
            />
          </View>

          {/* Comment List */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ height: 280 }}
          >
            {comments.map((item) => (
              <View key={item.id}>
                <View style={tw`flex-row items-start justify-between my-2`}>
                  <View style={tw`flex-row flex-1`}>
                    <Image
                      source={{
                        uri: "https://randomuser.me/api/portraits/men/1.jpg",
                      }}
                      style={tw`w-10.5 h-10.5 rounded-full mr-3`}
                    />
                    <View style={tw`flex-1`}>
                      <Text style={tw`text-textgray font-inter-600 text-3`}>
                        {item.user}
                      </Text>
                      <Text
                        style={tw`text-textPrimary text-4 font-inter-400 mt-0.5`}
                      >
                        {item.text}
                      </Text>
                      <View style={tw`flex-row mt-1`}>
                        <TouchableOpacity>
                          <Text
                            style={tw`font-inter-400 text-[#888888] text-xs mr-4`}
                          >
                            Reply
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Text
                            style={tw`font-inter-400 text-[#888888] text-xs`}
                          >
                            Like
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => handleDelete(item.id)}>
                    <SvgXml xml={IconDelete} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* Compact Input Section */}
          <View style={tw`my-4`}>
            <View
              style={tw`flex-row items-center bg-[#F3F3F3] rounded-full px-3 py-3`}
            >
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/men/1.jpg",
                }}
                style={tw`w-5 h-5 rounded-full mr-2`}
              />
              <TextInput
                style={tw`flex-1 text-textPrimary text-sm py-1`}
                placeholder="Write a comment..."
                placeholderTextColor="#888"
                value={comment}
                onChangeText={setComment}
                onSubmitEditing={handleComment}
                returnKeyType="send"
              />
              <TouchableOpacity onPress={handleComment}>
                <SvgXml xml={IconsBlue} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
}
//

// import { IconComment, IconDelete, IconsBlue } from "@/assets/Icon";
// import { Ionicons } from "@expo/vector-icons";
// import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
// import { useCallback, useMemo, useRef, useState } from "react";
// import {
//   Alert,
//   Image,
//   SafeAreaView,
//   ScrollView,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { SvgXml } from "react-native-svg";
// import tw from "../../lib/tailwind";

// export default function ButtomSheet() {
//   const bottomSheetRef = useRef(null);
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState([
//     { id: 1, user: "Casey", text: "It's a nice food. Very tasty & sweet." },
//     { id: 2, user: "Alex", text: "Loved it!" },
//     { id: 3, user: "Mia", text: "Not bad." },
//     { id: 4, user: "Mia", text: "Not bad." },
//     { id: 5, user: "Mia", text: "Not bad." },
//   ]);

//   // Snap points for the bottom sheet
//   const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

//   const handleSheetChanges = useCallback((index) => {
//     console.log("handleSheetChanges", index);
//   }, []);

//   const openBottomSheet = () => {
//     bottomSheetRef.current?.snapToIndex(1); // Open at 50%
//   };

//   const handleClose = () => {
//     bottomSheetRef.current?.close();
//   };

//   const handleComment = () => {
//     if (comment.trim() === "") return;

//     const newComment = {
//       id: Date.now(),
//       user: "You",
//       text: comment.trim(),
//     };
//     setComments([newComment, ...comments]);
//     setComment("");
//   };

//   const handleDelete = (id) => {
//     Alert.alert(
//       "Delete Comment",
//       "Are you sure you want to delete this comment?",
//       [
//         { text: "Cancel", style: "cancel" },
//         {
//           text: "Delete",
//           style: "destructive",
//           onPress: () =>
//             setComments((prevComments) =>
//               prevComments.filter((c) => c.id !== id)
//             ),
//         },
//       ]
//     );
//   };

//   return (
//     <GestureHandlerRootView style={tw``}>
//       <SafeAreaView style={tw``}>
//         <TouchableOpacity onPress={openBottomSheet}>
//           <SvgXml xml={IconComment} />
//         </TouchableOpacity>

//         <BottomSheet
//           ref={bottomSheetRef}
//           index={-1} // Initially closed
//           snapPoints={snapPoints}
//           onChange={handleSheetChanges}
//           enablePanDownToClose={true}
//           backgroundStyle={tw`bg-white rounded-t-3xl`}
//           handleIndicatorStyle={tw`bg-gray-400`}
//         >
//           <BottomSheetView style={tw`flex-1 px-4`}>
//             {/* Header */}
//             <View style={tw`flex-row justify-between items-center`}>
//               <Text style={tw`text-lg font-inter-700 py-3`}>Comment</Text>
//               <Ionicons
//                 name="close"
//                 size={24}
//                 color="#121212"
//                 onPress={handleClose}
//               />
//             </View>

//             {/* Comment List */}
//             <ScrollView
//               showsVerticalScrollIndicator={false}
//               style={tw`max-h-64`}
//             >
//               {comments.map((item) => (
//                 <View key={item.id} style={tw`mb-4`}>
//                   <View style={tw`flex-row items-start justify-between`}>
//                     <View style={tw`flex-row flex-1`}>
//                       <Image
//                         source={{
//                           uri: "https://randomuser.me/api/portraits/men/1.jpg",
//                         }}
//                         style={tw`w-10.5 h-10.5 rounded-full mr-3`}
//                       />
//                       <View style={tw`flex-1`}>
//                         <Text style={tw`text-textgray font-inter-600 text-3`}>
//                           {item.user}
//                         </Text>
//                         <Text
//                           style={tw`text-textPrimary text-4 font-inter-400 mt-0.5`}
//                         >
//                           {item.text}
//                         </Text>
//                         <View style={tw`flex-row mt-1`}>
//                           <TouchableOpacity>
//                             <Text
//                               style={tw`font-inter-400 text-[#888888] text-xs mr-4`}
//                             >
//                               Reply
//                             </Text>
//                           </TouchableOpacity>
//                           <TouchableOpacity>
//                             <Text
//                               style={tw`font-inter-400 text-[#888888] text-xs`}
//                             >
//                               Like
//                             </Text>
//                           </TouchableOpacity>
//                         </View>
//                       </View>
//                     </View>
//                     <TouchableOpacity onPress={() => handleDelete(item.id)}>
//                       <SvgXml xml={IconDelete} />
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               ))}
//             </ScrollView>

//             {/* Comment Input Section */}
//             <View style={tw`my-4`}>
//               <View
//                 style={tw`flex-row items-center bg-[#F3F3F3] rounded-full px-3 py-3`}
//               >
//                 <Image
//                   source={{
//                     uri: "https://randomuser.me/api/portraits/men/1.jpg",
//                   }}
//                   style={tw`w-5 h-5 rounded-full mr-2`}
//                 />
//                 <TextInput
//                   style={tw`flex-1 text-textPrimary text-sm py-1`}
//                   placeholder="Write a comment..."
//                   placeholderTextColor="#888"
//                   value={comment}
//                   onChangeText={setComment}
//                   onSubmitEditing={handleComment}
//                   returnKeyType="send"
//                 />
//                 <TouchableOpacity onPress={handleComment}>
//                   <SvgXml xml={IconsBlue} />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </BottomSheetView>
//         </BottomSheet>
//       </SafeAreaView>
//     </GestureHandlerRootView>
//   );
// }
