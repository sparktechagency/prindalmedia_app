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
import { SvgXml } from "react-native-svg";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarActiveTintColor: "#C3570E",
          tabBarInactiveTintColor: "#454545",
          tabBarIcon: ({ focused }) => (
            <SvgXml
              xml={focused ? IconActive : IconHome}
              width={28}
              height={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Post"
        options={{
          title: "Post",
          tabBarActiveTintColor: "#C3570E",
          tabBarInactiveTintColor: "#454545",
          tabBarIcon: ({ focused }) => (
            <SvgXml
              xml={focused ? IconPostinActive : IconPostActive}
              width={28}
              height={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Bookmarks"
        options={{
          title: "Lists",
          tabBarActiveTintColor: "#C3570E",
          tabBarInactiveTintColor: "#454545",
          tabBarIcon: ({ focused }) => (
            <SvgXml
              xml={focused ? IconListActive : IconListinActive}
              width={28}
              height={28}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarActiveTintColor: "#C3570E",
          tabBarInactiveTintColor: "#454545",
          tabBarIcon: ({ focused }) => (
            <SvgXml
              xml={focused ? IconProfileActive : IconProfileinActive}
              width={28}
              height={28}
            />
          ),
        }}
      />
    </Tabs>
  );
}
