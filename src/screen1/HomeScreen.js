import React, {Component} from 'react'
import { View } from 'react-native'
import {  connect } from 'react-redux'
import {
  searchChanged,
  getMovies
} from '../actions'
import { Header, ImageCard, Layout, SearchBar } from '../components/uikit'
import {
  STARGATE_DETAILS
} from '../routs'

const url = 'https://api.tvmaze.com/search/shows?q=stargate'

class HomeScreen extends Component {
state = {
  title: 'Vika',
  data: [],
  visibleSearchbar: false
}

componentDidMount = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    this.setState({ data })

  } catch (e) {
    throw e
  }
}
_onChangeText = text => {
  this.props.searchChanged(text)
  this.props.getMovies(text)
  console.log('text', text)
}
render () {
  const { title, visibleSearchbar } = this.state
  const { navigation, movie, data } = this.props
  console.log('this.props', this.props)
  return (
    <View>
      { visibleSearchbar ?
        <SearchBar
          colorRight={'#fff'}
          iconRight="magnify"
          placeholder="Search"
          onChangeText={this._onChangeText}
          value = {movie}
          onPressRight={() => this.setState({ visibleSearchbar: false })}
          onBlur={() => this.setState({ visibleSearchbar: true })}
        /> :
        <Header title = {title}
          colorRight={'#fff'}
          iconRight="magnify"
          onPressRight={() => this.setState({ visibleSearchbar: true })}
        />
      }
      <Layout>
        { data.map(item => (
          <ImageCard
            data={item.show}
            key={item.show.id}
            onPress={() => navigation.navigate(STARGATE_DETAILS, ({ show: item.show }))}
          />
        ))}
      </Layout>
    </View>
  );
}
}

const mapStateToProps = state => {
  return {
    movie: state.search.movie,
    data: state.search.data
  }
}

export default connect(mapStateToProps, { searchChanged, getMovies })(HomeScreen)