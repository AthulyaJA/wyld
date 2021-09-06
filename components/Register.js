

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

import Modal from "react-native-modal";
import {Actions} from 'react-native-router-flux'

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 


const Register = () => {
  const [isSelected, setSelection] = useState(false);
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalRegister, setModalRegister] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    // Alert.alert("You Accpetd our Termas & conditions")
  };
  const toggle = () => {
   //  setModalRegister(!isModalRegister);
   Actions.login()

    // Alert.alert("You Accpetd our Termas & conditions")
  };

  const goBack=()=>{
    Actions.pop();

  }

  return(

    <>
<View style={styles.container}>
<Image  style={{width:100,height:70}} source={require('./logo.png')}/>

<View >
      
     
         <View>
         <Text style={styles.modalterms}>Register</Text>
           <Text style={{marginTop:20,color:"white"}}>Register & become a Wyld Member</Text>
                            
                                           <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="First Name"
              placeholderTextColor = "#ffffff"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={password}/>
              
        </View> 
        <View style={styles.inputContainer}>
         <TextInput style={styles.inputs}
              placeholder="Last Name"
              placeholderTextColor = "#ffffff"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={password}/>
              
        </View> 
        <View style={styles.inputContainer}>
         <TextInput style={styles.inputs}
              placeholder="Phone Number"
              placeholderTextColor = "#ffffff"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={password}/>
              
        </View> 
        <View style={styles.inputContainer}>
         <TextInput style={styles.inputs}
              placeholder="Q ID / Passport Number"
              placeholderTextColor = "#ffffff"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={password}/>
              
        </View> 
        <View style={styles.inputContainer}>
         <TextInput style={styles.inputs}
              placeholder="Email Address"
              placeholderTextColor = "#ffffff"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={password}/>
              
        </View> 
        <View style={styles.inputContainer}>
         <TextInput style={styles.inputs}
              placeholder="Date of Birth"
              placeholderTextColor = "#ffffff"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={password}/>
              
        </View> 
        <View style={styles.inputContainer}>
         <TextInput style={styles.inputs}
              placeholder="Password"
              placeholderTextColor = "#ffffff"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={password}/>
              
        </View> 
        <View style={styles.inputContainer}>
         <TextInput style={styles.inputs}
              placeholder="Confirm Password"
              placeholderTextColor = "#ffffff"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={password}/>
              
        </View> 
                              
          <View style={styles.checkboxrow}>                  
        <CheckBox
    
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          tintColors={{ true: '#ffffff', false: 'black' }}
        />
        <Text style={styles.account} >Sign up for emails to get updates from wyld on</Text>
        </View>
        <Text style={styles.accountp} > products offers and your Member benefits</Text>
          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton,styles.top]} >
          <Text style={styles.loginText}>Join Us</Text>
        </TouchableHighlight>
      
        
        <View style={styles.accountmember}>
   <Text > <Text style={styles.account} > Already a member ?</Text> <Text style={styles.create} onPress={toggle}>Login</Text> </Text>
      </View>

     <View  style={styles.accountmember}>
     
        <Text style={{flex:1,justifyContent:"center",alignItems:"center",color:"white",marginTop:50}}>By your are logining in,you are agree</Text><Text style={[styles.account,styles.accountp]}> with Wyld's <Text style={{color: 'blue'}} onPress={toggleModal}>Terms & Conditions</Text></Text>
      </View> 
      </View> 
      
      </View>
      
      </View>
 {/* <Text style={{color:"white"}}>  <TouchableOpacity  onPress={goBack}>Athulya </TouchableOpacity></Text> */}
  
    </>
  )
    
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // marginTop:50,
     alignItems: 'center',
    backgroundColor: '#000000',
  },
  inputbox:{
      width:300,
      flex:1,
    
      backgroundColor:'rgba(255,255,255,0.3)',
      justifyContent:'center',
      alignItems:'center',
      justifyContent:"center",
      borderRadius:25,
      fontSize:16,

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
    marginLeft:10,
   
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
  width:350,
  borderRadius:30,
  marginLeft:10

 
},
loginButton: {
  backgroundColor: "#ffff00",
},
loginText: {
  color: '#000000',
  fontSize:15
},
login :{
    marginRight:200,
    marginTop:20
    
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
     },
     close:{
           marginTop:10,
           marginLeft:340
         }
         ,accountmember:{
          
           textAlign:"center",
           justifyContent: 'center',
          
         },
         checkboxrow:{
           flexDirection:'row',
           marginLeft:50
         }
         ,
         accountp:{
           
           color:"white",
         },
         checkboxrow:{
          flexDirection:'row',
          marginLeft:50
        }

});





export default Register;