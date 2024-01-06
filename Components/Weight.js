// AppScreen.js
import React, {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button,TextInput } from 'react-native';
import MilesToKm from '../Components/MilesToKm'

const AppScreen = () => {
  const [km, setKm] = useState(0);
	
	function handleChange(text)
	{
		setKm(text);
	}	
	function convert(km) {
	return (km/1.609).toFixed(2);
	}
	
  return (
    <View style={styles.container}>

     <Text style={{fontWeight:'bold',marginBottom:'20%',fontSize:30,color:'gold'}}>Kilometer-Mile Converter</Text>
	  
	<Text>Convert Kilometers to miles</Text>  
<TextInput
  style={{ borderColor: 'black', borderWidth: 1, width: '80%', borderRadius: 10, padding:5 }}
  onChangeText={handleChange}
  keyboardType="numeric"
/>
	 
	   <Text>{km} kilometers is {convert(km)} miles!</Text>
<View style={styles.horizontalRule} />	
	<MilesToKm />
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
