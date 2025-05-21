import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { IconComment } from "@/assets/Icon";
import { TextInput } from "react-native-gesture-handler";
import RBSheet from "react-native-raw-bottom-sheet";
import { SvgXml } from "react-native-svg";
import tw from "../../lib/tailwind";

export default function ButtomSheet() {
  const bottomSheetRef = useRef();

  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  const [comment, setComment] = useState("");
  //   console.log(comment);

  // commment and  close buttom sheet
  const handleComment = () => {
    setComment("");
    bottomSheetRef.current.close();
  };
  // close buttom sheet
  const handlClose = () => {
    bottomSheetRef.current.close();
  };

  return (
    <SafeAreaView>
      <Pressable onPress={openBottomSheet}>
        <SvgXml xml={IconComment} />
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
        <View style={tw``}>
          <View style={tw` flex-row justify-between items-center`}>
            <Text style={tw`text-lg font-inter-700  py-3`}>Comment</Text>
            <Ionicons
              name="close"
              size={24}
              //   style={tw`mr-2 text-[#00C49A]`}
              color="#121212"
              onPress={handlClose}
            />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ height: 280 }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <View key={index}>
                {/* user info */}
                <View style={tw`flex-row items-start justify-between my-2 `}>
                  {/* Left: Avatar + Content */}
                  <View style={tw`flex-row flex-1`}>
                    <Image
                      source={{
                        uri: "https://randomuser.me/api/portraits/men/1.jpg",
                      }}
                      style={tw`w-10.5 h-10.5 rounded-full mr-3`}
                    />{" "}
                    <View style={tw`flex-1`}>
                      <Text style={tw` text-textgray font-inter-600 text-3`}>
                        Casey
                      </Text>
                      <Text
                        style={tw`text-textPrimary text-4 font-inter-400 mt-0.5`}
                      >
                        Its a nice food. Very tasty & sweet.
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

                  {/* Right: Delete Icon */}
                  <TouchableOpacity>
                    <AntDesign name="delete" size={16} color="#666" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
          {/* User Comment  */}
          <View style={tw`  `}>
            <View
              style={tw`flex-row justify-between items-center bg-[#F3F3F3] rounded-full mt-15 p-4`}
            >
              {/* Lock icon + Input */}
              <View style={tw`flex-row items-center flex-1`}>
                <Image
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/1.jpg",
                  }}
                  style={tw`w-6 h-6 rounded-full `}
                />

                <TextInput
                  style={tw`flex-1  text-textPrimary dark:text-white `}
                  placeholder="Write a comment...."
                  placeholderTextColor={"#121212"}
                  onChangeText={(text) => setComment(text)}
                />
              </View>

              {/* Eye icon */}
              <Ionicons
                name="send-sharp"
                size={20}
                //   style={tw`mr-2 text-[#00C49A]`}
                color="#ED6237"
                onPress={handleComment}
              />
            </View>
          </View>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
}
