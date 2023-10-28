import React from 'react'
import {Text, View } from 'react-native';


// const Profile = (props) => {
//     return (
//         <View>
//             <Text style={{fontSize:40}}>Profile of {props.data}</Text>
//         </View>
//     );
// };


class Profile extends React.Component {
    render() {
        return (
            <View>
                <Text style={{fontSize:40}}>Profile of {this.props.data}</Text>
                <Text style={{fontSize:40}}>Profile of {this.props.email}</Text>

            </View>
        );
    }
}


export default Profile;