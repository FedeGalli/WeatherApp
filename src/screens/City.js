import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const City = () => {
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={styles.image}>
                <Text style={[styles.text, styles.cityText]}>Paris</Text>
                <Text style={[styles.text, styles.countryText]}>FR</Text>
                <View style={styles.populationWrapper}>
                    <Feather  name={'user'} size={50} color={'white'}></Feather>
                    <Text style={styles.populationText}>8000</Text>
                </View>
                <View style={styles.populationWrapper}>
                    <Feather  name={'sunrise'} size={50} color={'white'}></Feather>
                    <Text style={styles.populationText}>6:12AM</Text>
                </View>
                <View style={styles.populationWrapper}>
                    <Feather  name={'sunset'} size={50} color={'white'}></Feather>
                    <Text style={styles.populationText}>20:42PM</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    image: {
        flex: 1
    },
    text: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    cityText:{
        fontSize: 40
    },
    countryText: {
        fontSize: 25
    },
    populationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30

    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: 'bold'
    }
})

export default City
