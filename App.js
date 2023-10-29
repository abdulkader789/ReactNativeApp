import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, Dimensions, TouchableOpacity, Image, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

const App = () => {
  const input = useRef(null);
  const [data, setData] = useState(null);
  const screenWidth = Dimensions.get('window').width;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
        let response = await fetch(url);
        let result = await response.json();
        if (result && result.meals) {
          setData(result.meals);
        } else {
          setData(null);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setData(null);
      }
    };

    fetchData(); // Immediately invoke the async function
  }, []);

  const searchUser = async (text) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`;
    try {
      let response = await fetch(url);
      let result = await response.json();
      if (result && result.meals) {
        setData(result.meals);
      } else {
        setData(null);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      setData(null);
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.main}>
        <View style={styles.appContainer}>
          <Text style={styles.appTitle}>Get Your Favourite Meal</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput ref={input} onChangeText={(text) => searchUser(text)} style={styles.inputField} placeholder='Search'></TextInput>
        </View>
        <View>
          <Text style={styles.header}>Latest Meals</Text>
        </View>

        <View style={styles.container}>
          {data &&
            data.map((item) => (
              <View key={item.idMeal} style={styles.item}>
                <Image
                  style={styles.image}
                  source={{
                    uri: `${item.strMealThumb}`,
                  }}
                />
                <Text style={styles.mealName}>{item.strMeal}</Text>
              </View>
            ))}
        </View>

        <View style={styles.footer}>
          <View style={styles.footerLinks}>
            <TouchableOpacity>
              <Text style={styles.linkText}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.linkText}>Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.linkText}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.linkText}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.footerText}>© 2023 FoodApp. All rights reserved.</Text>
          <Text style={styles.footerText}>Created by ©AbdulKader</Text>

        </View>


      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  main: {
    flex: 1,
    paddingTop: 50
  },
  header: {
    fontSize: 30,
    textAlign: 'center'
  },
  appContainer: {
    backgroundColor: '#EB4910',
    padding: 10

  },
  appTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
  }
  ,
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between', // Apply justifyContent to the main container

  },
  item: {
    width: '48%', // Set width to '50%' for half of the screen width
    height: 200,
    backgroundColor: '#F7F7F4',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#F1F1EB'

  },
  inputContainer: {
    padding: 10

  },
  inputField: {
    width: '100%',
    height: 40,
    fontSize: 20,
    padding: 5,
    borderWidth: 1,
    borderColor: 'lightblue',

  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
  },
  mealName: {
    fontSize: 20,
    padding: 5,
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    marginTop: 20, // Add marginTop to create space between FlatList and footer

  },
  footerText: {
    color: '#ffffff',
    fontSize: 14,

  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  linkText: {
    color: '#ffffff',
    fontSize: 12,
  },
});

export default App;
