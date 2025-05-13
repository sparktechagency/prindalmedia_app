import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import tw from "twrnc";
import { ScrollView } from "react-native";

const Bookmarks = () => {
  return (
    <View style={tw`p-[5%] `} >
      <Text style={tw`text-xl font-semibold my-4`}>Bookmarks</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* bookMark full content wrapper  */}
        <View style={tw`flex-cols gap-1 mt-5 mb-10  justify-between items-center`}>
          <View style={tw`flex-row  items-center`}>
            {/* Image */}
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
              }}
              style={tw`w-16 h-16 rounded-[8px]`}
            />

            {/* Content */}
            <View style={tw`flex-1 px-3`}>
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
                  <Feather name="map-pin" size={14} color="gray" />
                  <Text style={tw`text-gray-500 ml-1 text-sm`}>
                    78 Tampa, Florida
                  </Text>
                </View>
                <Text style={tw`text-gray-400 text-sm`}>07/04/2027</Text>
              </View>

              {/* Tags and Bookmark */}
              <View style={tw`flex-row justify-between items-center mt-2`}>
                <View style={tw`flex-row`}>
                  <Text style={tw`text-sm text-gray-700 mr-3`}>Meal</Text>
                  <Text style={tw`text-sm text-gray-700`}>Restaurant</Text>
                </View>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="bookmark"
                    size={20}
                    color="#007AFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* bookMark full content wrapper  */}
          <View style={tw`flex-row  m-2 items-center`}>
            {/* Image */}
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
              }}
              style={tw`w-16 h-16 rounded-lg`}
            />

            {/* Content */}
            <View style={tw`flex-1 px-3`}>
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
                  <Feather name="map-pin" size={14} color="gray" />
                  <Text style={tw`text-gray-500 ml-1 text-sm`}>
                    78 Tampa, Florida
                  </Text>
                </View>
                <Text style={tw`text-gray-400 text-sm`}>07/04/2027</Text>
              </View>

              {/* Tags and Bookmark */}
              <View style={tw`flex-row justify-between items-center mt-2`}>
                <View style={tw`flex-row`}>
                  <Text style={tw`text-sm text-gray-700 mr-3`}>Meal</Text>
                  <Text style={tw`text-sm text-gray-700`}>Restaurant</Text>
                </View>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="bookmark"
                    size={20}
                    color="#007AFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* bookMark full content wrapper  */}
          <View style={tw`flex-row  m-2 items-center`}>
            {/* Image */}
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
              }}
              style={tw`w-16 h-16 rounded-lg`}
            />

            {/* Content */}
            <View style={tw`flex-1 px-3`}>
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
                  <Feather name="map-pin" size={14} color="gray" />
                  <Text style={tw`text-gray-500 ml-1 text-sm`}>
                    78 Tampa, Florida
                  </Text>
                </View>
                <Text style={tw`text-gray-400 text-sm`}>07/04/2027</Text>
              </View>

              {/* Tags and Bookmark */}
              <View style={tw`flex-row justify-between items-center mt-2`}>
                <View style={tw`flex-row`}>
                  <Text style={tw`text-sm text-gray-700 mr-3`}>Meal</Text>
                  <Text style={tw`text-sm text-gray-700`}>Restaurant</Text>
                </View>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="bookmark"
                    size={20}
                    color="#007AFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* bookMark full content wrapper  */}
          <View style={tw`flex-row  m-2 items-center`}>
            {/* Image */}
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
              }}
              style={tw`w-16 h-16 rounded-lg`}
            />

            {/* Content */}
            <View style={tw`flex-1 px-3`}>
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
                  <Feather name="map-pin" size={14} color="gray" />
                  <Text style={tw`text-gray-500 ml-1 text-sm`}>
                    78 Tampa, Florida
                  </Text>
                </View>
                <Text style={tw`text-gray-400 text-sm`}>07/04/2027</Text>
              </View>

              {/* Tags and Bookmark */}
              <View style={tw`flex-row justify-between items-center mt-2`}>
                <View style={tw`flex-row`}>
                  <Text style={tw`text-sm text-gray-700 mr-3`}>Meal</Text>
                  <Text style={tw`text-sm text-gray-700`}>Restaurant</Text>
                </View>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="bookmark"
                    size={20}
                    color="#007AFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* bookMark full content wrapper  */}
          <View style={tw`flex-row  m-2 items-center`}>
            {/* Image */}
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
              }}
              style={tw`w-16 h-16 rounded-lg`}
            />

            {/* Content */}
            <View style={tw`flex-1 px-3`}>
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
                  <Feather name="map-pin" size={14} color="gray" />
                  <Text style={tw`text-gray-500 ml-1 text-sm`}>
                    78 Tampa, Florida
                  </Text>
                </View>
                <Text style={tw`text-gray-400 text-sm`}>07/04/2027</Text>
              </View>

              {/* Tags and Bookmark */}
              <View style={tw`flex-row justify-between items-center mt-2`}>
                <View style={tw`flex-row`}>
                  <Text style={tw`text-sm text-gray-700 mr-3`}>Meal</Text>
                  <Text style={tw`text-sm text-gray-700`}>Restaurant</Text>
                </View>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="bookmark"
                    size={20}
                    color="#007AFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* bookMark full content wrapper  */}
          <View style={tw`flex-row  m-2 items-center`}>
            {/* Image */}
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
              }}
              style={tw`w-16 h-16 rounded-lg`}
            />

            {/* Content */}
            <View style={tw`flex-1 px-3`}>
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
                  <Feather name="map-pin" size={14} color="gray" />
                  <Text style={tw`text-gray-500 ml-1 text-sm`}>
                    78 Tampa, Florida
                  </Text>
                </View>
                <Text style={tw`text-gray-400 text-sm`}>07/04/2027</Text>
              </View>

              {/* Tags and Bookmark */}
              <View style={tw`flex-row justify-between items-center mt-2`}>
                <View style={tw`flex-row`}>
                  <Text style={tw`text-sm text-gray-700 mr-3`}>Meal</Text>
                  <Text style={tw`text-sm text-gray-700`}>Restaurant</Text>
                </View>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="bookmark"
                    size={20}
                    color="#007AFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* bookMark full content wrapper  */}
          <View style={tw`flex-row  m-2 items-center`}>
            {/* Image */}
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
              }}
              style={tw`w-16 h-16 rounded-lg`}
            />

            {/* Content */}
            <View style={tw`flex-1 px-3`}>
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
                  <Feather name="map-pin" size={14} color="gray" />
                  <Text style={tw`text-gray-500 ml-1 text-sm`}>
                    78 Tampa, Florida
                  </Text>
                </View>
                <Text style={tw`text-gray-400 text-sm`}>07/04/2027</Text>
              </View>

              {/* Tags and Bookmark */}
              <View style={tw`flex-row justify-between items-center mt-2`}>
                <View style={tw`flex-row`}>
                  <Text style={tw`text-sm text-gray-700 mr-3`}>Meal</Text>
                  <Text style={tw`text-sm text-gray-700`}>Restaurant</Text>
                </View>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="bookmark"
                    size={20}
                    color="#007AFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* bookMark full content wrapper  */}
          <View style={tw`flex-row  m-2 items-center`}>
            {/* Image */}
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
              }}
              style={tw`w-16 h-16 rounded-lg`}
            />

            {/* Content */}
            <View style={tw`flex-1 px-3`}>
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
                  <Feather name="map-pin" size={14} color="gray" />
                  <Text style={tw`text-gray-500 ml-1 text-sm`}>
                    78 Tampa, Florida
                  </Text>
                </View>
                <Text style={tw`text-gray-400 text-sm`}>07/04/2027</Text>
              </View>

              {/* Tags and Bookmark */}
              <View style={tw`flex-row justify-between items-center mt-2`}>
                <View style={tw`flex-row`}>
                  <Text style={tw`text-sm text-gray-700 mr-3`}>Meal</Text>
                  <Text style={tw`text-sm text-gray-700`}>Restaurant</Text>
                </View>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="bookmark"
                    size={20}
                    color="#007AFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* bookMark full content wrapper  */}
          <View style={tw`flex-row  m-2 items-center`}>
            {/* Image */}
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
              }}
              style={tw`w-16 h-16 rounded-lg`}
            />

            {/* Content */}
            <View style={tw`flex-1 px-3`}>
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
                  <Feather name="map-pin" size={14} color="gray" />
                  <Text style={tw`text-gray-500 ml-1 text-sm`}>
                    78 Tampa, Florida
                  </Text>
                </View>
                <Text style={tw`text-gray-400 text-sm`}>07/04/2027</Text>
              </View>

              {/* Tags and Bookmark */}
              <View style={tw`flex-row justify-between items-center mt-2`}>
                <View style={tw`flex-row`}>
                  <Text style={tw`text-sm text-gray-700 mr-3`}>Meal</Text>
                  <Text style={tw`text-sm text-gray-700`}>Restaurant</Text>
                </View>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="bookmark"
                    size={20}
                    color="#007AFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* bookMark full content wrapper  */}
          <View style={tw`flex-row  m-2 items-center`}>
            {/* Image */}
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
              }}
              style={tw`w-16 h-16 rounded-lg`}
            />

            {/* Content */}
            <View style={tw`flex-1 px-3`}>
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
                  <Feather name="map-pin" size={14} color="gray" />
                  <Text style={tw`text-gray-500 ml-1 text-sm`}>
                    78 Tampa, Florida
                  </Text>
                </View>
                <Text style={tw`text-gray-400 text-sm`}>07/04/2027</Text>
              </View>

              {/* Tags and Bookmark */}
              <View style={tw`flex-row justify-between items-center mt-2`}>
                <View style={tw`flex-row`}>
                  <Text style={tw`text-sm text-gray-700 mr-3`}>Meal</Text>
                  <Text style={tw`text-sm text-gray-700`}>Restaurant</Text>
                </View>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="bookmark"
                    size={20}
                    color="#007AFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* bookMark full content wrapper  */}
          <View style={tw`flex-row  m-2 items-center`}>
            {/* Image */}
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
              }}
              style={tw`w-16 h-16 rounded-lg`}
            />

            {/* Content */}
            <View style={tw`flex-1 px-3`}>
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
                  <Feather name="map-pin" size={14} color="gray" />
                  <Text style={tw`text-gray-500 ml-1 text-sm`}>
                    78 Tampa, Florida
                  </Text>
                </View>
                <Text style={tw`text-gray-400 text-sm`}>07/04/2027</Text>
              </View>

              {/* Tags and Bookmark */}
              <View style={tw`flex-row justify-between items-center mt-2`}>
                <View style={tw`flex-row`}>
                  <Text style={tw`text-sm text-gray-700 mr-3`}>Meal</Text>
                  <Text style={tw`text-sm text-gray-700`}>Restaurant</Text>
                </View>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="bookmark"
                    size={20}
                    color="#007AFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* bookMark full content wrapper  */}
          <View style={tw`flex-row  m-2 items-center`}>
            {/* Image */}
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
              }}
              style={tw`w-16 h-16 rounded-lg`}
            />

            {/* Content */}
            <View style={tw`flex-1 px-3`}>
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
                  <Feather name="map-pin" size={14} color="gray" />
                  <Text style={tw`text-gray-500 ml-1 text-sm`}>
                    78 Tampa, Florida
                  </Text>
                </View>
                <Text style={tw`text-gray-400 text-sm`}>07/04/2027</Text>
              </View>

              {/* Tags and Bookmark */}
              <View style={tw`flex-row justify-between items-center mt-2`}>
                <View style={tw`flex-row`}>
                  <Text style={tw`text-sm text-gray-700 mr-3`}>Meal</Text>
                  <Text style={tw`text-sm text-gray-700`}>Restaurant</Text>
                </View>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="bookmark"
                    size={20}
                    color="#007AFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* bookMark full content wrapper  */}
          <View style={tw`flex-row  m-2 items-center`}>
            {/* Image */}
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
              }}
              style={tw`w-16 h-16 rounded-lg`}
            />

            {/* Content */}
            <View style={tw`flex-1 px-3`}>
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
                  <Feather name="map-pin" size={14} color="gray" />
                  <Text style={tw`text-gray-500 ml-1 text-sm`}>
                    78 Tampa, Florida
                  </Text>
                </View>
                <Text style={tw`text-gray-400 text-sm`}>07/04/2027</Text>
              </View>

              {/* Tags and Bookmark */}
              <View style={tw`flex-row justify-between items-center mt-2`}>
                <View style={tw`flex-row`}>
                  <Text style={tw`text-sm text-gray-700 mr-3`}>Meal</Text>
                  <Text style={tw`text-sm text-gray-700`}>Restaurant</Text>
                </View>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="bookmark"
                    size={20}
                    color="#007AFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Bookmarks;
