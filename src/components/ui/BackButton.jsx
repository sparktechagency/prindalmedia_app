import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "../../lib/tailwind";

const BackButton = ({ title }) => {
  const navigate = useNavigation();

  return (
    <View style={tw`px-[4%] pt-4  mb-6`}>
      <TouchableOpacity onPress={() => navigate.goBack()}>
        <View style={tw`flex-row items-center gap-2 my-4`}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          <Text style={tw`text-5 text-[#121212] font-inter-700`}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
