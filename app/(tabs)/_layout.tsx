import { Tabs } from "expo-router";
import React, { useState } from "react";
import { Platform } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "All Items",
          tabBarIcon: ({ color }) => (
            <AntDesign name="inbox" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="lowstock"
        options={{
          title: "Low Stock",
          tabBarIcon: ({ color }) => (
            <AntDesign name="arrowdown" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="update"
        options={{
          title: "Update",
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircleo" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
