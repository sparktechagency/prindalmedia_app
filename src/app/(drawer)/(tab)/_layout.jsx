import {
  IconActive,
  IconHome,
  IconListActive,
  IconListinActive,
  IconPostActive,
  IconPostinActive,
  IconProfileActive,
  IconProfileinActive,
} from "@/assets/Icon";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

export default function TabLayout() {
  return (
    <Tabs
  screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: '#ED6237',
    tabBarInactiveTintColor: '#454545',
    tabBarStyle: {
      paddingVertical: 10, 
      height: 70,         
    },
  }}
>
  <Tabs.Screen
    name="index"
    options={{
      title: "Home",
      tabBarIcon: ({ focused }) => (
        <View style={{ marginTop: 4 }}>
          <SvgXml
            xml={focused ? IconActive : IconHome}
            width={28}
            height={28}
          />
        </View>
      ),
    }}
  />
  <Tabs.Screen
    name="Post"
    options={{
      title: "Post",
      tabBarIcon: ({ focused }) => (
        <View style={{ marginTop: 4 }}>
          <SvgXml
            xml={focused ? IconPostinActive : IconPostActive}
            width={28}
            height={28}
          />
        </View>
      ),
    }}
  />
  <Tabs.Screen
    name="Bookmarks"
    options={{
      title: "Lists",
      tabBarIcon: ({ focused }) => (
        <View style={{ marginTop: 4 }}>
          <SvgXml
            xml={focused ? IconListActive : IconListinActive}
            width={28}
            height={28}
          />
        </View>
      ),
    }}
  />
  <Tabs.Screen
    name="Profile"
    options={{
      title: "Profile",
      tabBarIcon: ({ focused }) => (
        <View style={{ marginTop: 4 }}>
          <SvgXml
            xml={focused ? IconProfileActive : IconProfileinActive}
            width={28}
            height={28}
          />
        </View>
      ),
    }}
  />
</Tabs>

  );
}
