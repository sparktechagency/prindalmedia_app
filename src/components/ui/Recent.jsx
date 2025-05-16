import {
  FontAwesome
} from "@expo/vector-icons";
import { Image, ScrollView, Text, View } from "react-native";
import tw from "twrnc";
import foodImage from "../../../assets/images/food-image.png";
import Icon from "../../../assets/images/restaurant.png";

const Recent = () => {
  return (
    <View>
      {/* when the api changes ScrollView and adds flatList  */}

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Recent full content wrapper  */}
        <View
          style={tw`flex-col gap-4 mt-0 mb-10  justify-between items-center`}
        >
          <View
              style={tw`flex-row gap-4 bg-[rgba(213, 213, 213, 0.10)] p-2 rounded-2xl items-center `}
            >
              {/* Image */}
              <Image source={foodImage} style={tw`w-18 h-18 rounded-[8px]`} />

              {/* Content */}
              <View style={tw`flex-1 px-2`}>
                {/* Title and Rating */}
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-base font-bold text-black`}>
                    Spaghetti Carbonara
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <FontAwesome name="star" size={16} color="#facc15" />
                    <Text style={tw`ml-1 text-black font-medium`}>2.8</Text>
                  </View>
                </View>

                {/* Location and Date */}
                <View style={tw`flex-row justify-between items-center mt-1`}>
                  <View style={tw`flex-row items-center`}>
                    <Image style={tw`w-4 h-4`} source={Icon} />
                    <Text style={tw`text-[#454545] ml-1 text-sm`}>
                      78 Tampa, Florida
                    </Text>
                  </View>
                  <Text style={tw`text-[#454545] text-sm`}>07/04/2027</Text>
                </View>

                {/* Tags and Bookmark */}
                <View style={tw`flex-row justify-between items-center mt-2`}>
                  <View style={tw`flex-row gap-2`}>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Meal
                    </Text>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Restaurant
                    </Text>
                  </View>
                  
                </View>
              </View>
            </View>
          <View
              style={tw`flex-row gap-4 bg-[rgba(213, 213, 213, 0.10)] p-2 rounded-2xl items-center `}
            >
              {/* Image */}
              <Image source={foodImage} style={tw`w-18 h-18 rounded-[8px]`} />

              {/* Content */}
              <View style={tw`flex-1 px-2`}>
                {/* Title and Rating */}
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-base font-bold text-black`}>
                    Spaghetti Carbonara
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <FontAwesome name="star" size={16} color="#facc15" />
                    <Text style={tw`ml-1 text-black font-medium`}>2.8</Text>
                  </View>
                </View>

                {/* Location and Date */}
                <View style={tw`flex-row justify-between items-center mt-1`}>
                  <View style={tw`flex-row items-center`}>
                    <Image style={tw`w-4 h-4`} source={Icon} />
                    <Text style={tw`text-[#454545] ml-1 text-sm`}>
                      78 Tampa, Florida
                    </Text>
                  </View>
                  <Text style={tw`text-[#454545] text-sm`}>07/04/2027</Text>
                </View>

                {/* Tags and Bookmark */}
                <View style={tw`flex-row justify-between items-center mt-2`}>
                  <View style={tw`flex-row gap-2`}>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Meal
                    </Text>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Restaurant
                    </Text>
                  </View>
                  
                </View>
              </View>
            </View>
          <View
              style={tw`flex-row gap-4 bg-[rgba(213, 213, 213, 0.10)] p-2 rounded-2xl items-center `}
            >
              {/* Image */}
              <Image source={foodImage} style={tw`w-18 h-18 rounded-[8px]`} />

              {/* Content */}
              <View style={tw`flex-1 px-2`}>
                {/* Title and Rating */}
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-base font-bold text-black`}>
                    Spaghetti Carbonara
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <FontAwesome name="star" size={16} color="#facc15" />
                    <Text style={tw`ml-1 text-black font-medium`}>2.8</Text>
                  </View>
                </View>

                {/* Location and Date */}
                <View style={tw`flex-row justify-between items-center mt-1`}>
                  <View style={tw`flex-row items-center`}>
                    <Image style={tw`w-4 h-4`} source={Icon} />
                    <Text style={tw`text-[#454545] ml-1 text-sm`}>
                      78 Tampa, Florida
                    </Text>
                  </View>
                  <Text style={tw`text-[#454545] text-sm`}>07/04/2027</Text>
                </View>

                {/* Tags and Bookmark */}
                <View style={tw`flex-row justify-between items-center mt-2`}>
                  <View style={tw`flex-row gap-2`}>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Meal
                    </Text>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Restaurant
                    </Text>
                  </View>
                  
                </View>
              </View>
            </View>
          <View
              style={tw`flex-row gap-4 bg-[rgba(213, 213, 213, 0.10)] p-2 rounded-2xl items-center `}
            >
              {/* Image */}
              <Image source={foodImage} style={tw`w-18 h-18 rounded-[8px]`} />

              {/* Content */}
              <View style={tw`flex-1 px-2`}>
                {/* Title and Rating */}
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-base font-bold text-black`}>
                    Spaghetti Carbonara
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <FontAwesome name="star" size={16} color="#facc15" />
                    <Text style={tw`ml-1 text-black font-medium`}>2.8</Text>
                  </View>
                </View>

                {/* Location and Date */}
                <View style={tw`flex-row justify-between items-center mt-1`}>
                  <View style={tw`flex-row items-center`}>
                    <Image style={tw`w-4 h-4`} source={Icon} />
                    <Text style={tw`text-[#454545] ml-1 text-sm`}>
                      78 Tampa, Florida
                    </Text>
                  </View>
                  <Text style={tw`text-[#454545] text-sm`}>07/04/2027</Text>
                </View>

                {/* Tags and Bookmark */}
                <View style={tw`flex-row justify-between items-center mt-2`}>
                  <View style={tw`flex-row gap-2`}>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Meal
                    </Text>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Restaurant
                    </Text>
                  </View>
                  
                </View>
              </View>
            </View>
          <View
              style={tw`flex-row gap-4 bg-[rgba(213, 213, 213, 0.10)] p-2 rounded-2xl items-center `}
            >
              {/* Image */}
              <Image source={foodImage} style={tw`w-18 h-18 rounded-[8px]`} />

              {/* Content */}
              <View style={tw`flex-1 px-2`}>
                {/* Title and Rating */}
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-base font-bold text-black`}>
                    Spaghetti Carbonara
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <FontAwesome name="star" size={16} color="#facc15" />
                    <Text style={tw`ml-1 text-black font-medium`}>2.8</Text>
                  </View>
                </View>

                {/* Location and Date */}
                <View style={tw`flex-row justify-between items-center mt-1`}>
                  <View style={tw`flex-row items-center`}>
                    <Image style={tw`w-4 h-4`} source={Icon} />
                    <Text style={tw`text-[#454545] ml-1 text-sm`}>
                      78 Tampa, Florida
                    </Text>
                  </View>
                  <Text style={tw`text-[#454545] text-sm`}>07/04/2027</Text>
                </View>

                {/* Tags and Bookmark */}
                <View style={tw`flex-row justify-between items-center mt-2`}>
                  <View style={tw`flex-row gap-2`}>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Meal
                    </Text>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Restaurant
                    </Text>
                  </View>
                  
                </View>
              </View>
            </View>
          <View
              style={tw`flex-row gap-4 bg-[rgba(213, 213, 213, 0.10)] p-2 rounded-2xl items-center `}
            >
              {/* Image */}
              <Image source={foodImage} style={tw`w-18 h-18 rounded-[8px]`} />

              {/* Content */}
              <View style={tw`flex-1 px-2`}>
                {/* Title and Rating */}
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-base font-bold text-black`}>
                    Spaghetti Carbonara
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <FontAwesome name="star" size={16} color="#facc15" />
                    <Text style={tw`ml-1 text-black font-medium`}>2.8</Text>
                  </View>
                </View>

                {/* Location and Date */}
                <View style={tw`flex-row justify-between items-center mt-1`}>
                  <View style={tw`flex-row items-center`}>
                    <Image style={tw`w-4 h-4`} source={Icon} />
                    <Text style={tw`text-[#454545] ml-1 text-sm`}>
                      78 Tampa, Florida
                    </Text>
                  </View>
                  <Text style={tw`text-[#454545] text-sm`}>07/04/2027</Text>
                </View>

                {/* Tags and Bookmark */}
                <View style={tw`flex-row justify-between items-center mt-2`}>
                  <View style={tw`flex-row gap-2`}>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Meal
                    </Text>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Restaurant
                    </Text>
                  </View>
                  
                </View>
              </View>
            </View>
          <View
              style={tw`flex-row gap-4 bg-[rgba(213, 213, 213, 0.10)] p-2 rounded-2xl items-center `}
            >
              {/* Image */}
              <Image source={foodImage} style={tw`w-18 h-18 rounded-[8px]`} />

              {/* Content */}
              <View style={tw`flex-1 px-2`}>
                {/* Title and Rating */}
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-base font-bold text-black`}>
                    Spaghetti Carbonara
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <FontAwesome name="star" size={16} color="#facc15" />
                    <Text style={tw`ml-1 text-black font-medium`}>2.8</Text>
                  </View>
                </View>

                {/* Location and Date */}
                <View style={tw`flex-row justify-between items-center mt-1`}>
                  <View style={tw`flex-row items-center`}>
                    <Image style={tw`w-4 h-4`} source={Icon} />
                    <Text style={tw`text-[#454545] ml-1 text-sm`}>
                      78 Tampa, Florida
                    </Text>
                  </View>
                  <Text style={tw`text-[#454545] text-sm`}>07/04/2027</Text>
                </View>

                {/* Tags and Bookmark */}
                <View style={tw`flex-row justify-between items-center mt-2`}>
                  <View style={tw`flex-row gap-2`}>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Meal
                    </Text>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Restaurant
                    </Text>
                  </View>
                  
                </View>
              </View>
            </View>
          <View
              style={tw`flex-row gap-4 bg-[rgba(213, 213, 213, 0.10)] p-2 rounded-2xl items-center `}
            >
              {/* Image */}
              <Image source={foodImage} style={tw`w-18 h-18 rounded-[8px]`} />

              {/* Content */}
              <View style={tw`flex-1 px-2`}>
                {/* Title and Rating */}
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-base font-bold text-black`}>
                    Spaghetti Carbonara
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <FontAwesome name="star" size={16} color="#facc15" />
                    <Text style={tw`ml-1 text-black font-medium`}>2.8</Text>
                  </View>
                </View>

                {/* Location and Date */}
                <View style={tw`flex-row justify-between items-center mt-1`}>
                  <View style={tw`flex-row items-center`}>
                    <Image style={tw`w-4 h-4`} source={Icon} />
                    <Text style={tw`text-[#454545] ml-1 text-sm`}>
                      78 Tampa, Florida
                    </Text>
                  </View>
                  <Text style={tw`text-[#454545] text-sm`}>07/04/2027</Text>
                </View>

                {/* Tags and Bookmark */}
                <View style={tw`flex-row justify-between items-center mt-2`}>
                  <View style={tw`flex-row gap-2`}>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Meal
                    </Text>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Restaurant
                    </Text>
                  </View>
                  
                </View>
              </View>
            </View>
          <View
              style={tw`flex-row gap-4 bg-[rgba(213, 213, 213, 0.10)] p-2 rounded-2xl items-center `}
            >
              {/* Image */}
              <Image source={foodImage} style={tw`w-18 h-18 rounded-[8px]`} />

              {/* Content */}
              <View style={tw`flex-1 px-2`}>
                {/* Title and Rating */}
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-base font-bold text-black`}>
                    Spaghetti Carbonara
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <FontAwesome name="star" size={16} color="#facc15" />
                    <Text style={tw`ml-1 text-black font-medium`}>2.8</Text>
                  </View>
                </View>

                {/* Location and Date */}
                <View style={tw`flex-row justify-between items-center mt-1`}>
                  <View style={tw`flex-row items-center`}>
                    <Image style={tw`w-4 h-4`} source={Icon} />
                    <Text style={tw`text-[#454545] ml-1 text-sm`}>
                      78 Tampa, Florida
                    </Text>
                  </View>
                  <Text style={tw`text-[#454545] text-sm`}>07/04/2027</Text>
                </View>

                {/* Tags and Bookmark */}
                <View style={tw`flex-row justify-between items-center mt-2`}>
                  <View style={tw`flex-row gap-2`}>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Meal
                    </Text>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Restaurant
                    </Text>
                  </View>
                  
                </View>
              </View>
            </View>
          <View
              style={tw`flex-row gap-4 bg-[rgba(213, 213, 213, 0.10)] p-2 rounded-2xl items-center `}
            >
              {/* Image */}
              <Image source={foodImage} style={tw`w-18 h-18 rounded-[8px]`} />

              {/* Content */}
              <View style={tw`flex-1 px-2`}>
                {/* Title and Rating */}
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-base font-bold text-black`}>
                    Spaghetti Carbonara
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <FontAwesome name="star" size={16} color="#facc15" />
                    <Text style={tw`ml-1 text-black font-medium`}>2.8</Text>
                  </View>
                </View>

                {/* Location and Date */}
                <View style={tw`flex-row justify-between items-center mt-1`}>
                  <View style={tw`flex-row items-center`}>
                    <Image style={tw`w-4 h-4`} source={Icon} />
                    <Text style={tw`text-[#454545] ml-1 text-sm`}>
                      78 Tampa, Florida
                    </Text>
                  </View>
                  <Text style={tw`text-[#454545] text-sm`}>07/04/2027</Text>
                </View>

                {/* Tags and Bookmark */}
                <View style={tw`flex-row justify-between items-center mt-2`}>
                  <View style={tw`flex-row gap-2`}>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Meal
                    </Text>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Restaurant
                    </Text>
                  </View>
                  
                </View>
              </View>
            </View>
          <View
              style={tw`flex-row gap-4 bg-[rgba(213, 213, 213, 0.10)] p-2 rounded-2xl items-center `}
            >
              {/* Image */}
              <Image source={foodImage} style={tw`w-18 h-18 rounded-[8px]`} />

              {/* Content */}
              <View style={tw`flex-1 px-2`}>
                {/* Title and Rating */}
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-base font-bold text-black`}>
                    Spaghetti Carbonara
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <FontAwesome name="star" size={16} color="#facc15" />
                    <Text style={tw`ml-1 text-black font-medium`}>2.8</Text>
                  </View>
                </View>

                {/* Location and Date */}
                <View style={tw`flex-row justify-between items-center mt-1`}>
                  <View style={tw`flex-row items-center`}>
                    <Image style={tw`w-4 h-4`} source={Icon} />
                    <Text style={tw`text-[#454545] ml-1 text-sm`}>
                      78 Tampa, Florida
                    </Text>
                  </View>
                  <Text style={tw`text-[#454545] text-sm`}>07/04/2027</Text>
                </View>

                {/* Tags and Bookmark */}
                <View style={tw`flex-row justify-between items-center mt-2`}>
                  <View style={tw`flex-row gap-2`}>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Meal
                    </Text>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Restaurant
                    </Text>
                  </View>
                  
                </View>
              </View>
            </View>
          <View
              style={tw`flex-row gap-4 bg-[rgba(213, 213, 213, 0.10)] p-2 rounded-2xl items-center `}
            >
              {/* Image */}
              <Image source={foodImage} style={tw`w-18 h-18 rounded-[8px]`} />

              {/* Content */}
              <View style={tw`flex-1 px-2`}>
                {/* Title and Rating */}
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-base font-bold text-black`}>
                    Spaghetti Carbonara
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <FontAwesome name="star" size={16} color="#facc15" />
                    <Text style={tw`ml-1 text-black font-medium`}>2.8</Text>
                  </View>
                </View>

                {/* Location and Date */}
                <View style={tw`flex-row justify-between items-center mt-1`}>
                  <View style={tw`flex-row items-center`}>
                    <Image style={tw`w-4 h-4`} source={Icon} />
                    <Text style={tw`text-[#454545] ml-1 text-sm`}>
                      78 Tampa, Florida
                    </Text>
                  </View>
                  <Text style={tw`text-[#454545] text-sm`}>07/04/2027</Text>
                </View>

                {/* Tags and Bookmark */}
                <View style={tw`flex-row justify-between items-center mt-2`}>
                  <View style={tw`flex-row gap-2`}>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Meal
                    </Text>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Restaurant
                    </Text>
                  </View>
                  
                </View>
              </View>
            </View>
          <View
              style={tw`flex-row gap-4 bg-[rgba(213, 213, 213, 0.10)] p-2 rounded-2xl items-center `}
            >
              {/* Image */}
              <Image source={foodImage} style={tw`w-18 h-18 rounded-[8px]`} />

              {/* Content */}
              <View style={tw`flex-1 px-2`}>
                {/* Title and Rating */}
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-base font-bold text-black`}>
                    Spaghetti Carbonara
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <FontAwesome name="star" size={16} color="#facc15" />
                    <Text style={tw`ml-1 text-black font-medium`}>2.8</Text>
                  </View>
                </View>

                {/* Location and Date */}
                <View style={tw`flex-row justify-between items-center mt-1`}>
                  <View style={tw`flex-row items-center`}>
                    <Image style={tw`w-4 h-4`} source={Icon} />
                    <Text style={tw`text-[#454545] ml-1 text-sm`}>
                      78 Tampa, Florida
                    </Text>
                  </View>
                  <Text style={tw`text-[#454545] text-sm`}>07/04/2027</Text>
                </View>

                {/* Tags and Bookmark */}
                <View style={tw`flex-row justify-between items-center mt-2`}>
                  <View style={tw`flex-row gap-2`}>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Meal
                    </Text>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Restaurant
                    </Text>
                  </View>
                  
                </View>
              </View>
            </View>
          <View
              style={tw`flex-row gap-4 bg-[rgba(213, 213, 213, 0.10)] p-2 rounded-2xl items-center `}
            >
              {/* Image */}
              <Image source={foodImage} style={tw`w-18 h-18 rounded-[8px]`} />

              {/* Content */}
              <View style={tw`flex-1 px-2`}>
                {/* Title and Rating */}
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-base font-bold text-black`}>
                    Spaghetti Carbonara
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <FontAwesome name="star" size={16} color="#facc15" />
                    <Text style={tw`ml-1 text-black font-medium`}>2.8</Text>
                  </View>
                </View>

                {/* Location and Date */}
                <View style={tw`flex-row justify-between items-center mt-1`}>
                  <View style={tw`flex-row items-center`}>
                    <Image style={tw`w-4 h-4`} source={Icon} />
                    <Text style={tw`text-[#454545] ml-1 text-sm`}>
                      78 Tampa, Florida
                    </Text>
                  </View>
                  <Text style={tw`text-[#454545] text-sm`}>07/04/2027</Text>
                </View>

                {/* Tags and Bookmark */}
                <View style={tw`flex-row justify-between items-center mt-2`}>
                  <View style={tw`flex-row gap-2`}>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Meal
                    </Text>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Restaurant
                    </Text>
                  </View>
                  
                </View>
              </View>
            </View>
          <View
              style={tw`flex-row gap-4 bg-[rgba(213, 213, 213, 0.10)] p-2 rounded-2xl items-center `}
            >
              {/* Image */}
              <Image source={foodImage} style={tw`w-18 h-18 rounded-[8px]`} />

              {/* Content */}
              <View style={tw`flex-1 px-2`}>
                {/* Title and Rating */}
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-base font-bold text-black`}>
                    Spaghetti Carbonara
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <FontAwesome name="star" size={16} color="#facc15" />
                    <Text style={tw`ml-1 text-black font-medium`}>2.8</Text>
                  </View>
                </View>

                {/* Location and Date */}
                <View style={tw`flex-row justify-between items-center mt-1`}>
                  <View style={tw`flex-row items-center`}>
                    <Image style={tw`w-4 h-4`} source={Icon} />
                    <Text style={tw`text-[#454545] ml-1 text-sm`}>
                      78 Tampa, Florida
                    </Text>
                  </View>
                  <Text style={tw`text-[#454545] text-sm`}>07/04/2027</Text>
                </View>

                {/* Tags and Bookmark */}
                <View style={tw`flex-row justify-between items-center mt-2`}>
                  <View style={tw`flex-row gap-2`}>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Meal
                    </Text>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Restaurant
                    </Text>
                  </View>
                  
                </View>
              </View>
            </View>
          <View
              style={tw`flex-row gap-4 bg-[rgba(213, 213, 213, 0.10)] p-2 rounded-2xl items-center `}
            >
              {/* Image */}
              <Image source={foodImage} style={tw`w-18 h-18 rounded-[8px]`} />

              {/* Content */}
              <View style={tw`flex-1 px-2`}>
                {/* Title and Rating */}
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-base font-bold text-black`}>
                    Spaghetti Carbonara
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <FontAwesome name="star" size={16} color="#facc15" />
                    <Text style={tw`ml-1 text-black font-medium`}>2.8</Text>
                  </View>
                </View>

                {/* Location and Date */}
                <View style={tw`flex-row justify-between items-center mt-1`}>
                  <View style={tw`flex-row items-center`}>
                    <Image style={tw`w-4 h-4`} source={Icon} />
                    <Text style={tw`text-[#454545] ml-1 text-sm`}>
                      78 Tampa, Florida
                    </Text>
                  </View>
                  <Text style={tw`text-[#454545] text-sm`}>07/04/2027</Text>
                </View>

                {/* Tags and Bookmark */}
                <View style={tw`flex-row justify-between items-center mt-2`}>
                  <View style={tw`flex-row gap-2`}>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Meal
                    </Text>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Restaurant
                    </Text>
                  </View>
                  
                </View>
              </View>
            </View>
          <View
              style={tw`flex-row gap-4 bg-[rgba(213, 213, 213, 0.10)] p-2 rounded-2xl items-center `}
            >
              {/* Image */}
              <Image source={foodImage} style={tw`w-18 h-18 rounded-[8px]`} />

              {/* Content */}
              <View style={tw`flex-1 px-2`}>
                {/* Title and Rating */}
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-base font-bold text-black`}>
                    Spaghetti Carbonara
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <FontAwesome name="star" size={16} color="#facc15" />
                    <Text style={tw`ml-1 text-black font-medium`}>2.8</Text>
                  </View>
                </View>

                {/* Location and Date */}
                <View style={tw`flex-row justify-between items-center mt-1`}>
                  <View style={tw`flex-row items-center`}>
                    <Image style={tw`w-4 h-4`} source={Icon} />
                    <Text style={tw`text-[#454545] ml-1 text-sm`}>
                      78 Tampa, Florida
                    </Text>
                  </View>
                  <Text style={tw`text-[#454545] text-sm`}>07/04/2027</Text>
                </View>

                {/* Tags and Bookmark */}
                <View style={tw`flex-row justify-between items-center mt-2`}>
                  <View style={tw`flex-row gap-2`}>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Meal
                    </Text>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Restaurant
                    </Text>
                  </View>
                  
                </View>
              </View>
            </View>
          <View
              style={tw`flex-row gap-4 bg-[rgba(213, 213, 213, 0.10)] p-2 rounded-2xl items-center `}
            >
              {/* Image */}
              <Image source={foodImage} style={tw`w-18 h-18 rounded-[8px]`} />

              {/* Content */}
              <View style={tw`flex-1 px-2`}>
                {/* Title and Rating */}
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-base font-bold text-black`}>
                    Spaghetti Carbonara
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <FontAwesome name="star" size={16} color="#facc15" />
                    <Text style={tw`ml-1 text-black font-medium`}>2.8</Text>
                  </View>
                </View>

                {/* Location and Date */}
                <View style={tw`flex-row justify-between items-center mt-1`}>
                  <View style={tw`flex-row items-center`}>
                    <Image style={tw`w-4 h-4`} source={Icon} />
                    <Text style={tw`text-[#454545] ml-1 text-sm`}>
                      78 Tampa, Florida
                    </Text>
                  </View>
                  <Text style={tw`text-[#454545] text-sm`}>07/04/2027</Text>
                </View>

                {/* Tags and Bookmark */}
                <View style={tw`flex-row justify-between items-center mt-2`}>
                  <View style={tw`flex-row gap-2`}>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Meal
                    </Text>
                    <Text style={tw`text-[12px] font-bold text-[#454545]`}>
                      Restaurant
                    </Text>
                  </View>
                  
                </View>
              </View>
            </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Recent;
