import React, { Component, useState } from 'react';
import { Feather,EvilIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import {Actions } from 'react-native-router-flux'
import Register from './Register.js'
import Modal from "react-native-modal";

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 





  function MemberShip() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  const move=()=>{
      Actions.move()
  }
  function Mind(){
    return(
      <View></View>
    )
  }
  function Pool(){
    return(
      <View></View>
    )
  }
  function Body(){
    return(
      <View></View>
    )
  }

  function ClassScreen() {

    
    return (

      <View style={{flex:1,backgroundColor:"#000000"}}>
      <View style={styles.mainclass}>
        <View style={styles.buttonleft}>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton,styles.top]}
  
>
  <Text>Wyld Mind</Text>
</TouchableHighlight>
</View>
<View tyle={styles.buttonleft}>
<TouchableHighlight style={[styles.buttonContainer, styles.loginButton,styles.top]}
  
>
  <Text>Wyld Pool</Text>
</TouchableHighlight>
</View>
<View tyle={styles.buttonleft}>
<TouchableHighlight style={[styles.buttonContainer, styles.loginButton,styles.top]}
  
>
  <Text>Wyld Body</Text>
</TouchableHighlight>
</View>
      
      </View>
      <ScrollView>
      <View style={styles.classbody}>
        <TouchableHighlight style={[styles.classButton,styles.top]}>
        <Text style={{color:"white",fontSize:20,fontFamily:'sans-serif'}}>19 April 2021</Text>
      </TouchableHighlight>
      <View style={styles.classButtonin}>
         <View style={{flexDirection:"row",marginLeft:10}}>

        <TouchableHighlight style={[styles.classButtonwyld,styles.top]}><Text style={{color:"white",marginLeft:10}}>WYLD</Text></TouchableHighlight>
        <TouchableHighlight style={[styles.classButtonwyld,styles.top]}><Text style={{color:"white",marginLeft:10}}>WYLD MIND</Text></TouchableHighlight>
        </View>
        
              <Text><Text style={{color:"white",fontSize:25,fontFamily:'sans-serif'}} onPress={move}>Moving into Stillness 
              <MaterialCommunityIcons name="yoga" size={24} color="white" />  </Text> <Text style={{color:"#ffff00",marginLeft:400,fontSize:20}}>                  150 <Text style={{fontSize:10}}>QAR </Text></Text></Text>
        <Text style={{color:"#ffff00",marginLeft:340,fontSize:10}}>10 Slots left</Text>
        <Text style={{fontSize:10,color:"white"}}>Feb 19 2021 07:00pm-Feb 26 08:55 pm</Text>
        
        <Text><Text style={{color:"white",fontSize:25,fontFamily:'sans-serif'}}>Body stretching
              <MaterialCommunityIcons name="yoga" size={24} color="white" />  </Text> <Text style={{color:"#ffff00",marginLeft:400,fontSize:20}}>                  150 <Text style={{fontSize:10}}>QAR </Text></Text></Text>
        <Text style={{color:"#ffff00",marginLeft:340,fontSize:10}} >10 Slots left</Text>
        <Text style={{fontSize:10,color:"white"}}>Feb 19 2021 07:00pm-Feb 26 08:55 pm</Text>
        <Text><Text style={{color:"white",fontSize:25,fontFamily:'sans-serif'}}>Body Building
              <MaterialCommunityIcons name="yoga" size={24} color="white" />  </Text> <Text style={{color:"#ffff00",marginLeft:400,fontSize:20}}>                  150 <Text style={{fontSize:10}}>QAR </Text></Text></Text>
        <Text style={{color:"#ffff00",marginLeft:340,fontSize:10}} >10 Slots left</Text>
        <Text style={{fontSize:10,color:"white"}}>Feb 19 2021 07:00pm-Feb 26 08:55 pm</Text>
                       
         </View>
         
      </View>
      <View style={styles.classbody}>
        <TouchableHighlight style={[styles.classButton,styles.top]}>
        <Text style={{color:"white",fontSize:20,fontFamily:'sans-serif'}}>19 April 2021</Text>
      </TouchableHighlight>

      
      <View style={styles.classButtonin}>
         <View style={{flexDirection:"row",marginLeft:10}}>

        <TouchableHighlight style={[styles.classButtonwyld,styles.top]}><Text style={{color:"white",marginLeft:10}}>WYLD</Text></TouchableHighlight>
        <TouchableHighlight style={[styles.classButtonwyld,styles.top]}><Text style={{color:"white",marginLeft:10}}>WYLD MIND</Text></TouchableHighlight>
        </View>
        
              <Text><Text style={{color:"white",fontSize:25,fontFamily:'sans-serif'}}>Moving into Stillness 
              <MaterialCommunityIcons name="yoga" size={24} color="white" />  </Text> <Text style={{color:"#ffff00",marginLeft:400,fontSize:20}}>                  150 <Text style={{fontSize:10}}>QAR </Text></Text></Text>
        <Text style={{color:"#ffff00",marginLeft:340,fontSize:10}}>10 Slots left</Text>
        <Text style={{fontSize:10,color:"white"}}>Feb 19 2021 07:00pm-Feb 26 08:55 pm</Text>
               
        <Text><Text style={{color:"white",fontSize:25,fontFamily:'sans-serif'}}>Body stretching
              <MaterialCommunityIcons name="yoga" size={24} color="white" />  </Text> <Text style={{color:"#ffff00",marginLeft:400,fontSize:20}}>                  150 <Text style={{fontSize:10}}>QAR </Text></Text></Text>
        <Text style={{color:"#ffff00",marginLeft:340,fontSize:10}} >10 Slots left</Text>
        <Text style={{fontSize:10,color:"white"}}>Feb 19 2021 07:00pm-Feb 26 08:55 pm</Text>
        <Text><Text style={{color:"white",fontSize:25,fontFamily:'sans-serif'}}>Body Building
              <MaterialCommunityIcons name="yoga" size={24} color="white" />  </Text> <Text style={{color:"#ffff00",marginLeft:400,fontSize:20}}>                  150 <Text style={{fontSize:10}}>QAR </Text></Text></Text>
        <Text style={{color:"#ffff00",marginLeft:340,fontSize:10}} >10 Slots left</Text>
        <Text style={{fontSize:10,color:"white"}}>Feb 19 2021 07:00pm-Feb 26 08:55 pm</Text>        
         </View>
         
         
      
      </View>
      <View style={styles.classbody}>
        <TouchableHighlight style={[styles.classButton,styles.top]}>
        <Text style={{color:"white",fontSize:20,fontFamily:'sans-serif'}}>19 April 2021</Text>
      </TouchableHighlight>

      
      <View style={styles.classButtonin}>
         <View style={{flexDirection:"row",marginLeft:10}}>

        <TouchableHighlight style={[styles.classButtonwyld,styles.top]}><Text style={{color:"white",marginLeft:10}}>WYLD</Text></TouchableHighlight>
        <TouchableHighlight style={[styles.classButtonwyld,styles.top]}><Text style={{color:"white",marginLeft:10}}>WYLD MIND</Text></TouchableHighlight>
        </View>
        
              <Text><Text style={{color:"white",fontSize:25,fontFamily:'sans-serif'}}>Moving into Stillness 
              <MaterialCommunityIcons name="yoga" size={24} color="white" />  </Text> <Text style={{color:"#ffff00",marginLeft:400,fontSize:20}}>                  150 <Text style={{fontSize:10}}>QAR </Text></Text></Text>
        <Text style={{color:"#ffff00",marginLeft:340,fontSize:10}} >10 Slots left</Text>
        <Text style={{fontSize:10,color:"white"}}>Feb 19 2021 07:00pm-Feb 26 08:55 pm</Text>
                       
        <Text><Text style={{color:"white",fontSize:25,fontFamily:'sans-serif'}}>Body stretching
              <MaterialCommunityIcons name="yoga" size={24} color="white" />  </Text> <Text style={{color:"#ffff00",marginLeft:400,fontSize:20}}>                  150 <Text style={{fontSize:10}}>QAR </Text></Text></Text>
        <Text style={{color:"#ffff00",marginLeft:340,fontSize:10}} >10 Slots left</Text>
        <Text style={{fontSize:10,color:"white"}}>Feb 19 2021 07:00pm-Feb 26 08:55 pm</Text>
        <Text><Text style={{color:"white",fontSize:25,fontFamily:'sans-serif'}}>Body Building
              <MaterialCommunityIcons name="yoga" size={24} color="white" />  </Text> <Text style={{color:"#ffff00",marginLeft:400,fontSize:20}}>                  150 <Text style={{fontSize:10}}>QAR </Text></Text></Text>
        <Text style={{color:"#ffff00",marginLeft:340,fontSize:10}} >10 Slots left</Text>
        <Text style={{fontSize:10,color:"white"}}>Feb 19 2021 07:00pm-Feb 26 08:55 pm</Text>
                       
                       
         </View>
         </View>
         <View style={styles.classbody}>
        <TouchableHighlight style={[styles.classButton,styles.top]}>
        <Text style={{color:"white",fontSize:20,fontFamily:'sans-serif'}}>19 April 2021</Text>
      </TouchableHighlight>

      
      <View style={styles.classButtonin}>
         <View style={{flexDirection:"row",marginLeft:10}}>

        <TouchableHighlight style={[styles.classButtonwyld,styles.top]}><Text style={{color:"white",marginLeft:10}}>WYLD</Text></TouchableHighlight>
        <TouchableHighlight style={[styles.classButtonwyld,styles.top]}><Text style={{color:"white",marginLeft:10}}>WYLD MIND</Text></TouchableHighlight>
        </View>
        
  <Text>     <Text style={{color:"white",fontSize:25,fontFamily:'sans-serif'}}>Moving into Stillness  
              <MaterialCommunityIcons name="yoga" size={24} color="white" />  </Text> <Text style={{color:"#ffff00",marginLeft:400,fontSize:20}}>                    150 <Text style={{fontSize:10}}>QAR </Text></Text></Text>
        <Text style={{color:"#ffff00",marginLeft:340,fontSize:10}}>10 Slots left</Text>
        <Text style={{fontSize:10,color:"white"}}>Feb 19 2021 07:00pm-Feb 26 08:55 pm</Text>

                <Text><Text style={{color:"white",fontSize:25,fontFamily:'sans-serif'}}>Body stretching
              <MaterialCommunityIcons name="yoga" size={24} color="white" />  </Text> <Text style={{color:"#ffff00",marginLeft:400,fontSize:20}}>                  150 <Text style={{fontSize:10}}>QAR </Text></Text></Text>
        <Text style={{color:"#ffff00",marginLeft:340,fontSize:10}} >10 Slots left</Text>
        <Text style={{fontSize:10,color:"white"}}>Feb 19 2021 07:00pm-Feb 26 08:55 pm</Text>
        <Text><Text style={{color:"white",fontSize:25,fontFamily:'sans-serif'}}>Body Building
              <MaterialCommunityIcons name="yoga" size={24} color="white" />  </Text> <Text style={{color:"#ffff00",marginLeft:400,fontSize:20}}>                  150 <Text style={{fontSize:10}}>QAR </Text></Text></Text>
        <Text style={{color:"#ffff00",marginLeft:340,fontSize:10}} >10 Slots left</Text>
        <Text style={{fontSize:10,color:"white"}}>Feb 19 2021 07:00pm-Feb 26 08:55 pm</Text>
                              
         </View>
         </View>
      </ScrollView>
      </View>
    );}
  
  function Appoinments() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>

        
      </View>
    );
  }
  function Store() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"#000000" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();
  const MyTheme={
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      primary:'rgb(255,45,85)'
    }
  }
  function Dashboard() {

    return (
      <View style={{flex:1,backgroundColor:"#000000"}}>
        
      <NavigationContainer theme={MyTheme} style={{flex:1,backgroundColor:"#000000"}}>
       <Tab.Navigator
        
        theme={MyTheme}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'membership') {
              iconName = focused
                ? 'dumbbell'
                : 'dumbbell';
            } else if (route.name === 'class') {
              iconName = focused ? 'yoga' : 'yoga';
            }
            else if (route.name === 'appoinments') {
              iconName = focused ? 'calendar-month' : 'calendar-month';
            }
            else if (route.name === 'store') {
              iconName = focused ? 'cart' : 'cart';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ffff00',
          tabBarInactiveTintColor: 'gray',
         

        })}
      >
          <Tab.Screen name="membership" component={MemberShip}  hideNavBar={true}/>
          <Tab.Screen name="class" component={ClassScreen}  hideNavBar={true}/>
          <Tab.Screen name="appoinments" component={Appoinments}  hideNavBar={true}/>
          <Tab.Screen name="store" component={Store} hideNavBar={true} />
         


        </Tab.Navigator>
      </NavigationContainer>
      </View>
    );
  }
