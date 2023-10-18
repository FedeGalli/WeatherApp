import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'

const ListItem = (props) => {
    const {feelsLike, min, max, condition} = props
    return (
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'yellow'} />
            <Text style={styles.maxTempText}>max: {min}</Text>
            <Text style={styles.minTempText}>min: {max}</Text>
            <Text style={styles.feelsLikeText}>feels like: {feelsLike}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderWidth: 5,
      backgroundColor: '#9E9E4F',
      borderColor: '#86AEAE'
    },
    maxTempText: {
      color: '#D01B1B',
      fontSize: 15
    },
    minTempText: {
      color: '#355DFF',
      fontSize: 15
    },
    feelsLikeText: {
      color: 'white'
    }
  })

export default ListItem