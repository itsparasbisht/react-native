import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ text, onDeleteItem, id }) {
  return (
    <Pressable onPress={() => onDeleteItem(id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginHorizontal: 2,
    marginVertical: 5,
    padding: 8,
    backgroundColor: "#7ff5b6",
    borderRadius: 10,
  },
  goalText: {
    color: "black",
  },
});
