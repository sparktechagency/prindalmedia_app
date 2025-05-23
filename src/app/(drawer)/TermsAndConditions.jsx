import { router } from "expo-router";
import { Text, View } from "react-native";
import BackButton from "../../components/ui/BackButton";
import tw from "../../lib/tailwind";

const TermsAndConditions = () => {
  return (
    <View style={tw`flex-1 bg-primaryBg`}>
      <BackButton
        onPress={() => {
          router?.back();
        }}
        title={"Terms & Conditions"}
      />

      <Text style={tw`px-4 leading-5 font-inter-400`}>
        Lorem ipsum dolor sit amet consectetur. Pretium aliquam diam sed neque
        purus. Sed risus et turpis laoreet aliquet facilisis. Viverra urna arcu
        faucibus at ut orci velit. Velit pellentesque lacus eu tortor eget
        cursus suspendisse imperdiet. Lorem ipsum dolor sit amet consectetur.
        Pretium aliquam diam sed neque purus. Sed risus et turpis laoreet
        aliquet facilisis. Viverra urna arcu faucibus at ut orci velit. Velit
        pellentesque lacus eu tortor eget cursus suspendisse imperdiet. Lorem
        ipsum dolor sit amet consectetur. Pretium aliquam diam sed neque purus.
        Sed risus et turpis laoreet aliquet facilisis. Viverra urna arcu
        faucibus at ut orci velit. Velit pellentesque lacus eu tortor eget
        cursus suspendisse imperdiet.
      </Text>
    </View>
  );
};

export default TermsAndConditions;
