import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false  }} >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarActiveTintColor: "#C3570E",
          tabBarInactiveTintColor: "#454545",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Post"
        options={{
          title: "Post",
          tabBarActiveTintColor: "#C3570E",
          tabBarInactiveTintColor: "#454545",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="add" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Bookmarks"
        options={{
          title: "Bookmarks",
          tabBarActiveTintColor: "#C3570E",
          tabBarInactiveTintColor: "#454545",
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmarks-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarActiveTintColor: "#C3570E",
          tabBarInactiveTintColor: "#454545",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color={color} />
          ),
        }}
      />

      
    </Tabs>
  );
}
