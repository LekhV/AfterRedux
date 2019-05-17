import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { BLUE, w } from '../../../constans'
const Header = ({
  iconLeft,
  iconRight,
  colorLeft,
  colorRight,
  title,
  onPressLeft,
  onPressRight}) => {
  const { container, textStyle, iconLeftStyle, rightIconStyle  } = styles
    return(
      <View style={container}>
      {iconLeft &&
        <TouchableOpacity onPress={onPressLeft}>
          <Ionicons name={iconLeft} style={iconLeftStyle} color={colorLeft} />
        </TouchableOpacity>
      }
      <Text numberOfLines={1} ellipsizeMode="tail" style={textStyle}>{title}</Text>
      {iconRight &&
        <TouchableOpacity onPress={onPressRight}>
          <MaterialCommunityIcons name={iconRight} style={[rightIconStyle, { color: colorRight }]} />
        </TouchableOpacity>
      }
    </View>
    )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: BLUE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative', 
      height: 60,
      paddingHorizontal:20
  
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
      paddingTop: 10,
          width: w-75
  },
  iconLeftStyle:  {
      paddingTop: 10,
    fontSize: 35
  },

  rightIconStyle: {
      paddingTop: 10,
    fontSize: 30,
    marginRight: 3
  }
})

  export {Header}