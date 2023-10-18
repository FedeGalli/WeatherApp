import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from 'react-native'

import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from './src/screens/City'
const App = () => {
  return (
    <View style={styles.container}>
      <City></City>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#D5F6FF'
  }
})
export default App