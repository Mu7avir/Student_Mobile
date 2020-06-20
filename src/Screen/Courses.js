import * as React from 'react';
import  { Component } from 'react'
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
class Courses extends Component {
  
  state = {username:this.props.route.params.username };
render() {
      return (
      <View style={styles.container}>
              <Text style= {styles.fontStyle}>Welcome: {this.state.username}</Text>
              <TouchableOpacity style= {styles.butStyle}
              onPress={() => this.props.navigation.navigate('Menu',{data:'ipt'})}>
              	<Text style= {styles.fontStyle}>Information Processing Techniques</Text>
                
            </TouchableOpacity>
            
            <TouchableOpacity style= {styles.butStyle}
              onPress={() => this.props.navigation.navigate('Menu',{data:'ep'})}>
              	
                <Text style= {styles.fontStyle}>Entrepreneurship</Text>
                
            </TouchableOpacity>
            <TouchableOpacity style= {styles.butStyle}
              onPress={() => this.props.navigation.navigate('Menu', {data:'dwh'})}>
              	
                <Text style= {styles.fontStyle}>Data WareHouse</Text>
                
            </TouchableOpacity>
            

        </View>
      )
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'honeydew',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontStyle:{
    color : '#838D8D',fontWeight: 'bold',fontSize:15
  },
  butStyle: {
    borderWidth: 1, backgroundColor: 'powderblue',height: 60,margin:10, width: "70%",justifyContent: "center",alignItems: "center",borderRadius: 10
  }
});


export default Courses;
