import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import Card from "@/components/card";
import { FlatList } from "react-native-gesture-handler";
import { useData } from "@/context/dataProvider";

export default function HomeScreen() {
  const { data } = useData();
  return (
    <View style={styles.container}>
      <View style={{ height: 20 }}></View>
      <View style={styles.title}>
        <ThemedText type="title">All Items</ThemedText>
      </View>
      <View style={styles.heading}>
        <ThemedText type="defaultSemiBold">Items</ThemedText>
        <ThemedText type="defaultSemiBold">Quantity</ThemedText>
      </View>
      <View>
        <FlatList
          scrollEnabled
          style={styles.cards}
          ItemSeparatorComponent={() => <View style={styles.dummy}></View>}
          data={data}
          renderItem={({ item }) => (
            <Card
              name={item.name}
              quantity={item.stock}
              unit={item.unit}
              color={item.stock > 9 ? "#d7f6bf" : "#ffcccc"}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: "4%",
    flex: 1,
  },
  title: {
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  heading: {
    paddingVertical: "4%",
    color: "#3B3E4F",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  dummy: {
    height: 10,
  },
  cards: {},
});
