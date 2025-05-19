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
import Logout from "./Logout";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <View style={tw`flex-row justify-between items-center my-5  bg-[#FDFFFE]`}>
      {/* Left - Hamburger and Logo */}
      <View style={tw`flex-row items-center`}>
        <TouchableOpacity onPress={() => setDrawerOpen(true)}>
          <Ionicons name="menu" size={28} style={tw`text-gray-800 mr-3`} />
        </TouchableOpacity>
        <Text style={tw`text-2xl font-bold text-[#4D4D4D]`}>Kalamari.</Text>
      </View>

      {/* Right - Icons and Avatar */}
      <View style={tw`flex-row items-center gap-2`}>
        <TouchableOpacity style={tw`p-2 rounded-full bg-[#3333331A]`}>
          <Link href={"/map"}>
            <Feather name="search" size={20} style={tw`text-gray-700`} />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={tw`p-2 rounded-full bg-[#3333331A]`}>
          <Link href={"/map"}>
            <Feather name="map" size={20} style={tw`text-gray-700`} />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={tw`p-2 rounded-full bg-[#3333331A]`}>
          <Link href={"/notifications"}>
            <Feather name="bell" size={20} style={tw`text-gray-700`} />
          </Link>
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
          style={tw` bg-black bg-opacity-40`}
          onPress={() => setDrawerOpen(false)}
        >
          <View
            style={tw`w-80.1 rounded-r-2xl flex-col gap-6 h-full bg-white py-20 px-6 justify-between`}
          >
            <View style={tw` flex-col gap-4`}>
              {/* tab Navigation */}
              {/* Left - Hamburger and Logo */}
              <View style={tw`flex-row items-center justify-between mb-10`}>
                <Text style={tw`text-9 font-bold text-[#121212]`}>
                  Kalamari.
                </Text>
                <TouchableOpacity onPress={() => setDrawerOpen(false)}>
                  <Ionicons
                    name="close"
                    size={24}
                    style={tw`text-gray-800 mr-3`}
                  />
                </TouchableOpacity>
              </View>
              {/* Navigation  */}

              <View style={tw` flex-col gap-6`}>
                <View style={tw` flex-col gap-4`}>
                  <Text
                    onPress={() => setDrawerOpen(false)}
                    style={tw`text-lg font-semibold `}
                  >
                    Navigation
                  </Text>
                  <View style={tw` flex-col gap-2`}>
                    <Text style={tw`mb-2 text-4 text-[#454545]`}> Home</Text>
                    <Link href={"/(drawer)/Post"}>
                      <Text style={tw`mb-2 text-4 text-[#454545]`}> Post</Text>
                    </Link>
                    <Link href={"/(drawer)/Bookmarks"}>
                      <Text style={tw`mb-2 text-4 text-[#454545]`}>
                        {" "}
                        Bookmarks
                      </Text>
                    </Link>
                    <Link href={"/(drawer)/Profile"}>
                      <Text style={tw`mb-2 text-4 text-[#454545]`}>
                        {" "}
                        Profile
                      </Text>
                    </Link>
                  </View>
                </View>
                {/* Account Navigation  */}
                <View style={tw` flex-col gap-4`}>
                  <Text style={tw`text-lg font-semibold `}>Account</Text>
                  <View style={tw` flex-col gap-2`}>
                    <Link href={"/(drawer)/ChangePassword"}>
                      <Text style={tw` text-4 text-[#454545]`}>
                        {" "}
                        Change password
                      </Text>
                    </Link>
                    <Link href={"/(drawer)/TermsAndConditions"}>
                      <Text style={tw`text-4 text-[#454545]`}>
                        {" "}
                        Terms & Conditions
                      </Text>
                    </Link>
                    <Link href={"/(drawer)/PrivacyPolicy"}>
                      <Text style={tw` text-4 text-[#454545]`}>
                        {" "}
                        Privacy policy
                      </Text>
                    </Link>
                  </View>
                </View>
              </View>
            </View>

            {/* Logout  */}

            <View>
              <Logout />
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Header;
