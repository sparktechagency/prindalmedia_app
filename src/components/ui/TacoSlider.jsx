import { AntDesign } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";

// Dummy image data
const images = [
  { uri: "https://i.ibb.co/vvqhJ5qD/Rectangle-5040-1.png" },
  { uri: "https://i.ibb.co/vvqhJ5qD/Rectangle-5040-1.png" },
  { uri: "https://i.ibb.co/vvqhJ5qD/Rectangle-5040-1.png" },
  { uri: "https://i.ibb.co/vvqhJ5qD/Rectangle-5040-1.png" },
  { uri: "https://i.ibb.co/vvqhJ5qD/Rectangle-5040-1.png" },
];

const { width } = Dimensions.get("window");

const TacoSlider = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (newIndex) => {
    if (newIndex >= 0 && newIndex < images.length) {
      flatListRef.current?.scrollToIndex({ animated: true, index: newIndex });
      setCurrentIndex(newIndex);
    }
  };

  const onScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentIndex(index);
  };

  return (
    <View style={tw`relative items-center justify-center flex-1`}>
      {/* Image Slider */}
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        onScroll={onScroll}
        scrollEventThrottle={10}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={width}
        snapToAlignment="center"
        keyExtractor={(_, index) => index.toString()}
        data={images}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ width }}>
            <Image
              source={{ uri: item.uri }}
              resizeMode="cover"
              style={{
                width: width - 32,
                height: 300,
                marginHorizontal: 16,
                borderRadius: 12,
              }}
            />
          </TouchableOpacity>
        )}
      />

      {/* Left Arrow */}
      <TouchableOpacity
        onPress={() => scrollToIndex(currentIndex - 1)}
        disabled={currentIndex === 0}
        style={[
          tw`absolute left-2 top-1/2 -mt-4 bg-[#E2E2E2] p-2 rounded-full`,
          { opacity: currentIndex === 0 ? 0.3 : 1 },
        ]}
      >
        <AntDesign name="left" size={18} color="#121212" />
      </TouchableOpacity>

      {/* Right Arrow */}
      <TouchableOpacity
        onPress={() => scrollToIndex(currentIndex + 1)}
        disabled={currentIndex === images.length - 1}
        style={[
          tw`absolute right-2 top-1/2 -mt-4 bg-[#E2E2E2] p-2 rounded-full`,
          { opacity: currentIndex === images.length - 1 ? 0.3 : 1 },
        ]}
      >
        <AntDesign name="right" size={18} color="#121212" />
      </TouchableOpacity>
    </View>
  );
};

export default TacoSlider;
