import React from 'react'
import {Text, View } from 'react-native';
import Form from './components/Form';

class App extends React.Component{
  render(){
    return(
      <View>
        <Profile></Profile>
        <About></About>
        <Form></Form>
      </View>
    )
  }
}

export default App;

class Profile extends React.Component{
  render(){
    return (
      <View>
          <Text style={{fontSize:40}}>This is Profile Component</Text>
      </View>
  );
  }
}

class About extends React.Component{
  render(){

      return (
        <View>
            <Text style={{fontSize:40}}>This is About Component</Text>
        </View>
  );
  }
}