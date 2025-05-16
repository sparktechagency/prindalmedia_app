import { AntDesign } from "@expo/vector-icons"; // For arrow icons
import { useRef } from "react";
import { Dimensions, FlatList, Image, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

const images = [
  { uri: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
  { uri: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90" },
  { uri: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85" },
];


const { width } = Dimensions.get("window");

const TacoSlider = () => {
  const flatListRef = useRef(null);

  const scrollToIndex = (index) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  };

  return (
    <View style={tw`relative items-center`}>
      {/* Slider */}
      <FlatList
        ref={flatListRef}
        horizontal
        data={images}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={{ width, height: 300, resizeMode: "cover" }}
          />
        )}
      />

      {/* Left Arrow */}
      <TouchableOpacity
        onPress={() => scrollToIndex(0)}
        style={tw`absolute left-2 top-1/2 -mt-4 bg-white p-2 rounded-full shadow`}
      >
        <AntDesign name="left" size={20} color="#333" />
      </TouchableOpacity>

      {/* Right Arrow */}
      <TouchableOpacity
        onPress={() => scrollToIndex(images.length - 1)}
        style={tw`absolute right-2 top-1/2 -mt-4 bg-white p-2 rounded-full shadow`}
      >
        <AntDesign name="right" size={20} color="#333" />
      </TouchableOpacity>
    </View>
  );
}
export default  TacoSlider;