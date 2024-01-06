// WelcomeScreen.js
import React from 'react';
import { StyleSheet,View, Text, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
  <View style={styles.Scontainer}>
    <View style={styles.container}>
     
	   <Button style={styles.button}
        title="Temperature"
        onPress={() => navigation.navigate('Temperature')}
      />
      <Button
        title="Distance"
        onPress={() => navigation.navigate('Distance')}
      />
	  
	   <Button
        title="Volume"
        onPress={() => navigation.navigate('Volume')}
      />
	  
	   <Button
        title="Weight"
        onPress={() => navigation.navigate('Weight')}
      />
	  
	   <Button
        title="Energy"
        onPress={() => navigation.navigate('Energy')}
      />
	  
	  
	   <Button
        title="length" style={{color:'green',backgroundColor:'yellow'}}
        onPress={() => navigation.navigate('Length')}
      />
<Text style={{textAlign:"center",fontWeight:'bold'}}>By Z.I Lunika 2023</Text>
    </View>
	</View>
  );
};
const styles = StyleSheet.create({
	 Scontainer: {
    backgroundColor:'lightgreen',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  container: {
    flex: 0.5,
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  button: {
	color: 'green',
    marginVertical: 5,
    width: '100%',
    padding: 10,
    backgroundColor: 'blue', // Add your preferred background color
    borderRadius: 5, // Add rounded corners
  },
  buttonText: {
    color: 'green', // Add your preferred text color
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
