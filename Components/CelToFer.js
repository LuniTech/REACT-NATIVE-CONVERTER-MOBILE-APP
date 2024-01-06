import React, {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button,TextInput } from 'react-native';

function CelToFer() {
	
	const [Cel, setFer] = useState(0);
	
	function handleChange(text)
	{
		setFer(text);
	}	
	function convert(Cel) {
	return (((9/5)*Cel)+32).toFixed(2);
	}
	
  return (
    <>

      <StatusBar style="auto" />
	<Text>Convert Celcius to Fahrenheit</Text>  
<TextInput
  style={{ borderColor: 'black', borderWidth: 1, width: '80%', borderRadius: 10, padding:5 }}
  onChangeText={handleChange}
  keyboardType="numeric"
/>
	   <Text >{'\n'}</Text>
	   <Text>{Cel} Celcius is {convert(Cel)} degrees Fahrenheit!</Text>
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

export default CelToFer;