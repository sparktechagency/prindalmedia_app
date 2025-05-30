import { IconsLists, IconsTopDropDown } from "@/assets/Icon";
import { MaterialIcons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { useCallback, useMemo, useRef, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import BlockModal from "../../components/ui/BlockModal";
import RandomUserProfile from "../../components/ui/RandomUserProfile";
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

  const snapPoints = useMemo(() => ["30", "60%", "70%", "90%"], []);

  const handleSheetChanges = useCallback((index) => {
    // console.log("Sheet position changed to:", index);
  }, []);

  const openSheet = () => {
    bottomSheetRef.current?.snapToIndex(0);
  };

  const [isVisible, setIsVisible] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalName, setmodalName] = useState("");

  const handleViewMode = (name) => {
    if (modalVisible) {
      setIsVisible(!isVisible);
    } else {
      setModalVisible(true);
    }
    setmodalName(name);
  };

  return (
    <GestureHandlerRootView style={tw`flex-1 bg-primaryBg`}>
      <View style={tw`p-[4%] flex-1`}>
        {/* Header */}
        <View style={tw`flex-row justify-between items-center`}>
          <View style={tw`flex-row items-center gap-2 my-2`}>
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

        <RandomUserProfile />

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
            {/* <View style={tw`flex-row items-center gap-2 ml-1`}>
              <SvgXml
                xml={
                  activeTab === "Restaurants"
                    ? IconsListRestaurants
                    : IconsListRecipes
                }
              />
              <Text>{activeTab === "Restaurants" ? 257 : 258}</Text>
            </View> */}
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
              <TouchableOpacity onPress={() => handleViewMode("Block")}>
                <Text style={tw` font-inter-500 text-orange`}>Block</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleViewMode("Report")}>
                <Text style={tw` font-inter-500 text-orange`}>Report</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleViewMode("Restrict")}>
                <Text style={tw` font-inter-500 text-orange`}>Restrict</Text>
              </TouchableOpacity>
            </View>
          </BottomSheetView>
        </BottomSheet>

        {/* open modal  */}
        <BlockModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          modalName={modalName}
        />
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

export default RandomUser;
