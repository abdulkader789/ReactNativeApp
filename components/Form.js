
import React from 'react'
import { TextInput, View, Text} from "react-native";

class Form extends React.Component {
    render() {
        return (
            <View>
                <TextInput style={{fontSize:20, borderWidth:1, height:50}} placeholder="Enter your name"></TextInput>
            </View>
        );
    }
}

export default Form;