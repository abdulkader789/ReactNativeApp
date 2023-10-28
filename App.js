import React, { useEffect, useRef, useState } from 'react'
import { Button, FlatList, Modal, Text, TextInput, View } from 'react-native';
const App = () => {
  const input = useRef(null)

  const updateInput = () => {
    if (input.current) {
      input.current.focus();
      input.current.setNativeProps({
        style: {
          color: 'red'
        }
      })
    }

  }
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <View style={{ marginBottom: 5 }}>
        <TextInput ref={input} style={{ fontSize: 20, padding: 5, borderWidth: 1, borderColor: 'lightblue' }} placeholder='Enter Name'></TextInput>
        <TextInput style={{ fontSize: 20, padding: 5, borderWidth: 1, borderColor: 'lightblue' }} placeholder='Enter Password'></TextInput>
      </View>
      <Button title='Update State' onPress={updateInput}></Button>
    </View >
  )

}

export default App;
