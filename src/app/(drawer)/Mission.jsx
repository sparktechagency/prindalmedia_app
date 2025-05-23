import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
const Mission = () => {
  return (
    <View style={tw`p-[6%] `}>
      <TouchableOpacity
        onPress={() => {
          router?.back();
        }}
      >
        <View style={tw`flex-row items-center gap-2 my-4`}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          <Text style={tw`text-4.2 text-[#121212] font-bold`}>
            Privacy policy
          </Text>
        </View>
      </TouchableOpacity>
      <Text style={tw` leading-5`}>
        Great food can be found everywhere — from fine dining rooms to
        late-night takeout, home-cooked meals to street food gems. But what
        truly makes a meal memorable isn’t just the taste — it’s the people you
        share it with.At our core, we believe food is a way to connect. A way to
        tell stories, pass down traditions, and bring people closer.That’s why
        we built this app — to help you share your taste and capture the stories
        that come with every bite.
      </Text>
    </View>
  );
};

export default Mission;
