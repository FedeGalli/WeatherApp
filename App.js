import React, {useState, useEffect} from "react";
import { NavigationContainer} from '@react-navigation/native'
import { StyleSheet, View } from "react-native";
import Tabs from './src/components/Tabs'
import { ActivityIndicator } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWather";

const App = () => {

  const [loading, error, weather] = useGetWeather()

  console.log(loading, error,weather)

  if (!loading){
    return (
      <NavigationContainer>
        <Tabs weather={weather}></Tabs>
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'green'}></ActivityIndicator>
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'pink'
  }
})

export default App