import React, { useEffect, useState } from 'react'
import { Button, FlatList, Modal, Text, View } from 'react-native';
const App = () => {
  const userData = [
    { name: 'anil', email: 'anil@gmail.com' },
    { name: 'rafi', email: 'rafi@gmail.com' },
    { name: 'hasan', email: 'hasan@gmail.com' },
    { name: 'john', email: 'john@gmail.com' },
    { name: 'alice', email: 'alice@gmail.com' },
    { name: 'emma', email: 'emma@gmail.com' },
    { name: 'david', email: 'david@gmail.com' },
    { name: 'linda', email: 'linda@gmail.com' },
    { name: 'michael', email: 'michael@gmail.com' },
    { name: 'olivia', email: 'olivia@gmail.com' },
    { name: 'sara', email: 'sara@gmail.com' },
    { name: 'peter', email: 'peter@gmail.com' },
    { name: 'jennifer', email: 'jennifer@gmail.com' },
    { name: 'kevin', email: 'kevin@gmail.com' },
    { name: 'natalie', email: 'natalie@gmail.com' }
  ];
  const [user, setUser] = useState(userData)


  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <Text style={{ fontSize: 30 }}>Api Call</Text>
      <FlatList
        data={user}
        renderItem={({ item }) =>
          <Text style={{ fontSize: 30, backgroundColor: 'gray', color: 'white', margin: 20 }}>{item.name}, {item.email}</Text>
        }
      >

      </FlatList>
    </View >
  )

}

export default App;