export default Dashboard;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
    },
    inputContainer: {
        borderBottomColor: '#1b1b1b',
       // backgroundColor: '#FFFFFF',
       backgroundColor:"#1b1b1b",
        borderRadius:30,
        borderBottomWidth: 1,
        width:350,
        height:45,
        marginBottom:20,
         color:"#000000",
        flexDirection: 'row',
        alignItems:'center',
        marginLeft:10
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
        color:"white"
      
    },
    inputIcon:{
      width:30,
      height:30,
      marginRight:25,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:130,
      borderRadius:30,
      
    
     
    },
    loginButton: {
      backgroundColor: "#ffff00",
    },
    classButton: {
      backgroundColor: "#444947",
      width:450,
      height:45,
      flexDirection: 'row',
      // justifyContent: 'center',
       alignItems: 'center',
      marginBottom:20,
      fontSize:30
    //  borderRadius:30,
    },
    classButtonin: {
      backgroundColor: "#131414",
      width:450,
      height:400,
      
      // justifyContent: 'center',
      //  alignItems: 'center',
       marginBottom:50,
    
      fontSize:30
    //  borderRadius:30,
    },
    classButtonwyld: {
      backgroundColor: "#343635",
      width:100,
      height:20,
      flexDirection: 'row',
      // justifyContent: 'center',
       alignItems: 'center',
      // marginBottom:50,
      fontSize:9,
      marginLeft:3,
      marginTop:100,
      borderRadius:100,
    },
    classButtonwyldx: {
      backgroundColor: "#343635",
    //   width:400,
    //   height:1000,
      flexDirection: 'row',
      // justifyContent: 'center',
       alignItems: 'center',
      // marginBottom:50,
      fontSize:9,
      marginLeft:3,
      marginTop:100,
      borderRadius:30,
    },
    loginText: {
      color: '#000000',
      fontSize:15
    },
    login :{
  marginRight:200,
  
    },
    text:{
      fontSize:30,
      color:'#fff8dc'
    }
    ,
    intext:{
      color:'#fff8dc'
    },
    mainContainer:{
      marginTop:60
    },
    fgpass:{
      
      color:"#ffff00",
      marginLeft:150,
      
    }
    ,
    create:{
      color:"#ffff00",
    },
   account:{
  color:"#ffffff"
   },terms:{
     marginTop:100,
     justifyContent: 'center',
   },
   modalbut:{
    backgroundColor: "#ffff00",
   },
   modal:{
    backgroundColor:"#0f1110",
    borderRadius:20,
    marginLeft:10
    ,width:370,
    
  
  
   },
   modalcontent:{
     color:"#E2E8E5",
     marginTop:20,
     fontSize:17,
     justifyContent:'center',
     
  
  
   },
   modalterms:{
     fontSize:20,
     color:"#E2E8E5",
     marginLeft:15
   },
   top:{
     marginTop:30
   }
   ,
   close:{
     marginTop:10,
     marginLeft:340
   }
   ,accountmember:{
     color:"white",
     textAlign:"center",
     justifyContent: 'center',
     marginLeft:100
   },
   checkboxrow:{
     flexDirection:'row',
     marginLeft:50
   }
   ,
   accountp:{
     marginLeft:80,
     color:"white",
   },
  
  
    container: {
      
     
      zIndex: 2,
    },
    shadow: {
      
     
      shadowRadius: 8,
      shadowOpacity: 0.2,
      elevation: 4,
    },
    menu: {
     
      paddingTop: 8,
      paddingBottom: 16,
    },
    titleContainer: {
      alignItems: 'center',
     
      borderRadius: 21,
      marginRight: 9,
      paddingHorizontal: 10,
      paddingVertical: 3,
    },
    containerShadow: {
      shadowColor: 'black',
      
      shadowRadius: 4,
      shadowOpacity: 0.1,
      elevation: 1,
    },
    menuTitle: {
      fontWeight: '600',
      fontSize: 14,
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
    buttonleft:{
      marginLeft:30,
      borderRadius:30,
      
    },
    mainclass:{
      flexDirection:'row',
      
    },
    classbody:{
      flex:1,
      backgroundColor:'#000000',
      height:700
    },
    
      image: {
        flex: 1,
        justifyContent: "center"
      },
      text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        width:500,
        height:100,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
      },
      container: {
        flex: 1,
      },
    });
  