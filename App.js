import React, { useEffect, useState } from 'react'
import { Button, Modal, Text, View } from 'react-native';
const App = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState("Initial Data")

  useEffect(() => {
    console.warn("value of count", count)
    if (count === 5) {
      setData("Updated Data")
    }
  }, [count])
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <Text style={{ fontSize: 30 }}>Value of Count {count}</Text>
      <Text style={{ fontSize: 30 }}>{data}</Text>
      <Button title="Set Count" onPress={() => setCount(count + 1)}></Button>
    </View >
  )

}

export default App;
