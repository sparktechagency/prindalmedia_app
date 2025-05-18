import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Dialog, PanningProvider, RadioButton } from "react-native-ui-lib";
import tw from "twrnc";
import AddPhoto from "../../../components/ui/AddPhoto";
import Location from "../../../components/ui/Location";
import TagManager from "../../../components/ui/TagManager";
import TagUser from "../../../components/ui/TagUser";
import UserRating from "../../../components/ui/UserRating";

const Post = () => {
  const [restaurant, setRestaurant] = useState("");
  const [homeMade, setHomeMade] = useState("");
  const [meal, setMeal] = useState("");
  const [drink, setDrink] = useState("");
  const [userName, setuserName] = useState("");

  // console.log(restaurant, homeMade, meal, drink);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={tw`p-[4%] flex-1 bg-[#FDFFFE]`}>
      <Text style={tw` text-xl font-bold my-3 text-[#121212]`}>
        Share your meal
      </Text>

      {/* Login input  */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*  */}
        <View style={tw` flex-col justify-between gap-10`}>
          <View style={tw` w-full  gap-4 flex-col justify-between mt-3`}>
            {/* dish/drink  input */}
            <View style={tw`flex-col gap-2`}>
              <Text style={tw`text-[16px] font-semibold text-[#121212]`}>
                Meal Name
              </Text>
              <View style={tw`bg-[#F3F3F3] rounded-md `}>
                <TextInput
                  placeholder="What’s the name of your dish/drink?"
                  style={tw`px-4 py-4 `}
                  placeholderTextColor={"#888888"}
                />
              </View>
            </View>

            {/* Where did you have it? */}
            <View style={tw`gap-2`}>
              <Text style={tw`text-[16px] font-semibold text-[#121212]`}>
                Where did you have it?
              </Text>
              <View style={tw`flex-row gap-6`}>
                <RadioButton
                  label="Restaurant"
                  labelStyle={{ color: "#454545", fontWeight: "400" }}
                  selected={restaurant === "restaurant"}
                  onPress={() =>
                    setRestaurant(
                      restaurant === "restaurant" ? "" : "restaurant"
                    )
                  }
                  color="#B0B0B0"
                />

                <RadioButton
                  label="Home-Made"
                  labelStyle={{ color: "#454545", fontWeight: "400" }}
                  selected={homeMade === "home-made"}
                  onPress={() =>
                    setHomeMade(homeMade === "home-made" ? "" : "home-made")
                  }
                  color="#B0B0B0"
                />
              </View>
            </View>

            {/* Food type? */}
            <View style={tw` gap-2`}>
              <Text style={tw`text-[16px] font-semibold text-[#121212]`}>
                Food type?
              </Text>
              <View style={tw` flex-row gap-2`}>
                <View style={tw` flex-row gap-6`}>
                  <RadioButton
                    label="Meal"
                    labelStyle={{ color: "#454545", fontWeight: "400" }}
                    selected={meal === "meal"}
                    onPress={() => setMeal(meal === "meal" ? "" : "meal")}
                    color="#B0B0B0"
                  />

                  <RadioButton
                    label="Drink"
                    labelStyle={{ color: "#454545", fontWeight: "400" }}
                    selected={drink === "drink"}
                    onPress={() => setDrink(drink === "drink" ? "" : "drink")}
                    color="#B0B0B0"
                  />
                </View>
              </View>
            </View>

            {/* Location */}
            <View>
              <Location />
            </View>

            {/* Description */}
            <View style={tw`flex-col gap-2 `}>
              <Text style={tw`text-[16px] font-semibold text-[#121212]`}>
                Description
              </Text>
              <View style={tw`bg-[#F3F3F3] rounded-[8px] `}>
                <TextInput
                  style={tw`h-30 top-0 px-4 w-full  flex items-start `}
                  placeholder="What’s the name of your dish/drink?"
                  multiline
                  numberOfLines={6}
                  verticalAlign="top"
                  textAlignVertical="top"
                  textAlign="left"
                  placeholderTextColor={"#888888"}
                />
              </View>
            </View>

            {/* user rating  */}
            <View style={tw``}>
              <UserRating />
            </View>

            <View>
              <TagManager newTag={userName} />
            </View>

            {/* add Photo  */}
            <View style={tw`flex-row items-center gap-4 rounded-md `}>
              <View>
                <AddPhoto />
              </View>
              {/* Tag people */}
              <View
                style={tw`flex-row items-center justify-center gap-1.5 border-[1px] border-[#B0B0B0] w-[50%] py-1.8  rounded-md `}
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
                  <Text style={tw`text-[16px] font-bold text-[#121212] `}>
                    Tag people
                  </Text>
                </TouchableOpacity>

                {/* tag dilog box */}
                <Dialog
                  visible={isVisible}
                  onDismiss={() => setIsVisible(false)}
                  panDirection={PanningProvider.Directions.DOWN}
                >
                  {/*  view tag user  */}
                  <View>
                    <TagUser
                      close={() => setIsVisible(false)}
                      setuserName={setuserName}
                    />
                  </View>
                </Dialog>
              </View>
            </View>
          </View>
          {/*  */}
          <View>
            {/* add post button */}
            <View style={tw` items-center justify-center flex-row  `}>
              <Pressable
                style={tw` items-center justify-center flex-row bg-black px-9 py-3 rounded-full `}
              >
                <Text
                  style={tw`  text-white  flex items-center justify-center font-bold text-[16px]   `}
                >
                  Post
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Post;
