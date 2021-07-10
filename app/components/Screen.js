import React from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'

const screen = ({children}) => {
    return <ScrollView style={styles.container}>{children}</ScrollView>;
};

export default screen

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
    backgroundColor: '#bdb9b980',
    flex: 1
  }
})
