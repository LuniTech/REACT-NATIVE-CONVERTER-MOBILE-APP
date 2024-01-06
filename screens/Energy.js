// AppScreen.js
import React, {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button,TextInput } from 'react-native';
import CalToJoule from '../Components/CalToJoule'

const AppScreen = () => {
  const [joules, setJoules] = useState(0);
	
	function handleChange(text)
	{
		setJoules(text);
	}	
	function convert(joules) {
	return (joules/4.184).toFixed(2);
	}
	
  return (
    <View style={styles.container}>

     <Text style={{fontWeight:'bold',marginBottom:'20%',fontSize:30,color:'gold'}}>Joule-Calorie</Text>
	  
	<Text>Convert Joules to Calories</Text>  
<TextInput
  style={{ borderColor: 'black', borderWidth: 1, width: '80%', borderRadius: 10, padding:5 }}
  onChangeText={handleChange}
  keyboardType="numeric"
/>
	 
	   <Text>{joules} joules is {convert(joules)} calories!</Text>
<View style={styles.horizontalRule} />	
	<CalToJoule />
    </View>
	
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalRule: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%', // Adjust the width as needed
    marginVertical: 60, // Adjust the vertical margin as needed
  },
});

export default AppScreen;
