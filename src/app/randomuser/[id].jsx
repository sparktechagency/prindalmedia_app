import {
  Iconsfollower,
  IconsListRecipes,
  IconsListRestaurants,
  IconsLists,
  IconsTopDropDown,
  IconVerify,
} from "@/assets/Icon";
import { MaterialIcons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { useCallback, useMemo, useRef, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import RecentActivityList from "../../components/ui/RecentActivityList";
import tw from "../../lib/tailwind";

// tabs name and icons
const tabs = [
  { label: "Restaurants", icon: "" },
  { label: "Recipes", icon: "" },
];

const RandomUser = () => {
  const [activeTab, setActiveTab] = useState("Restaurants");
  const [isFollower, setIsFollower] = useState(false);
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["30%", "50%"], []);

  const handleSheetChanges = useCallback((index) => {
    // console.log("Sheet position changed to:", index);
  }, []);

  const openSheet = () => {
    bottomSheetRef.current?.snapToIndex(0);
  };

  return (
    <GestureHandlerRootView style={tw`flex-1 bg-primaryBg`}>
      <View style={tw`p-[4%] flex-1`}>
        {/* Header */}
        <View style={tw`flex-row justify-between items-center`}>
          <View style={tw`flex-row items-center gap-2 my-4`}>
            <TouchableOpacity onPress={() => router.back()}>
              <MaterialIcons name="arrow-back-ios" size={24} color="black" />
            </TouchableOpacity>
            <Text style={tw`text-4.2 text-[#121212] font-bold`}>Back</Text>
          </View>
          <TouchableOpacity onPress={openSheet}>
            <SvgXml xml={IconsTopDropDown} />
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <View style={tw`px-2`}>
          <View style={tw`items-center bg-white rounded-3xl p-4`}>
            <View style={tw`relative`}>
              <Image
                source={{ uri: "https://i.ibb.co/hFKjJHpC/Ellipse-4-1.png" }}
                style={tw`w-16 h-16 rounded-full`}
              />
              <View style={tw`absolute bottom-0 right-0`}>
                <SvgXml xml={IconVerify} />
              </View>
            </View>
            <View style={tw`items-center mt-4`}>
              <Text style={tw`text-xl font-bold`}>Mark Phillips</Text>
              <Text style={tw`text-3 text-textgray`}>@marke_7</Text>
              <Text style={tw`text-center text-textgray mt-2`}>
                Food lover sharing my journey through bites, sips unforgettable
                meals 🍕🍔🌮
              </Text>
              <View style={tw`flex-row justify-center gap-2 mt-4`}>
                <View
                  style={tw`flex-row items-center gap-1 bg-[#D5D5D51A] p-2 rounded-2 px-6`}
                >
                  <SvgXml xml={Iconsfollower} />
                  <Text>Followers:</Text>
                  <Text style={tw`text-textPrimary font-bold`}>5.1k</Text>
                </View>
                <View
                  style={tw`flex-row items-center gap-1 bg-[#D5D5D51A] p-2 rounded-2 px-6`}
                >
                  <SvgXml xml={Iconsfollower} />
                  <Text>Following:</Text>
                  <Text style={tw`text-textPrimary font-bold`}>1.1k</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Follow / Unfollow Button */}
        <View style={tw`w-full `}>
          <Pressable
            onPress={() => setIsFollower(!isFollower)}
            style={tw`${
              isFollower ? "border border-[#ED6237]" : "bg-orange"
            } px-4 py-3 rounded-full`}
          >
            <Text
              style={tw`${
                isFollower ? "text-textPrimary" : "text-white"
              } font-bold text-center`}
            >
              {isFollower ? "Unfollow" : "Follow"}
            </Text>
          </Pressable>
        </View>

        {/* Tabs Header */}
        <View style={tw`py-4 flex-row justify-between items-center`}>
          <View style={tw`flex-row items-center gap-2`}>
            <SvgXml xml={IconsLists} />
            <Text style={tw`text-4 font-bold text-[#121212]`}>Lists</Text>
          </View>

          <View style={tw`flex-row items-center gap-2`}>
            {tabs.map((item) => (
              <Pressable
                key={item.label}
                onPress={() => setActiveTab(item.label)}
                style={tw`flex-row items-center gap-1`}
              >
                <Icons
                  name={item.icon}
                  size={20}
                  color={activeTab === item.label ? "#ED6237" : "#454545"}
                />
                <Text
                  style={tw`${
                    activeTab === item.label
                      ? "text-orange underline"
                      : "text-[#454545]"
                  } text-4 font-bold`}
                >
                  {item.label}
                </Text>
              </Pressable>
            ))}
            <View style={tw`flex-row items-center gap-2 ml-1`}>
              <SvgXml
                xml={
                  activeTab === "Restaurants"
                    ? IconsListRestaurants
                    : IconsListRecipes
                }
              />
              <Text>{activeTab === "Restaurants" ? 257 : 258}</Text>
            </View>
          </View>
        </View>

        {/* Tab Content */}
        <View style={tw`flex-1`}>
          {activeTab === "Restaurants" && <RecentActivityList />}
          {activeTab === "Recipes" && <RecentActivityList />}
        </View>

        {/* Bottom Sheet */}
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onChange={handleSheetChanges}
        >
          <BottomSheetView style={styles.contentContainer}>
            <View style={tw`flex-col gap-2`}>
              <TouchableOpacity>
                <Text style={tw` font-inter-500 text-orange`}>Block</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={tw` font-inter-500 text-orange`}>Report</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={tw` font-inter-500 text-orange`}>Restrict</Text>
              </TouchableOpacity>
            </View>
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
});

