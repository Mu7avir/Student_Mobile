import * as React from 'react';
import  { Component } from 'react'
import { View, Text, Button,Image, StyleSheet,FlatList, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
class Assignments extends Component {

  constructor(props){
    super(props)
    this.state={
    data:[{title:'Assignment 1'},{title:'Assignment 2'},{title:'Assignment 3'}]
  }   
}

renderRow=({item})=>{
  return(
    
    <View style={styles.itemRow}>
    <TouchableOpacity>
     <Image source={{uri:item.url}} style={styles.itemImage}/>
      <Text> Assignment Title: </Text>
      <Text> Status: </Text>
      <Text> Open: </Text>
      <Text> Due: </Text>
     <Text style={styles.itemText}>{item.title  }</Text>
     <Text style={styles.itemText}>{item.id }</Text>
     </TouchableOpacity>
    </View>
  )
}

render() {
      return (

      <FlatList
      style={styles.container}
      data={this.state.data}
      renderItem={this.renderRow}
  		keyExtractor={(item,index)=>index.toString()}
      />  
      )
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'honeydew',
    
  },
  itemRow:{
    borderBottomColor:'#ccc',
    marginBottom:10,
    borderBottomWidth:1
  },
  itemText:{
    fontSize:16,
    padding: 5,
  },
  itemImage:{
    width:'100%',
    height:100,
    resizeMode:'cover'
  }
 
});


export default Assignments;
