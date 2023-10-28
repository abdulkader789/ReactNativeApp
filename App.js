import React, { useState } from 'react'
import {Button, Text, View } from 'react-native';

const App=()=>{
    const [count, setCount] = useState(0)
    return(
      <View 
      style={{flex:1, alignItems:'center', justifyContent:'center',backgroundColor:'#FAF2BA'}}>
        <Text style={{fontSize:30}}>{count}</Text>
        <View style={{flexDirection: 'row',}}>
            <Button style={{fontSize:30,}} 
                onPress={()=>setCount(count+1)}
                title="Increase"
                >
            </Button>
            <Button style={{fontSize:30}} 
                onPress={()=>setCount(count-1)}
                title="Decrease"
                >
            </Button>
        </View>
      </View>
    )
  
}

export default App;
