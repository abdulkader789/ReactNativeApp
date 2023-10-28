import React, { useEffect, useState } from 'react'
import { Button, FlatList, Modal, Text, View } from 'react-native';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }

  }
  componentDidMount() {
    this.apiCall();
  }
  async apiCall() {
    let res = await fetch('https://facebook.github.io/react-native/movies.json')
    let data = await res.json()
    // console.warn(data)
    this.setState({ data: data.movies })

  }
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 50 }}>
        <Text style={{ fontSize: 30 }}>Api Call</Text>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) =>
            <Text style={{ fontSize: 30, backgroundColor: 'yellow', margin: 20 }}>{item.title}, {item.releaseYear}</Text>
          }
        >

        </FlatList>
      </View >
    )
  }



}

export default App;
