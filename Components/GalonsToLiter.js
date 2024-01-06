import React, {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button,TextInput } from 'react-native';

function GalonsToLiter() {
	
	const [Galons, setGalons] = useState(0);
	
	function handleChange(text)
	{
		setGalons(text);
	}	
	function convert(Galons) {
	return (Galons*3.785).toFixed(2);
	}
	
  return (
    <>

      <StatusBar style="auto" />
	<Text>Convert Galons to Liters</Text>  
<TextInput
  style={{ borderColor: 'black', borderWidth: 1, width: '80%', borderRadius: 10, padding:5 }}
  onChangeText={handleChange}
  keyboardType="numeric"
/>
	   <Text >{'\n'}</Text>
	   <Text>{Galons} Galons is {convert(Galons)} Liters!</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GalonsToLiter;