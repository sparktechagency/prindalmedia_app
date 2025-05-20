import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import MapView from "../../components/ui/MapView";

const MapPge = () => {
  const navigate = useNavigation();

  const [searchText, setSearchText] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // console.log( 'view new locations ' ,selectedLocation?.name);
  // console.log( 'view new   {"lat": 23.7520933, "lng": 90.4246379} ' ,selectedLocation?.geometry?.location);

  const handleSearchLocation = async (query) => {
    // location data is null
    setSelectedLocation(null);
    // What the user types in the input field is being stored in state.
    setSearchText(query);

    // spaces not a valid data
    if (!query.trim()) {
      setLocationSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=AIzaSyARXa6r8AXKRaoeWqyesQNBI8Y3EUEWSnY`
      );
      setLocationSuggestions(response?.data?.results || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={tw` flex-1 p-[4%]`}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigate.goBack()}>
        <View style={tw`flex-row items-center gap-2 my-4`}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          <Text style={tw`text-4.2 text-[#121212] font-bold`}>
            Discover restaurants
          </Text>
        </View>
      </TouchableOpacity>

      {/* Search Section */}
      <View style={tw`flex-1`}>
        <Text style={tw`text-[16px] font-semibold text-[#121212] mb-2`}>
          Location
        </Text>
        <View style={tw` bg-[#e7e7e7] p-3 rounded-md flex-row items-center  `}>
          <EvilIcons name="search" size={24} color="#454545" />
          <TextInput
            placeholder="What’s the name of your dish/drink?"
            placeholderTextColor={"#454545"}
            onChangeText={(text) => handleSearchLocation(text)}
            value={searchText}
          />
        </View>

        {/* Suggestion List */}
        {locationSuggestions.length > 0 && (
          <FlatList
            data={locationSuggestions}
            keyExtractor={(item, index) => item.place_id || index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedLocation(item);
                  setSearchText(item.name);
                  setLocationSuggestions([]); // hide suggestions after selecting
                }}
              >
                <View style={tw`py-2 border-b border-gray-300`}>
                  <Text style={tw`font-bold text-black`}>{item.name}</Text>
                  <Text style={tw`text-gray-600`}>
                    {item.formatted_address}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyboardShouldPersistTaps="handled"
            ListEmptyComponent={
              <Text style={tw`text-gray-500 text-center mt-10`}>
                No location suggestions found.
              </Text>
            }
          />
        )}
      </View>
      {/*  */}
      <MapView />
    </View>
  );
};

export default MapPge;
