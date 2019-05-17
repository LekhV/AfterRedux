import React, { PureComponent } from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { Header, ImageBigCard } from '../components/uikit'
import { w } from '../../constans'

export default class DetailsScreen extends PureComponent {
  componentWillUnmount() {
    const { onGoBack } = this.props.navigation.state.params
    onGoBack && onGoBack('Hello from children')
  }

  render() {
    const { show } = this.props.navigation.state.params
    const { image, name, summary} = show
    const { navigation } = this.props
    const data = { image }
    const { container, sub, h1, h2 } = styles 
    return (
      <View style={container}>
      <Header 
      detail
      title = {name}
      onPressLeft = {() => navigation.goBack()}
      iconLeft='ios-arrow-back'
      colorLeft='#fff'/>
 <ScrollView>
          <View style={sub}>
            <ImageBigCard data={data} />
            <Text style={h1}>{name.toUpperCase()}</Text>
            <Text style={h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
          </View>
        </ScrollView>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 100,
    backgroundColor: '#fff'
  },
  cover: {
    width: w,
    height: w * 1.5,
    borderRadius: 10
  },
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 30,
    padding: 15,
    textAlign: 'center'
  },
  h2: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 15,
    textAlign: 'center',
    color: 'grey',
    paddingHorizontal: 15
  }
})