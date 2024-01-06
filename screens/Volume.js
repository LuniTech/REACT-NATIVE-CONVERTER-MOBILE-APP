// AppScreen.js
import React, {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button,TextInput } from 'react-native';
import GalonsToLiter from '../Components/GalonsToLiter'

const AppScreen = () => {
  const [liter, setliter] = useState(0);
	
	function handleChange(text)
	{
		setliter(text);
	}	
	function convert(liter) {
	return (liter/3.785).toFixed(2);
	}
	
  return (
    <View style={styles.container}>

     <Text style={{fontWeight:'bold',marginBottom:'20%',fontSize:30,color:'gold'}}>Volume Converter</Text>
	  
	<Text>Convert liters to Gallons</Text>  
<TextInput
  style={{ borderColor: 'black', borderWidth: 1, width: '80%', borderRadius: 10, padding:5 }}
  onChangeText={handleChange}
  keyboardType="numeric"
/>
	 
	   <Text>{liter} liters is {convert(liter)} Galons!</Text>
<View style={styles.horizontalRule} />	
	<GalonsToLiter />
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
