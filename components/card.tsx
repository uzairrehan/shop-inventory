import { View, StyleSheet, ScrollView } from "react-native";
import { ThemedText } from "./ThemedText";

const Card = ({
  name,
  quantity,
  unit,
  color,
}: {
  name: string;
  quantity: number;
  unit: string;
  color?: string;
}) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <ThemedText type="defaultSemiBold">{name}</ThemedText>
      <ThemedText type="default">{quantity + unit}</ThemedText>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    color: "white",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 10,
  },
});
