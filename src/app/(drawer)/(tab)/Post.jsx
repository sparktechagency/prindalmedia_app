import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import tw from "twrnc";
import AddPhoto from "../../../components/ui/AddPhoto";
import TagUser from "../../../components/ui/TagUser";
import UserRating from "../../../components/ui/UserRating";
import { Dialog, PanningProvider, RadioButton } from "react-native-ui-lib";
import { MaterialIcons } from "@expo/vector-icons";
import Location from "../../../components/ui/Location";

const restaurant = [
  { label: "Restaurant", value: "restaurant" },
  { label: "Home-Made", value: "home-made" },
];
const food_props = [
  { label: "Meal", value: "meal" },
  { label: "Drink", value: "drink" },
];

const Post = () => {
  const [value, setValue] = useState("");
  const [meal, setMeal] = useState("");
  // console.log(meal);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <SafeAreaView style={tw`p-[6%]`}>
      <Text style={tw` text-2xl font-medium`}>Share your meal</Text>

      {/* Login input  */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw` w-full  gap-6 flex-col justify-between mt-3`}>
          {/* dish/drink  input */}
          <View style={tw`flex-col gap-2`}>
            <Text style={tw`text-lg font-medium`}>Email</Text>
            <View style={tw`bg-[#e7e7e7] rounded-md `}>
              <TextInput
                placeholder="What’s the name of your dish/drink?"
                style={tw`px-4 py-4.5 `}
                placeholderTextColor={"black"}
              />
            </View>
          </View>
          {/* Where did you have it? */}
          <View style={tw` gap-2`}>
            <Text style={tw`text-lg font-medium`}>Where did you have it?</Text>
            <View style={tw` flex-row gap-6`}>
              <TouchableOpacity>
                <RadioButton
                  label="Restaurant"
                  labelStyle={{ color: "#454545", fontWeight: "400" }}
                  selected={value}
                  onPress={() => setValue(!value)}
                  color="#B0B0B0"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <RadioButton
                  label="Home-Made"
                  labelStyle={{ color: "#454545", fontWeight: "400" }}
                  selected={value}
                  onPress={() => setValue(!value)}
                  color="#B0B0B0"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Food type? */}
          <View style={tw` gap-2`}>
            <Text style={tw`text-lg font-medium`}>Food type?</Text>
            <View style={tw` flex-row gap-2`}>
              <View style={tw` flex-row gap-6`}>
                <TouchableOpacity>
                  <RadioButton
                    label="Meal"
                    labelStyle={{ color: "#454545", fontWeight: "400" }}
                    selected={value}
                    onPress={() => setValue(!value)}
                    color="#B0B0B0"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <RadioButton
                    label="Drink"
                    labelStyle={{ color: "#454545", fontWeight: "400" }}
                    selected={value}
                    onPress={() => setValue(!value)}
                    color="#B0B0B0"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Location */}
          <View>
            <Location />
          </View>

          {/* Description */}
          <View style={tw`flex-col gap-2 `}>
            <Text style={tw`text-lg font-medium`}>Description</Text>
            <View style={tw`bg-[#e7e7e7] rounded-[8gpx] `}>
              <TextInput
                style={tw`h-30 top-0 px-4 w-full  flex items-start `}
                placeholder="What’s the name of your dish/drink?"
                multiline
                numberOfLines={6}
                verticalAlign="top"
                textAlignVertical="top"
                textAlign="left"
                placeholderTextColor={"black"}
              />
            </View>
          </View>

          <View style={tw``}>
            <UserRating />
          </View>

          {/* add Photo  */}
          <View style={tw`flex-row items-center gap-3 rounded-md `}>
            <View>
              <AddPhoto />
            </View>
            {/* Tag people */}
            <View
              style={tw`flex-row items-center gap-1.5 border-[1px] border-[#B0B0B0] px-6 py-1.8  rounded-md `}
            >
              <TouchableOpacity
                style={tw`  flex-row  items-center gap-1.5`}
                onPress={() => setIsVisible(true)}
              >
                <View style={tw` `}>
                  <MaterialIcons
                    name="add-photo-alternate"
                    size={20}
                    color="#B0B0B0"
                  />
                </View>
                <Text style={tw`text-lg font-medium`}>Add photo</Text>
              </TouchableOpacity>

              <Dialog
                visible={isVisible}
                onDismiss={() => setIsVisible(false)}
                panDirection={PanningProvider.Directions.DOWN}
              >
                <View>
                  <TagUser close={() => setIsVisible(false)} />
                </View>
              </Dialog>
            </View>
          </View>

          {/* add post button */}
          <View style={tw` items-center justify-center flex-row mb-5 `}>
            <Pressable
              style={tw` items-center justify-center flex-row bg-black w-30 rounded-full `}
            >
              <Text
                style={tw`  text-white  flex items-center justify-center py-3 font-medium text-lg    `}
              >
                Post
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Post;