// import { MaterialIcons } from "@expo/vector-icons";
// // import { router } from "expo-router";
// import {
//   Iconsfollower,
//   IconsListRecipes,
//   IconsListRestaurants,
//   IconsLists,
//   IconsTopDropDown,
//   IconVerify,
// } from "@/assets/Icon";
// import { router } from "expo-router";
// import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
// import { SvgXml } from "react-native-svg";
// import Icons from "react-native-vector-icons/MaterialCommunityIcons";
// // import ProfileBlockBottomSheet from "../../components/ui/ProfileBlockButtomSheet";
// import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
// import { useCallback, useMemo, useRef, useState } from "react";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import RecentActivityList from "../../components/ui/RecentActivityList";
// import tw from "../../lib/tailwind";

// // tabs name and icons
// const tabs = [
//   { label: "Restaurants", icon: "" },
//   { label: "Recipes", icon: "" },
// ];

// const RandomUser = () => {
//   const [activeTab, setActiveTab] = useState("Restaurants");
//   const [isFollower, setIsFollower] = useState(false);
//   const bottomSheetRef = useRef(null);

//   // Snap points (height of the sheet)
//   const snapPoints = useMemo(() => ["30", "80%"], []);

//   // Sheet change handler
//   const handleSheetChanges = useCallback((index) => {
//     console.log("Sheet position changed to:", index);
//   }, []);

//   // Open bottom sheet manually
//   const openSheet = () => {
//     bottomSheetRef.current?.snapToIndex(0); // Open at 25%
//   };

//   // console.log();

//   return (
//     <GestureHandlerRootView style={tw`flex-1 bg-primaryBg`}>
//       <View style={tw`p-[4%] flex-1`}>
//         {/* Header */}
//         <View style={tw`flex-row justify-between items-center`}>
//           <View style={tw`flex-row items-center gap-2 my-4`}>
//             <TouchableOpacity onPress={() => router.back()}>
//               <MaterialIcons name="arrow-back-ios" size={24} color="black" />
//             </TouchableOpacity>
//             <Text style={tw`text-4.2 text-[#121212] font-bold`}>Back</Text>
//           </View>
//           <TouchableOpacity onPress={openSheet}>
//             <SvgXml xml={IconsTopDropDown} />
//           </TouchableOpacity>
//         </View>

