import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  function addGoalHandler(goalText) {
    setGoals((prev) => [
      ...prev,
      { text: goalText, id: Math.random().toString() },
    ]);
    handleCloseModal();
  }

  function deleteGoalHandler(id) {
    setGoals((prev) => {
      return prev.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="black" onPress={handleOpenModal} />
      <GoalInput
        onAddGoal={addGoalHandler}
        openModal={openModal}
        closeModal={handleCloseModal}
      />
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
