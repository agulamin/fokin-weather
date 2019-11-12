import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView} />
      <View style={styles.blueView} />
      <View style={styles.pinkView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  yellowView: {
    flex:1, 
    backgroundColor: "yellow"
  },
  blueView: {
    flex: 4,
    backgroundColor: "blue"
  },
  pinkView: {
    flex: 4,
    backgroundColor: "pink"
  }
});
