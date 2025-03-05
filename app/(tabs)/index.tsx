import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
      <View>
        <ThemedText type="title">Dashboard</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: "4%",
    flexDirection: "row",
    gap: 8,
    flex:1,
    backgroundColor:"#fff"
  },
});
