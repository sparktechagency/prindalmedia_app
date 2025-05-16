import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

const TermsAndConditions = () => {
    const navigate = useNavigation();

  return (
    <View>
       <View style={tw`p-[6%] `}>
        <TouchableOpacity onPress={() => navigate.goBack()}>
        <View style={tw`flex-row items-center gap-2 my-4`}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          <Text style={tw`text-4.2 text-[#121212] font-bold`}>
            Terms & Conditions
          </Text>
        </View>
      </TouchableOpacity>
      <Text style={tw``}>
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
    </View>
  )
}

export default TermsAndConditions