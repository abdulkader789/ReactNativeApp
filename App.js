import React, { useState } from 'react'
import {Button, Text, View } from 'react-native';
import Profile from './components/Profile';

const App=()=>{
    const [count, setCount] = useState(0)
    return(
      <View 
      style={{flex:1, alignItems:'center', justifyContent:'center',backgroundColor:'#FAF2BA'}}>
        <Profile data="Abdul Kader" email="abdul@gmail.com"></Profile>
      </View>
    )
  
}

export default App;
