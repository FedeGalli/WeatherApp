import React, {useState, useEffect} from "react";
import { NavigationContainer} from '@react-navigation/native'
import { StyleSheet, View } from "react-native";
import Tabs from './src/components/Tabs'
import { ActivityIndicator } from "react-native";



const App = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)

  useEffect( () => {
    (async() => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted'){
        setError('permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync()
      setLocation(location)
    })()
  }, [])

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'green'}></ActivityIndicator>
      </View>
    )
  }



  if (location) {
    console.log(location)
  }
  return (
    <NavigationContainer>
      <Tabs></Tabs>
    </NavigationContainer>

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