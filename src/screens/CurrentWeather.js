import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'

const CurrentWeather = ({weather}) => {



  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.top}>
        <Text style={styles.temp}>{weather.name}</Text>
      </View>
      <View style={styles.container}>

        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>{weather.main.temp}</Text>
        <Text style={styles.feels}>Feels like {weather.main.feels_like}</Text>
        <View style={styles.high_low_wrapper}>
          <Text style={styles.high_low}>High: {weather.main.temp_max}</Text>
          <Text style={styles.high_low}> Low: {weather.main.temp_min}</Text>
        </View>
        </View>
      <View style={styles.body_wrapper}>
        <Text style={styles.description}>{weather.weather[0].description}</Text>
      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  top: {
    flex: 1
  },
  container:{
    flex: 5,
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