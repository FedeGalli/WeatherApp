import React from "react";
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native'
import { Feather } from '@expo/vector-icons'

const DATA = [
    {
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
          }
        ],
        "main": {
          "temp": 298.48,
          "feels_like": 298.74,
          "temp_min": 297.56,
          "temp_max": 300.05,
          "pressure": 1015,
          "humidity": 64,
          "sea_level": 1015,
          "grnd_level": 933
        }
    },
    {
        "weather": [
          {
            "id": 501,
            "main": "Sunny",
            "description": "moderate rain",
            "icon": "10d"
          }
        ],
        "main": {
          "temp": 298.48,
          "feels_like": 298.74,
          "temp_min": 200,
          "temp_max": 210,
          "pressure": 1015,
          "humidity": 12,
          "sea_level": 1015,
          "grnd_level": 933
        }
    },
    {
        "weather": [
          {
            "id": 501,
            "main": "Cloudy",
            "description": "moderate rain",
            "icon": "10d"
          }
        ],
        "main": {
          "temp": 298.48,
          "feels_like": 298.74,
          "temp_min": 223.56,
          "temp_max": 400.05,
          "pressure": 1015,
          "humidity": 100,
          "sea_level": 1015,
          "grnd_level": 933
        }
    },
    
]

const Item = (props) => {
    const { humidity, min, max, condition} = props
    return (
        <View>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text>{humidity}</Text>
            <Text>{min}</Text>
            <Text>{max}</Text>
        </View>
    )
}

const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <Item condition={item.weather[0].main} humidity={item.main.humidity} min={item.main.temp_min} max={item.main.temp_max} />
    )
  return (
    <SafeAreaView style={styles.container}>
      <Text>Current Weather</Text>
      <FlatList>
        data={DATA}
        renderItem={renderItem}
      </FlatList>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center'
  }
})
export default UpcomingWeather