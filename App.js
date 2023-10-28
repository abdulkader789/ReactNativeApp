import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native';
import externalStyle from './styles/externalStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
const App = () => {
  const [isVisiable, setIsVisiable] = useState(false)
  return (
    <View style={{ paddingTop: 50 }}>
      <Text style={{ fontSize: 80 }}>Normal Screen Text</Text>
      <View style={{ marginTop: 50 }}>
        <Button title="Show Modal" onPress={() => setIsVisiable(true)}></Button>
      </View>
      <Modal transparent={true}
        visible={isVisiable}
      >
        <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
          <View style={{ backgroundColor: '#ffffff', margin: 30, padding: 50, borderRadius: 10, flex: 1 }}>
            <Text style={{ fontSize: 20, color: 'black' }}>Modal Screen Text</Text>
            <View style={{ marginTop: 500 }}>
              <Button title="close Modal" onPress={() => setIsVisiable(false)}></Button>
            </View>
          </View>
        </View>
      </Modal>

    </View >
  )

}

export default App;
