import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput({ onAddGoal, openModal, closeModal }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(text) {
    setEnteredGoalText(text);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={openModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="add a goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
