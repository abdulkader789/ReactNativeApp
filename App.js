import React, { useState } from 'react'
import {Button, Text, View } from 'react-native';
import externalStyle from './styles/externalStyle';

const App=()=>{
    return(
      <View>
        <Text style={[externalStyle.textStyle, externalStyle.textBg]}>Adding External Style</Text>
      </View>
    )
  
}

export default App;
