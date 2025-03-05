import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import { useData } from "@/context/dataProvider";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function TabThreeScreen() {
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [unit, setUnit] = useState("");
  const { data, setData } = useData();


  function handleAdd() {
    if (!name || !stock || !unit) {
      return;
    }
    const newProduct = {
      name: name,
      stock: Number(stock),
      unit: unit,
      id: Date.now(),
    };
    setData([newProduct, ...data]);
    setName("");
    setStock("");
    setUnit("");
  }

  function editHandler(id: number) {
    const filtered = data.filter((item) => item.id == id);
    const [current] = filtered;
    setName(current.name);
    setStock(current.stock.toString());
    setUnit(current.unit);
    setData(data.filter(item => item.id != id ))
  }

  function deleteHandler(id: number) {
    setData(data.filter((item) => item.id != id));
  }

  return (
    <View style={styles.container}>
      <View style={{ height: 20 }}></View>
      <View style={styles.title}>
        <ThemedText type="title">Update</ThemedText>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name.."
          placeholderTextColor={"#999"}
          value={name}
          autoFocus
          onChangeText={(input) => {
            setName(input);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantity.."
          keyboardType="number-pad"
          value={stock}
          placeholderTextColor={"#999"}
          onChangeText={(input) => {
            setStock(input);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Unit.."
          placeholderTextColor={"#999"}
          value={unit}
          onChangeText={(input) => {
            setUnit(input);
          }}
        />
        <Pressable onPress={handleAdd} style={styles.button}>
          <ThemedText type="defaultSemiBold">Update</ThemedText>
        </Pressable>
      </View>

      <View style={styles.heading}>
        <ThemedText type="defaultSemiBold">Items</ThemedText>
        <ThemedText type="defaultSemiBold">Quantity</ThemedText>
      </View>
      <View>
        {data && (
          <FlatList
            scrollEnabled
            ItemSeparatorComponent={() => <View style={styles.dummy}></View>}
            data={data}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.cardContainer,
                  { backgroundColor: item.stock > 9 ? "#d7f6bf" : "#ffcccc" },
                ]}
              >
                <View>
                  <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
                  <ThemedText type="default">
                    {item.stock + item.unit}
                  </ThemedText>
                </View>
                <View
                  style={{ display: "flex", flexDirection: "row", gap: 10 }}
                >
                  <Pressable onPress={() => editHandler(item.id)}>
                    <AntDesign name="edit" size={20} color={"black"} />
                  </Pressable>

                  <Pressable onPress={() => deleteHandler(item.id)}>
                    <AntDesign name="delete" size={20} color={"black"} />
                  </Pressable>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
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
  inputContainer: {
    gap: 10,
    paddingVertical: "4%",
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
  input: {
    width: "100%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
  },
  button: {
    width: "100%",
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
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
