import * as React from 'react';
import  { Component } from 'react'
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class Menu extends Component {
  state = {data:this.props.route.params.data };

render() {
  return (
      <View style={styles.container}>
              <Text style= {styles.fontStyle}>Course: {this.state.data}</Text>
              <TouchableOpacity style={styles.butStyle}
              onPress={() => this.props.navigation.navigate('Announcement')}>
                <Text style={styles.fontStyle}>Announcement</Text> 
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.butStyle}
              onPress={() => this.props.navigation.navigate('Resources')}>
                <Text style={styles.fontStyle}>Resources</Text> 
              </TouchableOpacity>

              <TouchableOpacity style={styles.butStyle}
              onPress={() => this.props.navigation.navigate('Assignments')}>
                <Text style={styles.fontStyle}>Assignments</Text> 
              </TouchableOpacity>

              <TouchableOpacity style={styles.butStyle}
              onPress={() => this.props.navigation.navigate('Project')}>
                <Text style={styles.fontStyle}>Project</Text> 
              </TouchableOpacity>
            
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
  fontStyle:{
    color : '#838D8D',fontWeight: 'bold',fontSize:20
  },
  butStyle: {
    borderWidth: 1, backgroundColor: 'powderblue',height: 80,margin:10, width: "70%",justifyContent: "center",alignItems: "center",borderRadius: 10
  }
  
});

export default Menu;
