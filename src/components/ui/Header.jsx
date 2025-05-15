import { Feather, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <View
      style={tw`flex-row justify-between items-center px-4 py-1.5 bg-white`}
    >
      {/* Left - Hamburger and Logo */}
      <View style={tw`flex-row items-center`}>
        <TouchableOpacity onPress={() => setDrawerOpen(true)}>
          <Ionicons name="menu" size={28} style={tw`text-gray-800 mr-3`} />
        </TouchableOpacity>
        <Text style={tw`text-xl font-bold text-gray-800`}>Kalamari.</Text>
      </View>

      {/* Right - Icons and Avatar */}
      <View style={tw`flex-row items-center space-x-3 gap-2`}>
        <TouchableOpacity style={tw`p-2 rounded-full bg-gray-100`}>
          <Link href={"/map"}>
            <Feather name="search" size={20} style={tw`text-gray-700`} />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={tw`p-2 rounded-full bg-gray-100`}>
          <Link href={"/map"}>
            <Feather name="map" size={20} style={tw`text-gray-700`} />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={tw`p-2 rounded-full bg-gray-100`}>
          <Feather name="bell" size={20} style={tw`text-gray-700`} />
        </TouchableOpacity>
        <Link href={"(tab)/Profile"}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }}
            style={tw`w-8 h-8 rounded-full`}
          />
        </Link>
      </View>

      {/* Drawer (Mock) */}
      <Modal transparent visible={drawerOpen}>
        <Pressable
          style={tw`flex-1 bg-black bg-opacity-40`}
          onPress={() => setDrawerOpen(false)}
        >
          <View style={tw`w-64 rounded-r-2xl flex-col gap-6 h-full bg-white p-5`}>
            {/* tab Navigation */}
            <View>
              <Text style={tw`text-lg text-[#454545] font-semibold mb-4`}>Navigation</Text>
              <Text style={tw`mb-2 text-gray-800`}> Dashboard</Text>
              <Text style={tw`mb-2 text-gray-800`}> Profile</Text>
              <Text style={tw`mb-2 text-gray-800`}> Settings</Text>
              <Text style={tw`mb-2 text-gray-800`}> Logout</Text>
            </View>
            {/* Account Navigation  */}
            <View>
              <Text style={tw`text-lg font-semibold mb-4`}>Account</Text>
              <Text style={tw`mb-2 text-gray-800`}> Change password</Text>
              <Text style={tw`mb-2 text-gray-800`}> Terms & Conditions</Text>
              <Text style={tw`mb-2 text-gray-800`}> Privacy policy</Text>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Header;
