import { EvilIcons } from "@expo/vector-icons";
import axios from 'axios';
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import tw from "twrnc";
const Location = () => {
  const [locationSuggestions, setLocationSuggestions] = useState('');
  console.log(locationSuggestions);

  const {formatted_address}  = locationSuggestions;
  
  
  const handleSearchLocation = async (query) => {
    try {
        const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=AIzaSyARXa6r8AXKRaoeWqyesQNBI8Y3EUEWSnY`
      );
      // country scoope search
      // https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&region=IN&key=AIzaSyARXa6r8AXKRaoeWqyesQNBI8Y3EUEWSnY
      setLocationSuggestions(response?.data?.results);
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <View style={tw`flex-col gap-2`}>
        <Text style={tw`text-[16px] font-semibold text-[#121212]`}>Location</Text>
        <View
              style={tw` bg-[#e7e7e7] rounded-md flex-row items-center justify-between `}
            >
              <TextInput
                style={tw`px-4 py-4 flex-1 `}
                placeholder="What’s the name of your dish/drink?"
                placeholderTextColor={"#888888"}
                onChangeText={(text) => handleSearchLocation(text)}
              />
              <EvilIcons name="location" size={24} color="black" />
            </View>
        {/*  */}


        {/* <Text>{locationSuggestions}</Text> */}
        
      </View>
    </View>
  );
};

export default Location;
