import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function TabThreeScreen() {
  return (
    <View style={styles.titleContainer}>
          <View style={{height:20}}>
          </View>
      <View>
        <ThemedText type="title">Create</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: "4%",
    flexDirection: "row",
    gap: 8,
    flex: 1,
    backgroundColor: "#fff",
  },
});
