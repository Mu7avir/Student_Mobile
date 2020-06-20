import * as React from 'react';
import  { Component } from 'react'
import { View,FlatList,Platform, Text,Image, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class Announcement extends Component {
  

	// const { navigation } = this.props.navigation;
   //state = {data: this.props.route.params.data2,username:this.props.route.params.username };
   constructor(props){
     super(props)
     this.state={
       data:[{title:'Announcment 1'},{title:'Announcement 2'},{title:'Announcement 3'}]
     }   
   }
   getData= async()=>{
     const apiUrl="http://jsonplaceholder.typicode.com/photos?_limit=10"
     fetch(apiUrl).then((res)=> res.json())
     .then((resJson)=>{
       this.state({
         data:resJson
       })
     })
   }

   renderRow=({item})=>{
     return(
       <View style={styles.itemRow}>
        <Image source={{uri:item.url}} style={styles.itemImage}/>
        <Text> Subject:</Text>
        <Text> Saved By: </Text>
        <Text> Modified Date: </Text>
        <Text> For: </Text>
        <Text style={styles.itemText}>{item.title  }</Text>
        <Text style={styles.itemText}>{item.id }</Text>
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
    height:200,
    resizeMode:'cover'
  }
  
});

export default Announcement;
