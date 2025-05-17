import { AntDesign } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { Dimensions, FlatList, Image, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

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

  // Function to scroll and update index
  const scrollToIndex = (newIndex) => {
    if (newIndex >= 0 && newIndex < images.length) {
      flatListRef.current?.scrollToIndex({ animated: true, index: newIndex });
      setCurrentIndex(newIndex);
    }
  };

  // Auto update currentIndex on scroll
  const onScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    
    const index = Math.round(offsetX / width);
    
    setCurrentIndex(index);
  };


  // console.log(width);
  

  return (
    <View style={tw`relative items-center`}>
      {/* FlatList with scroll tracking */}
      <FlatList
        style={{ borderRadius : 8}} // IMAGE  rounded 
        ref={flatListRef}
        horizontal
        data={images}
        pagingEnabled
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Image
              source={{ uri: item.uri }}
              style={{ width, height: 392 }}
            />
          </TouchableOpacity>
        )}
      />

      {/* Left Arrow */}
      <TouchableOpacity
        onPress={() => scrollToIndex(currentIndex - 1)}
        disabled={currentIndex === 0}
        style={tw`absolute left-2 top-1/2 -mt-4 bg-[#E2E2E2] p-2 rounded-full  opacity-${currentIndex === 0 ? 30 : 100}`}
      >
        <AntDesign name="left" size={20} color="#121212" />
      </TouchableOpacity>

      {/* Right Arrow */}
      <TouchableOpacity
        onPress={() => scrollToIndex(currentIndex + 1)}
        disabled={currentIndex === images.length - 1}
        style={tw`absolute right-2 top-1/2 -mt-4 bg-[#E2E2E2] p-2 rounded-full  opacity-${currentIndex === images.length - 1 ? 30 : 100}`}
      >
        <AntDesign name="right" size={20} color="#121212"  />
      </TouchableOpacity>
    </View>
  );
};

export default TacoSlider;
