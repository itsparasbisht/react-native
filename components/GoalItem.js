import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ text, onDeleteItem, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => onDeleteItem(id)}
        android_ripple={{ color: "yellow" }}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginHorizontal: 2,
    marginVertical: 5,
    backgroundColor: "#7ff5b6",
    borderRadius: 10,
  },
  goalText: {
    color: "black",
    padding: 8,
  },
});
