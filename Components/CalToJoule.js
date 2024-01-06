import React, {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button,TextInput } from 'react-native';

function CalToJoules() {
	
	const [Cal, setGalons] = useState(0);
	
	function handleChange(text)
	{
		setGalons(text);
	}	
	function convert(Cal) {
	return (Cal*4.184).toFixed(2);
	}
	
  return (
    <>

      <StatusBar style="auto" />
	<Text>Convert calories to joules</Text>  
<TextInput
  style={{ borderColor: 'black', borderWidth: 1, width: '80%', borderRadius: 10, padding:5 }}
  onChangeText={handleChange}
  keyboardType="numeric"
/>
	   <Text >{'\n'}</Text>
	   <Text>{Cal} colories is {convert(Cal)} joules!</Text>
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

export default CalToJoules;