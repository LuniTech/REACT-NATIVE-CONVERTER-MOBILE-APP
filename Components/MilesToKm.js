import React, {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button,TextInput } from 'react-native';

function MilesToKm() {
	
	const [km, setKm] = useState(0);
	
	function handleChange(text)
	{
		setKm(text);
	}	
	function convert(km) {
	return (km*1.609).toFixed(2);
	}
	
  return (
    <>

      <StatusBar style="auto" />
	<Text>Convert Miles to Kilometers</Text>  
<TextInput
  style={{ borderColor: 'black', borderWidth: 1, width: '80%', borderRadius: 10, padding:5 }}
  onChangeText={handleChange}
  keyboardType="numeric"
/>
	   <Text >{'\n'}</Text>
	   <Text>{km} miles is {convert(km)} kilometers!</Text>
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

export default MilesToKm;