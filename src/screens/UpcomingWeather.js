import React from "react";
import {View, Text, SafeAreaView, StyleSheet, FlatList, StatusBar, ImageBackground} from 'react-native'
import ListItem from "../components/ListItem";

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
        },
        "key": 0
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
        },
        "key": 1
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
        },
        "key": 2
    }
    
]

const Empty = () => (
  <View>
    <Text>No data found</Text>
  </View>
)

const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <ListItem 
        condition={item.weather[0].main}
        feelsLike={item.main.feels_like}
        min={item.main.temp_min}
        max={item.main.temp_max} />
    )
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/clouds.jpg')} style={styles.image}>
        <Text style={styles.title}>Upcoming Weather</Text>
          <FlatList 
            data={DATA} 
            renderItem={renderItem} 
            //ItemSeparatorComponent={() => <View style={{backgroundColor: 'red', height: 2}}></View>}
            ListEmptyComponent={() => <Empty />}
          />


      </ImageBackground>

      

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#33545C'
  },
  title: {
    alignSelf: 'center',
    fontSize: 30,
    paddingBottom: 20,
    color: '#D5F6FF'
  },
  image: {
    flex: 1
  }
})
export default UpcomingWeather