import {
  IconClose,
  IconConditions,
  IconDHome,
  IconDPost,
  IconMap,
  IconMenu,
  IconMission,
  IconNotifi,
  IconPass,
  IconPrivacy,
  IconProfile,
  IconSearch,
  IconSideBookMark,
} from "@/assets/Icon";
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
import { SvgXml } from "react-native-svg";
import tw from "../../lib/tailwind";
import Logout from "./Logout";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <View style={tw`flex-row justify-between items-center my-5  bg-[#FDFFFE]`}>
      {/* Left - Hamburger and Logo */}
      <View style={tw`flex-row gap-2 items-center`}>
        <TouchableOpacity onPress={() => setDrawerOpen(true)}>
          <SvgXml xml={IconMenu} />
        </TouchableOpacity>
        <Text style={tw`text-2xl font-bold text-[#4D4D4D]`}>Kalamari.</Text>
      </View>

      {/* Right - Icons and Avatar */}
      <View style={tw`flex-row items-center gap-2`}>
        <TouchableOpacity style={tw`p-2 rounded-full bg-[#3333331A]`}>
          <Link href={"/map"}>
            <SvgXml xml={IconSearch} />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={tw`p-2 rounded-full bg-[#3333331A]`}>
          <Link href={"/map"}>
            <SvgXml xml={IconMap} />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={tw`p-2 rounded-full bg-[#3333331A]`}>
          <Link href={"/notifications"}>
            <SvgXml xml={IconNotifi} />
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
                <Text style={tw`text-9 font-inter-700 text-[#121212]`}>
                  Kalamari.
                </Text>
                <TouchableOpacity onPress={() => setDrawerOpen(false)}>
                  <SvgXml xml={IconClose} />
                </TouchableOpacity>
              </View>
              {/* Navigation  */}

              <View style={tw`flex-col gap-6`}>
                {/* Navigation Section */}
                <View style={tw`flex-col gap-4`}>
                  <Text style={tw`text-4 font-inter-700 text-textPrimary`}>
                    Navigation
                  </Text>
                  <View style={tw`flex-col gap-2`}>
                    <TouchableOpacity onPress={() => setDrawerOpen(false)}>
                      <View style={tw`flex-row items-center gap-2`}>
                        <SvgXml xml={IconDHome} />
                        <Text style={tw`text-4 font-inter-400 text-[#454545]`}>
                          Home
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <Link href={"/(drawer)/Post"} asChild>
                      <TouchableOpacity>
                        <View style={tw`flex-row items-center gap-2`}>
                          <SvgXml xml={IconDPost} />
                          <Text
                            style={tw`text-4 font-inter-400 text-[#454545]`}
                          >
                            Post
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </Link>

                    <Link href={"/(drawer)/Bookmarks"} asChild>
                      <TouchableOpacity>
                        <View style={tw`flex-row items-center gap-2`}>
                          <SvgXml xml={IconSideBookMark} />
                          <Text
                            style={tw`text-4 font-inter-400 text-[#454545]`}
                          >
                            Bookmarks
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </Link>

                    <Link href={"/(drawer)/Profile"} asChild>
                      <TouchableOpacity>
                        <View style={tw`flex-row items-center gap-2`}>
                          <SvgXml xml={IconProfile} />
                          <Text
                            style={tw`text-4 font-inter-400 text-[#454545]`}
                          >
                            Profile
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </Link>
                  </View>
                </View>

                {/* Account Section */}
                <View style={tw`flex-col gap-4`}>
                  <Text style={tw`text-4 font-inter-700 text-textPrimary`}>
                    Account
                  </Text>
                  <View style={tw`flex-col gap-2`}>
                    <Link href={"/(drawer)/ChangePassword"} asChild>
                      <TouchableOpacity>
                        <View style={tw`flex-row items-center gap-2`}>
                          <SvgXml xml={IconPass} />
                          <Text
                            style={tw`text-4 font-inter-400 text-[#454545]`}
                          >
                            Change password
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </Link>

                    <Link href={"/(drawer)/TermsAndConditions"} asChild>
                      <TouchableOpacity>
                        <View style={tw`flex-row items-center gap-2`}>
                          <SvgXml xml={IconConditions} />
                          <Text
                            style={tw`text-4 font-inter-400 text-[#454545]`}
                          >
                            Terms & Conditions
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </Link>

                    <Link href={"/(drawer)/PrivacyPolicy"} asChild>
                      <TouchableOpacity>
                        <View style={tw`flex-row items-center gap-2`}>
                          <SvgXml xml={IconPrivacy} />
                          <Text
                            style={tw`text-4 font-inter-400 text-[#454545]`}
                          >
                            Privacy policy
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </Link>

                    <Link href={"/(drawer)/Mission"} asChild>
                      <TouchableOpacity>
                        <View style={tw`flex-row items-center gap-2`}>
                          <SvgXml xml={IconMission} />
                          <Text
                            style={tw`text-4 font-inter-400 text-[#454545]`}
                          >
                            Our Mission
                          </Text>
                        </View>
                      </TouchableOpacity>
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
