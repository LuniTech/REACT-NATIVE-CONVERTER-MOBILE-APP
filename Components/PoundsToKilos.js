import React, {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button,TextInput } from 'react-native';

function PoundsToKilos() {
	
	const [Pounds, setPounds] = useState(0);
	
	function handleChange(text)
	{
		setPounds(text);
	}	
	function convert(Pounds) {
	return (Pounds/2.205).toFixed(2);
	}
	
  return (
    <>

      <StatusBar style="auto" />
	<Text>Convert Pounds to Kilos</Text>  
<TextInput
  style={{ borderColor: 'black', borderWidth: 1, width: '80%', borderRadius: 10, padding:5 }}
  onChangeText={handleChange}
  keyboardType="numeric"
/>
	   <Text >{'\n'}</Text>
	   <Text>{Pounds} pounds is {convert(Pounds)} kilograms!</Text>
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

export default PoundsToKilos;