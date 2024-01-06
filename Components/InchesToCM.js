import React, {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button,TextInput } from 'react-native';

function InchesToCM() {
	
	const [inches, setInches] = useState(0);
	
	function handleChange(text)
	{
		setInches(text);
	}	
	function convert(inches) {
	return (inches*2.54).toFixed(2);
	}
	
  return (
    <>

      <StatusBar style="auto" />
	<Text>Convert inches to centimeters</Text>  
<TextInput
  style={{ borderColor: 'black', borderWidth: 1, width: '80%', borderRadius: 10, padding:5 }}
  onChangeText={handleChange}
  keyboardType="numeric"
/>
	   <Text >{'\n'}</Text>
	   <Text>{inches} inches is {convert(inches)} centimeters!</Text>
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

export default InchesToCM;