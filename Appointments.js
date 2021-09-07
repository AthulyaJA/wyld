

import React, { Component, useState } from 'react';
import { Feather,EvilIcons } from '@expo/vector-icons';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  ButtonGroup,
  Alert,Linking,CheckBox, ScrollView,Block,Animated,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { Tile } from 'react-native-elements';

import Modal from "react-native-modal";
import {Actions} from 'react-native-router-flux'

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const img={uri:"https://pbs.twimg.com/media/DQfOrY4XUAAcfOR.jpg"}
const img1={uri:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"}
const img2={uri:"https://wallpapercave.com/wp/wp3931257.jpg"}
const Appoinments=()=>{


    return(
        <>

<ScrollView>
    <View style={styles.container}>
           <Text style={{color:"#ffff00",fontSize:30,marginTop:40,justifyContent:"center",alignItems:"center",marginLeft:20}}>APPOINMENTS</Text>

           <View>
                <Image  source={img} style={{ width: 370, height: 300,marginTop:70,marginLeft:30,borderRadius:20}} title="jcd" >
               
               
                </Image>
                <View style={[styles.classButtonwyldxxx,styles.top]}>
     <Text style={{fontSize:13,marginLeft:10,marginTop:20,color:"white"}}>PERSONAL TRAINING-10 SESSIONS</Text>
        <Text style={{color:"white",marginLeft:10,marginTop:20}}>PRICE 150.00</Text>
        <View style={{flexDirection:"row",marginTop:5,marginLeft:10}}>
        <Image source={img1} style={{ width: 20, height: 20, borderRadius: 37.5,marginTop:5 }} />
        <Image source={img} style={{ width: 20, height: 20, borderRadius: 37.5,marginTop:5 }} />
        <Image source={img1} style={{ width: 20, height: 20, borderRadius: 37.5,marginTop:5 }} />
        <Image source={img} style={{ width: 20, height: 20, borderRadius: 37.5,marginTop:5 }} />
        <Image  style={{ width: 20, height: 20, borderRadius: 37.5,marginTop:5,backgroundColor:"white",fontColor:"black" }} featured
  caption="+7"/>
  <Text style={{color:"white",marginTop:5 ,marginLeft:5}}>+7 More</Text>
       
            </View>
         </View>
           </View>
           <View>
                <Image  source={img2} style={{ width: 370, height: 300,marginTop:70,marginLeft:30,borderRadius:20}} title="jcd" >
               
               
                </Image>
                <View style={[styles.classButtonwyldxxx,styles.top1]}>
     <Text style={{fontSize:13,marginLeft:10,marginTop:20,color:"white"}}>Life coaching-1 SESSIONS</Text>
      
        <Text style={{color:"white",marginLeft:10,marginTop:20}}>PRICE 150.00</Text>
        <View style={{flexDirection:"row",marginTop:5,marginLeft:10}}>
        <Image source={img1} style={{ width: 20, height: 20, borderRadius: 37.5,marginTop:5 }} />
        <Image source={img} style={{ width: 20, height: 20, borderRadius: 37.5,marginTop:5 }} />
        <Image source={img1} style={{ width: 20, height: 20, borderRadius: 37.5,marginTop:5 }} />
        <Image source={img} style={{ width: 20, height: 20, borderRadius: 37.5,marginTop:5 }} />
        <Image  style={{ width: 20, height: 20, borderRadius: 37.5,marginTop:5,backgroundColor:"white",fontColor:"black" }} featured
  caption="+7"/>
  <Text style={{color:"white",marginTop:5 ,marginLeft:5}}>+7 More</Text>
       
            </View>
         </View>
           </View>
                <View >

                

                 </View>
    </View>

</ScrollView>

        </>
    )
}

export default Appoinments;


const styles = StyleSheet.create({
    container: {
  
    marginTop:20,
    
    backgroundColor: '#000000',
    width:500,
    height:1100
    },
    classButtonwyldxxx: {
        backgroundColor: "#343633",
        width:370,
        height:120,
       //flexDirection:"row",
        // justifyContent: 'center',
        //  alignItems: 'center',
        // marginBottom:50,
        fontSize:9,
         marginLeft:25,
        
        borderRadius:10,
      },
top1:{
    marginBottom:50
}
})