import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

const MapPage = () => {
  const navigate = useNavigation();
  return (
    <View style={tw`p-[4%]`}>
      <TouchableOpacity onPress={() => navigate.goBack()}>
        <View style={tw`flex-row items-center gap-2 my-4`}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          <Text style={tw`text-4.2 text-[#121212] font-bold`}>
            Discover restaurants
          </Text>
        </View>
      </TouchableOpacity>

      <View style={tw`flex-col gap-6 justify-center`}>
        <Text style={tw`text-[16px] font-semibold text-[#121212]`}>
          Location
        </Text>
        <View style={tw` bg-[#e7e7e7] p-3 rounded-md flex-row items-center  `}>
          <EvilIcons name="search" size={24} color="#454545" />
          <TextInput
            placeholder="What’s the name of your dish/drink?"
            placeholderTextColor={"#454545"}
            // onChangeText={(text) => handleSearchLocation(text)}
          />
        </View>
        {/*  */}

        {/* <Text>{locationSuggestions}</Text> */}
      </View>
    </View>
  );
};

export default MapPage;
