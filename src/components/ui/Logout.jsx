import { IconLogOut } from "@/assets/Icon";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import tw from "twrnc";

const Logout = () => {
  return (
    <View style={tw`flex-row items-center gap-2`}>
      <SvgXml xml={IconLogOut} />
      <Text style={tw` text-[#E53E3E]`}>Log out</Text>
    </View>
  );
};

export default Logout;