//         {/* Profile Card */}
//         <View style={tw`px-2`}>
//           <View style={tw`items-center bg-white rounded-3xl p-4`}>
//             <View style={tw`relative`}>
//               <Image
//                 source={{ uri: "https://i.ibb.co/hFKjJHpC/Ellipse-4-1.png" }}
//                 style={tw`w-16 h-16 rounded-full`}
//               />
//               <View style={tw`absolute bottom-0 right-0`}>
//                 <SvgXml xml={IconVerify} />
//               </View>
//             </View>
//             <View style={tw`items-center mt-4`}>
//               <Text style={tw`text-xl font-bold`}>Mark Phillips</Text>
//               <Text style={tw`text-3 text-textgray`}>@marke_7</Text>
//               <Text style={tw`text-center text-textgray mt-2`}>
//                 Food lover sharing my journey through bites, sips unforgettable
//                 meals 🍕🍔🌮
//               </Text>
//               <View style={tw`flex-row justify-center gap-2 mt-4`}>
//                 <View
//                   style={tw`flex-row items-center gap-1 bg-[#D5D5D51A] p-2 rounded-2 px-6`}
//                 >
//                   <SvgXml xml={Iconsfollower} />
//                   <Text>Followers:</Text>
//                   <Text style={tw`text-textPrimary font-bold`}>5.1k</Text>
//                 </View>
//                 <View
//                   style={tw`flex-row items-center gap-1 bg-[#D5D5D51A] p-2 rounded-2 px-6`}
//                 >
//                   <SvgXml xml={Iconsfollower} />
//                   <Text>Following:</Text>
//                   <Text style={tw`text-textPrimary font-bold`}>1.1k</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>

//         <View style={tw`w-full `}>
//           <Pressable
//             onPress={() => setIsFollower(!isFollower)}
//             style={tw`  ${
//               isFollower ? "border border-[#ED6237]" : "bg-orange"
//             } px-4 py-3  rounded-full`}
//           >
//             <Text
//               style={tw`${
//                 isFollower ? "text-textPrimary" : "text-white"
//               } font-bold text-center`}
//             >
//               {isFollower ? "Unfollow" : "Follow"}
//             </Text>
//           </Pressable>
//         </View>

//         {/* Tabs Header */}
//         <View style={tw`py-4 flex-row justify-between items-center`}>
//           <View style={tw`flex-row items-center gap-2`}>
//             <SvgXml xml={IconsLists} />
//             <Text style={tw`text-4 font-bold text-[#121212]`}>Lists</Text>
//           </View>

//           <View style={tw`flex-row items-center gap-2`}>
//             {tabs.map((item) => (
//               <Pressable
//                 key={item.label}
//                 onPress={() => setActiveTab(item.label)}
//                 style={tw`flex-row items-center gap-1`}
//               >
//                 <Icons
//                   name={item.icon}
//                   size={20}
//                   color={activeTab === item.label ? "#ED6237" : "#454545"}
//                 />
//                 <Text
//                   style={tw`${
//                     activeTab === item.label
//                       ? "text-orange underline"
//                       : "text-[#454545]"
//                   } text-4 font-bold`}
//                 >
//                   {item.label}
//                 </Text>
//               </Pressable>
//             ))}
//             <View style={tw`flex-row items-center gap-2 ml-1`}>
//               <SvgXml
//                 xml={
//                   activeTab === "Restaurants"
//                     ? IconsListRestaurants
//                     : IconsListRecipes
//                 }
//               />
//               <Text>{activeTab === "Restaurants" ? 257 : 258}</Text>
//             </View>
//           </View>
//         </View>

//         {/* Tab Content */}
//         <View style={tw`flex-1`}>
//           {activeTab === "Restaurants" && <RecentActivityList />}
//           {activeTab === "Recipes" && <RecentActivityList />}
//         </View>

//         {/* Bottom Sheet */}
//         <BottomSheet
//           ref={bottomSheetRef}
//           index={-1}
//           snapPoints={snapPoints}
//           enablePanDownToClose={true}
//           onChange={handleSheetChanges}
//         >
//           <BottomSheetView style={tw`p-4`}>
//             <Text>Awesome 🎉</Text>
//           </BottomSheetView>
//         </BottomSheet>
//       </View>
//     </GestureHandlerRootView>
//   );
// };

// export default RandomUser;

export default RandomUser;
