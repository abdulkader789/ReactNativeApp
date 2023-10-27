import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './components/Profile';
import About from './components/About';

export default function App() {
  return (
    <View style={{flex:1, margin:40}}>
      <Text style={{fontSize:30}}>This is App component</Text> 
      <Profile></Profile>
      <About></About>

    </View>
  );
}
