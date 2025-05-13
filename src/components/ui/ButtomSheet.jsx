import { AntDesign, Feather, FontAwesome6 } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { Image } from "react-native";
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import RBSheet from "react-native-raw-bottom-sheet";
import tw from "twrnc";
export default function ButtomSheet() {
  const bottomSheetRef = useRef();

  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  const [comment, setComment] = useState('');
//   console.log(comment);

  // close buttom sheet 
  const handleComment = () => {
    setComment('')
    bottomSheetRef.current.close();
  }

  return (
    <SafeAreaView>
      <Pressable onPress={openBottomSheet}>
        <FontAwesome6 name="message" size={14} color="black" />
      </Pressable>

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
            paddingStart: 20,
            paddingEnd: 20,
          },
        }}
      >
        <View style={tw`text-lg font-medium py-3`}>
          <Text style={tw`text-lg font-medium py-3`}>Comment</Text>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ height: 280 }}
          >
            {/* user info */}
            <View style={tw`flex-row items-start justify-between p-3 `}>
              {/* Left: Avatar + Content */}
              <View style={tw`flex-row flex-1`}>
                <Image
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/1.jpg",
                  }}
                  style={tw`w-10 h-10 rounded-full mr-3`}
                />
                <View style={tw`flex-1`}>
                  <Text style={tw`font-bold text-black`}>Casey</Text>
                  <Text style={tw`text-black text-sm mt-0.5`}>
                    Its a nice food. Very tasty & sweet.
                  </Text>
                  <View style={tw`flex-row mt-1`}>
                    <TouchableOpacity>
                      <Text style={tw`text-gray-500 text-xs mr-4`}>Reply</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={tw`text-gray-500 text-xs`}>Like</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Right: Delete Icon */}
              <TouchableOpacity>
                <AntDesign name="delete" size={16} color="#666" />
              </TouchableOpacity>
            </View>
            {/* user info */}
            <View style={tw`flex-row items-start justify-between p-3 `}>
              {/* Left: Avatar + Content */}
              <View style={tw`flex-row flex-1`}>
                <Image
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/1.jpg",
                  }}
                  style={tw`w-10 h-10 rounded-full mr-3`}
                />
                <View style={tw`flex-1`}>
                  <Text style={tw`font-bold text-black`}>Casey</Text>
                  <Text style={tw`text-black text-sm mt-0.5`}>
                    Its a nice food. Very tasty & sweet.
                  </Text>
                  <View style={tw`flex-row mt-1`}>
                    <TouchableOpacity>
                      <Text style={tw`text-gray-500 text-xs mr-4`}>Reply</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={tw`text-gray-500 text-xs`}>Like</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Right: Delete Icon */}
              <TouchableOpacity>
                <AntDesign name="delete" size={16} color="#666" />
              </TouchableOpacity>
            </View>
            {/* user info */}
            <View style={tw`flex-row items-start justify-between p-3 `}>
              {/* Left: Avatar + Content */}
              <View style={tw`flex-row flex-1`}>
                <Image
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/1.jpg",
                  }}
                  style={tw`w-10 h-10 rounded-full mr-3`}
                />
                <View style={tw`flex-1`}>
                  <Text style={tw`font-bold text-black`}>Casey</Text>
                  <Text style={tw`text-black text-sm mt-0.5`}>
                    Its a nice food. Very tasty & sweet.
                  </Text>
                  <View style={tw`flex-row mt-1`}>
                    <TouchableOpacity>
                      <Text style={tw`text-gray-500 text-xs mr-4`}>Reply</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={tw`text-gray-500 text-xs`}>Like</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Right: Delete Icon */}
              <TouchableOpacity>
                <AntDesign name="delete" size={16} color="#666" />
              </TouchableOpacity>
            </View>
            {/* user info */}
            <View style={tw`flex-row items-start justify-between p-3 `}>
              {/* Left: Avatar + Content */}
              <View style={tw`flex-row flex-1`}>
                <Image
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/1.jpg",
                  }}
                  style={tw`w-10 h-10 rounded-full mr-3`}
                />
                <View style={tw`flex-1`}>
                  <Text style={tw`font-bold text-black`}>Casey</Text>
                  <Text style={tw`text-black text-sm mt-0.5`}>
                    Its a nice food. Very tasty & sweet.
                  </Text>
                  <View style={tw`flex-row mt-1`}>
                    <TouchableOpacity>
                      <Text style={tw`text-gray-500 text-xs mr-4`}>Reply</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={tw`text-gray-500 text-xs`}>Like</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Right: Delete Icon */}
              <TouchableOpacity>
                <AntDesign name="delete" size={16} color="#666" />
              </TouchableOpacity>
            </View>
            {/* user info */}
            <View style={tw`flex-row items-start justify-between p-3 `}>
              {/* Left: Avatar + Content */}
              <View style={tw`flex-row flex-1`}>
                <Image
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/1.jpg",
                  }}
                  style={tw`w-10 h-10 rounded-full mr-3`}
                />
                <View style={tw`flex-1`}>
                  <Text style={tw`font-bold text-black`}>Casey</Text>
                  <Text style={tw`text-black text-sm mt-0.5`}>
                    Its a nice food. Very tasty & sweet.
                  </Text>
                  <View style={tw`flex-row mt-1`}>
                    <TouchableOpacity>
                      <Text style={tw`text-gray-500 text-xs mr-4`}>Reply</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={tw`text-gray-500 text-xs`}>Like</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Right: Delete Icon */}
              <TouchableOpacity>
                <AntDesign name="delete" size={16} color="#666" />
              </TouchableOpacity>
            </View>
            {/* user info */}
            <View style={tw`flex-row items-start justify-between p-3 `}>
              {/* Left: Avatar + Content */}
              <View style={tw`flex-row flex-1`}>
                <Image
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/1.jpg",
                  }}
                  style={tw`w-10 h-10 rounded-full mr-3`}
                />
                <View style={tw`flex-1`}>
                  <Text style={tw`font-bold text-black`}>Casey</Text>
                  <Text style={tw`text-black text-sm mt-0.5`}>
                    Its a nice food. Very tasty & sweet.
                  </Text>
                  <View style={tw`flex-row mt-1`}>
                    <TouchableOpacity>
                      <Text style={tw`text-gray-500 text-xs mr-4`}>Reply</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={tw`text-gray-500 text-xs`}>Like</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Right: Delete Icon */}
              <TouchableOpacity>
                <AntDesign name="delete" size={16} color="#666" />
              </TouchableOpacity>
            </View>
          </ScrollView>
          {/* User Comment  */}
          <View style={tw` w-full flex-col gap-3 my-4`}>
            <View
              style={tw`flex-row justify-between items-center bg-[#F3F3F3] rounded-[16] px-4 py-1.2`}
            >
              {/* Lock icon + Input */}
              <View style={tw`flex-row items-center flex-1`}>
                <AntDesign
                  style={tw`mr-2 text-[#888888]`}
                  name="user"
                  size={20}
                  color="black"
                />

                <TextInput
                  style={tw`flex-1 text-lg text-black dark:text-white `}
                  placeholder="Add a comment.."
                  onChangeText={(text) => setComment(text)}
                />
              </View>

              {/* Eye icon */}
              <Feather
                name="send"
                size={20}
                style={tw`mr-2 text-[#00C49A]`}
                color="black"
                onPress={handleComment}
              />
            </View>
          </View>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
}
