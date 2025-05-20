import { Text, View } from "react-native";
import { RadioButton } from "react-native-ui-lib";
import tw from "../../lib/tailwind";

const SelectRadioButton = ({
  setSelectedOption,
  selectedOption,
  setSelectedOptionFood,
  selectedOptionFood,
}) => {
  return (
    <View style={tw`flex-col  gap-4`}>
      <View style={tw`gap-2`}>
        <Text style={tw`text-[16px] font-inter-600 text-[#121212]`}>
          Where did you have it?
        </Text>
        <View style={tw`flex-row gap-6`}>
          <RadioButton
            label="Restaurant"
            labelStyle={{ color: "#454545", fontWeight: "400" }}
            selected={selectedOption === "restaurant"}
            onPress={() => setSelectedOption("restaurant")}
            color="#B0B0B0"
          />

          <RadioButton
            label="Home-Made"
            labelStyle={{ color: "#454545", fontWeight: "400" }}
            selected={selectedOption === "home-made"}
            onPress={() => setSelectedOption("home-made")}
            color="#B0B0B0"
          />
        </View>
      </View>
      <View style={tw`gap-2`}>
        <Text style={tw`text-[16px] font-inter-600 text-[#121212`}>
          Food type?
        </Text>
        <View style={tw`flex-row gap-2`}>
          <View style={tw`flex-row gap-6`}>
            <RadioButton
              label="Meal"
              labelStyle={{ color: "#454545", fontWeight: "400" }}
              selected={selectedOptionFood === "meal"}
              onPress={() => setSelectedOptionFood("meal")}
              color="#B0B0B0"
            />

            <RadioButton
              label="Drink"
              labelStyle={{ color: "#454545", fontWeight: "400" }}
              selected={selectedOptionFood === "drink"}
              onPress={() => setSelectedOptionFood("drink")}
              color="#B0B0B0"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectRadioButton;
