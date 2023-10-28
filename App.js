import React, { useState } from 'react'
import {Button, Text, View } from 'react-native';
import externalStyle from './styles/externalStyle';

import Icon from 'react-native-vector-icons/FontAwesome';
const App=()=>{
  const [clickedIcon, setClickedIcon] = useState("")
    return(
      <View style={{paddingTop:50}}>
        <Text style={[externalStyle.textStyle, externalStyle.textBg]}>External Style with icon</Text>

        <Icon.Button
              name="facebook"
              size={28}
              style={{justifyContent:"center"}}
              onPress={()=>setClickedIcon("Cliked on facebook icon")}
          />
          <Icon.Button
              name="github"
              size={28}
              style={{justifyContent:"center"}}
              backgroundColor="black"
              onPress={()=>setClickedIcon("Cliked on githun icon")}

          />
          <Icon.Button
              name="linkedin"
              size={28}
              style={{justifyContent:"center"}}
              backgroundColor="blue"
              onPress={()=>setClickedIcon("Cliked on linkedin icon")}

          />
          <Text style={{backgroundColor:"#FDEC85", padding:10,marginTop:50, fontSize:20}}>{clickedIcon}</Text>
         
          
          
      </View>
    )
  
}

export default App;
