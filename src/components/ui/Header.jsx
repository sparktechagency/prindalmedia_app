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
import Feather from "@expo/vector-icons/Feather";
import { Link, router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
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
  const slideAnim = useRef(new Animated.Value(-520)).current;

  useEffect(() => {
    if (drawerOpen) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 450,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -520,
        duration: 450,
        easing: Easing.in(Easing.ease),
        useNativeDriver: false,
      }).start();
    }
  }, [drawerOpen]);

  return (
    <View style={tw`flex-row justify-between items-center my-4 bg-[#FDFFFE]`}>
      {/* Left - Hamburger and Logo */}
      <View style={tw`flex-row gap-2 items-center`}>
        <TouchableOpacity onPress={() => setDrawerOpen(true)}>
          <SvgXml xml={IconMenu} />
        </TouchableOpacity>
        <Text style={tw`text-2xl  font-rubik-700 text-[#141A47]`}>
          Kalamari
        </Text>
      </View>

      {/* Right - Icons and Avatar */}
      <View style={tw`flex-row items-center gap-2`}>
        <TouchableOpacity
          onPress={() => router.push("/userSearch")}
          style={tw`p-2 rounded-full bg-[#3333331A]`}
          activeOpacity={0.7}
        >
          <SvgXml xml={IconSearch} width={20} height={20} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/map")}
          style={tw`p-2 rounded-full bg-[#3333331A]`}
          activeOpacity={0.7}
        >
          <SvgXml xml={IconMap} width={20} height={20} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/notifications")}
          style={tw`p-2 rounded-full bg-[#3333331A]`}
          activeOpacity={0.7}
        >
          <SvgXml xml={IconNotifi} width={20} height={20} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/(tab)/Profile")}
          activeOpacity={0.7}
        >
          <Image
            source={require("@/assets/images/image.png")}
            style={tw`w-8 h-8 rounded-full`}
          />
        </TouchableOpacity>
      </View>

      {/* Drawer with Animation */}
      <Modal transparent visible={drawerOpen} animationType="none">
        <Pressable
          style={tw`flex-1 bg-black bg-opacity-40`}
          onPress={() => setDrawerOpen(false)}
        >
          <Animated.View
            style={[
              tw`absolute top-0 bottom-0 left-0 w-80.1 rounded-r-2xl py-20 px-6 bg-white justify-between`,
              { transform: [{ translateX: slideAnim }] },
            ]}
          >
            <View style={tw`flex-col gap-6`}>
              <View style={tw`flex-row items-center justify-between `}>
                <Text style={tw`text-9 font-rubik-700 text-[#141A47]`}>
                  Kalamari
                </Text>
                <TouchableOpacity onPress={() => setDrawerOpen(false)}>
                  <SvgXml xml={IconClose} />
                </TouchableOpacity>
              </View>

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
                        <Text style={tw`text-4 font-inter-400 text-[#454545]`}>
                          Post
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </Link>

                  <Link href={"/(drawer)/Bookmarks"} asChild>
                    <TouchableOpacity>
                      <View style={tw`flex-row items-center gap-2`}>
                        <SvgXml xml={IconSideBookMark} />
                        <Text style={tw`text-4 font-inter-400 text-[#454545]`}>
                          Lists
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </Link>

                  <Link href={"/(drawer)/Profile"} asChild>
                    <TouchableOpacity>
                      <View style={tw`flex-row items-center gap-2`}>
                        <SvgXml xml={IconProfile} />
                        <Text style={tw`text-4 font-inter-400 text-[#454545]`}>
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
                        <Text style={tw`text-4 font-inter-400 text-[#454545]`}>
                          Change Password
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </Link>

                  <Link href={"/(drawer)/TermsAndConditions"} asChild>
                    <TouchableOpacity>
                      <View style={tw`flex-row items-center gap-2`}>
                        <SvgXml xml={IconConditions} />
                        <Text style={tw`text-4 font-inter-400 text-[#454545]`}>
                          Terms & Conditions
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </Link>

                  <Link href={"/(drawer)/PrivacyPolicy"} asChild>
                    <TouchableOpacity>
                      <View style={tw`flex-row items-center gap-2`}>
                        <SvgXml xml={IconPrivacy} />
                        <Text style={tw`text-4 font-inter-400 text-[#454545]`}>
                          Privacy Policy
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </Link>

                  <Link href={"/(drawer)/Mission"} asChild>
                    <TouchableOpacity>
                      <View style={tw`flex-row items-center gap-2`}>
                        <SvgXml xml={IconMission} />
                        <Text style={tw`text-4 font-inter-400 text-[#454545]`}>
                          Our Mission
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </Link>

                  <Link href={"/(drawer)/Faq"} asChild>
                    <TouchableOpacity>
                      <View style={tw`flex-row items-center gap-2 mb-4`}>
                        <Feather
                          name="message-square"
                          size={18}
                          color="#454545"
                        />
                        <Text style={tw`text-4 font-inter-400 text-[#454545]`}>
                          Faq
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </Link>
                </View>
              </View>
            </View>

            {/* Logout */}
            <View>
              <Logout />
            </View>
          </Animated.View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Header;
