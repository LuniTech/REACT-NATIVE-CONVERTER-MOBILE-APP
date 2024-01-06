// AppScreen.js
import React, {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button,TextInput } from 'react-native';
import PoundsToKilos from '../Components/PoundsToKilos'

const AppScreen = () => {
  const [kg, setKg] = useState(0);
	
	function handleChange(text)
	{
		setKg(text);
	}	
	function convert(kg) {
	return (kg*2.205).toFixed(2);
	}
	
  return (
    <View style={styles.container}>

     <Text style={{fontWeight:'bold',marginBottom:'20%',fontSize:30,color:'gold'}}>Kilogram-Pound</Text>
	  
	<Text>Convert Kilograms to Pounds</Text>  
<TextInput
  style={{ borderColor: 'black', borderWidth: 1, width: '80%', borderRadius: 10, padding:5 }}
  onChangeText={handleChange}
  keyboardType="numeric"
/>
	 
	   <Text>{kg} kilograms is {convert(kg)} pounds!</Text>
<View style={styles.horizontalRule} />	
	<PoundsToKilos />
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
