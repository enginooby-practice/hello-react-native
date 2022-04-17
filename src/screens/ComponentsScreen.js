//* 1. Import
import React from "react";
import { StyleSheet, Text } from 'react-native';

//* 2. Create component w/ structure
const ComponentsScreen = () => {
  return <Text style={styles.textStyle}>This is the components screen</Text>
}

//* 3. Create style for the component
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
})

//* 4. Export
export default ComponentsScreen