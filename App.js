import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(goalText) {
    setGoals((prev) => [
      ...prev,
      { text: goalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setGoals((prev) => {
      return prev.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(goal) => goal.id}
          renderItem={(goalData) => {
            return (
              <GoalItem
                text={goalData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={goalData.item.id}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
