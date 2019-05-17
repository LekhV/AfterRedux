import React from 'react'
import { View,Image,Text,StyleSheet} from 'react-native'
import {w } from '../../../constans'

const ImageBigCard =({ data }) => {
    const{container,sub, cover} = styles
    const { image, name } = data
    const img = `https${image.medium.slice(4)}`
    return (
        <View style = {container}>
        <View style = {sub}>
            <Image style = {cover}
             source={{uri: img}}/>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    },
    sub: {
        shadowColor: '#000',
        shadowRadius: 8,
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 0.4,
        borderRadius: 10
    },

    cover: {
        width: w/1.67,
        height: w * 0.9,
        borderRadius: 10
    }
})

export {ImageBigCard}