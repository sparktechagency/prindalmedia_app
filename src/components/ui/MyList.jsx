import { IconRestruernt, IconsListDeleted } from "@/assets/Icon";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";
import foodImage from "../../../assets/images/food-image.png";
import tw from "../../lib/tailwind";

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const MyList = () => {
  //   const bottomSheetRef = useRef();

  const handleDelete = () => {
    Alert.alert(
      "Delete",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          // onPress: () => console.log('Cancel Pressed'),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            // Perform delete logic here
            Alert.alert("Deleted", "Item has been deleted successfully.");
          },
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };
  return (
    <View style={tw`flex-1`}>
      {/* when the api changes ScrollView and adds flatList  */}
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`pb-6`}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              router?.push("/notifications/1");
            }}
          >
            <View style={tw`flex-col my-2 justify-between items-center`}>
              <View
                style={tw`flex-row gap-4 bg-[#D5D5D51A] p-2 rounded-2xl items-center`}
              >
                {/* Image */}
                <Image source={foodImage} style={tw`w-18 h-18 rounded-[8px]`} />

                {/* Content */}
                <View style={tw`flex-1 `}>
                  {/* Title and Rating */}

                  <View style={tw`flex-row  justify-between gap-1 `}>
                    <View style={tw`flex-col gap-1.2 justify-between `}>
                      <Text
                        style={tw`text-base  font-inter-700 text-textPrimary`}
                      >
                        Spaghetti Carbonara
                      </Text>
                      <View style={tw`flex-row items-center`}>
                        <SvgXml xml={IconRestruernt} />
                        <Text
                          style={tw`text-[#454545] ml-1 flex items-center justify-center font-inter-400 text-sm`}
                        >
                          78 Tampa,Florida
                        </Text>
                      </View>
                    </View>

                    {/* Location and Date */}
                    <View style={tw`flex-col gap-1.2 mt-1 justify-between `}>
                      <View style={tw`flex-row items-center`}>
                        <FontAwesome name="star" size={16} color="#facc15" />
                        <Text style={tw`ml-1 text-textPrimary font-inter-600 `}>
                          2.8
                        </Text>
                      </View>

                      <Text style={tw`text-[#454545] font-inter-400 text-sm`}>
                        13th May
                      </Text>
                    </View>
                  </View>

                  {/* Tags */}
                  <View style={tw`flex-row justify-between items-center mt-2`}>
                    <View style={tw`flex-row gap-2`}>
                      <Text
                        style={tw`text-[12px] font-inter-600 text-[#454545]`}
                      >
                        Meal
                      </Text>
                      <Text
                        style={tw`text-[12px] font-inter-600 text-[#454545]`}
                      >
                        Restaurant
                      </Text>
                    </View>
                    <TouchableOpacity onPress={handleDelete}>
                      <SvgXml xml={IconsListDeleted} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MyList;
