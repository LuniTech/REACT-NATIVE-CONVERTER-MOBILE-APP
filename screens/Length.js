// AppScreen.js
import React, {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button,TextInput } from 'react-native';
import InchesToCM from '../Components/InchesToCM'

const AppScreen = () => {
  const [cm, setCm] = useState(0);
	
	function handleChange(text)
	{
		setCm(text);
	}	
	function convert(cm) {
	return (cm/2.54).toFixed(2);
	}
	
  return (
    <View style={styles.container}>

     <Text style={{fontWeight:'bold',marginBottom:'20%',fontSize:30,color:'gold'}}>Centimeter-Inch Converter</Text>
	  
	<Text>Convert centimeters to inches</Text>  
<TextInput
  style={{ borderColor: 'black', borderWidth: 1, width: '80%', borderRadius: 10, padding:5 }}
  onChangeText={handleChange}
  keyboardType="numeric"
/>
	 
	   <Text>{cm} centimeters is {convert(cm)} inches!</Text>
<View style={styles.horizontalRule} />	
	<InchesToCM />
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
