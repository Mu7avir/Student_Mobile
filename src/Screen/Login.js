import * as React from 'react';
import  { Component } from 'react'
import { View, Text, Button,FlatList,Platform, StyleSheet, TextInput, TouchableOpacity  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const userN='k163621';
const pass='1111';

class Login extends Component {
	// const { navigation } = this.props.navigation;
	state = {
		username: "",
		password: "",
	}
render() {
    return (

	<View style={styles.container}>
      <TextInput
        style={styles.input}
      
        placeholder="Username"
        onChangeText={(uname) => this.setState({username: uname})}
        value={this.state.username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
     
      <View>
       <TouchableOpacity style={{borderWidth: 3,height: 40, width: 80,justifyContent: "center",alignItems: "center",fontWeight: 'bold',borderRadius: 10}}
       onPress={() => this.props.navigation.navigate('Courses',{username: this.state.username})}>
        <Text>Login</Text>
       </TouchableOpacity>
      </View> 
    </View>
      



   
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'honeydew',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width: "90%",
    padding: 15,
    backgroundColor: '#fff',
    borderWidth: 1,margin:10, width: "70%",borderRadius: 10
  }

});

export default Login;
