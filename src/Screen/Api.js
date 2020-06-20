import * as React from 'react';
import  { Component } from 'react'
import { View,ActivityIndicator, Text, Button, StyleSheet, TextInput, TouchableOpacity,FlatList,Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

class Api extends Component {

    constructor(){
        super();
        this.state ={
            items:[]
        }
    }

    componentDidMount(){
        this._get('https://jsonplaceholder.typicode.com/posts').then(
            data=> {
                this.setState({items:data})
            }
        )
    }

render() {
    if(this.state.items.length===0){
        return(
            <View style={styles.container}>
                <ActivityIndicator size= "large"/>
            </View>
        )
    }

       return (
       <FlatList
            style= {styles.container}
            data= {this.state.items}
            keyExtractor={(item, index)=> index.toString()}
            renderItem={({item})=>this.props.item.title}
        /> 
       )     
    }
    
        _get = async (endpoint)=>{
        const res = await fetch(endpoint);
        const data= await res.json();
        return data;l
    }
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'honeydew',
    
  },
  
  list:{
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
   },
 
});


export default Api;
