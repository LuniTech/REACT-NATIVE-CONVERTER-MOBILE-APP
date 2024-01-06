// AppScreen.js
import React, {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button,TextInput } from 'react-native';
import CelToFer from '../Components/CelToFer'

const AppScreen = () => {
  const [Fer, setFer] = useState(0);
	
	function handleChange(text)
	{
		setFer(text);
	}	
	function convert(Fer) {
	return ((Fer-32)*(5/9)).toFixed(2);
	}
	
  return (
    <View style={styles.container}>

     <Text style={{fontWeight:'bold',marginBottom:'10%',fontSize:30,color:'gold'}}>Celcius-Fahrenheit</Text>
	  <Text style={{fontWeight:'bold',marginBottom:'10%',fontSize:30,color:'gold'}}>Converter</Text>
	<Text>Fahrenheit to Celcius</Text>  
<TextInput
  style={{ borderColor: 'black', borderWidth: 1, width: '80%', borderRadius: 10, padding:5 }}
  onChangeText={handleChange}
  keyboardType="numeric"
/>
	 
	   <Text>{Fer} Fahrenheit is {convert(Fer)} degrees Celcius!</Text>
<View style={styles.horizontalRule} />	
	<CelToFer />
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
