import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.high_low_wrapper}>
          <Text style={styles.high_low}>High: 8</Text>
          <Text style={styles.high_low}> Low: 6</Text>
        </View>
        </View>
      <View style={styles.body_wrapper}>
        <Text style={styles.description}>Its sunny</Text>
        <Text style={styles.message}>Its perfect t-shirt weather</Text>
      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  temp:{
    color: 'black',
    fontSize: 48
  },
  feels:{
    fontSize: 30,
    color: 'black'
  },
  high_low:{
    color: 'black',
    fontSize: 20
  },
  high_low_wrapper:{
    flexDirection: 'row'
  },
  body_wrapper:{
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  message:{
    fontSize: 30
  },
  description:{
    fontSize: 48
  }
})
export default CurrentWeather