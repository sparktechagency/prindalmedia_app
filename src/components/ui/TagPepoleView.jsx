import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { Dialog, PanningProvider } from "react-native-ui-lib";
import tw from "twrnc";
import TagUser from "./TagUser";

const TagPepoleView = ({ isVisible, setIsVisible, setuserName }) => {
  return (
    <View>
      <Text>
        {/* Tag people */}
        <View
          style={tw`flex-row items-center w-41 justify-center gap-2 border-[1px] border-[#B0B0B0]  rounded-md  py-1.8  `}
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
      </Text>
    </View>
  );
};

export default TagPepoleView;
