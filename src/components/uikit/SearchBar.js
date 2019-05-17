import React from 'react'
import {View,  StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { BLUE, w } from '../../../constans'

const SearchBar = ({
  iconRight,
  colorRight,
  onPressRight,
  onChangeText,
  placeholder,
  value,
  onBlur}) => {
  const { container, sub, rightIconStyle, inputStyle, searchStyle  } = styles
    return(
      <View style={container}>
      <View style={sub} >
      <TextInput 
      style={inputStyle}
      onChangeText = {onChangeText}
      placeholder = {placeholder}
      value ={value}
      onBlur = {onBlur}
      />
       
        <TouchableOpacity onPress={onPressRight}>
        <View styles={searchStyle}>
          <MaterialCommunityIcons name={iconRight} style={[rightIconStyle, { color: colorRight }]} />
        </View>
        </TouchableOpacity>
     </View>
    </View>
    )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: BLUE,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative', 
      height: 60,
      paddingHorizontal:20
  
  },
  sub: {
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    width: w - 35,
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 20
  },
  inputStyle: {
    fontSize: 18,
    height: 40,
    width: w - 90,
    marginLeft: 15,
    backgroundColor: '#fff'
  },
  searchStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    height: 40,
    width: 40,
    borderRadius: 20
  },

  rightIconStyle: {
    fontSize: 30,
    marginRight: 3,
    backgroundColor: '#000'
  }
})

  export {SearchBar}