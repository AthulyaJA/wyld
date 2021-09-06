
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
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import {Actions } from 'react-native-router-flux'
import Register from './Register.js'
import Modal from "react-native-modal";

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const Login = ({navigation}) => {
    const [isSelected, setSelection] = useState(false);
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalRegister, setModalRegister] = useState(false);
   
      const onClickListener = (viewId) => {
       Alert.alert("Alert", "Button pressed "+viewId);
     }
   
     const log=()=>{
   
     }
     const toggleModal = () => {
       setModalVisible(!isModalVisible);
       // Alert.alert("You Accpetd our Termas & conditions")
     };
     const toggle = () => {
      //  setModalRegister(!isModalRegister);
      Actions.registerUp()

       // Alert.alert("You Accpetd our Termas & conditions")
     };
        
const Dash=()=>{
  Actions.dash()
}
     
  return(

    <>


<View  style={styles.container}>
     <Image  style={{width:100,height:70}} source={require('./logo.png')}/>
    
    <View style={styles.login}> 

                <Text style={styles.text}>Login</Text>
                <Text style={styles.intext}>Please  login in your account</Text>
    </View>
<View style={styles.mainContainer}>
    <View style={styles.inputContainer}>
           <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
         <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              placeholderTextColor = "#ffffff"
              onChangeText={email}/>
              <Feather name="mail" size={24} style={styles.inputIcon} color="white" />
     </View>

        <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                <TextInput style={styles.inputs}
                    placeholder="Password"
                    placeholderTextColor = "#ffffff"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={password}/>
                    <Feather name="lock" size={24} color="white" style={styles.inputIcon} />
        </View>
                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={Dash}>
                             <Text style={styles.loginText}>Login</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonContainer} onPress={() => onClickListener('restore_password')}>
                        <Text style={styles.fgpass}>Forgot your password?</Text>
                    </TouchableHighlight>
                  <Text > <Text style={styles.account} > Don't have an account ?</Text> <TouchableOpacity onPress={toggle} ><Text style={styles.create} >Create new now?</Text></TouchableOpacity> </Text>
        
  </View>
  <View style={styles.terms}>
        <Text style={styles.account}>By your are logining in,you are agree</Text><Text style={styles.account}> with Wyld's <Text style={{color: 'blue'}} onPress={toggleModal}>Terms & Conditions</Text></Text>
      </View>



<View style={styles.modal}>
      <Modal isVisible={isModalVisible}>
     
         <View  style={styles.modal}>
         <EvilIcons name="close" size={24} color="white"  style={styles.close} onPress={toggleModal}/>
           <Text style={styles.modalterms}>Terms & Conditions</Text>
                             <Text style={styles.modalcontent}> 
                           
                                <Text>
                                   while still providing a simpleAPIwhile still providing a simple APIwhile still providing a simple API
                                   while still providing a simple 
                                   </Text>
                                  
                                  
                                   <View style={styles.top}>
                                  <Text >
                                          while still providing a simple APIAPIwhile still providing a simple APIwhile still providing a simple API
                                          while still providing a simple APIjscdkfjdsfidjigvfdjvfdvf
                                   
                               </Text>
                               </View>


                                <View style={styles.top}>
                                   <Text >
                                          while still providing a simple APIAPIwhile still providing a simple APIwhile still providing a simple API                                          while still providing a simple 
                                   
                              </Text>
                                </View>
                                <View style={styles.top}>
                                   <Text >
                                           while still providing a simple APIAPIwhile still providing a simple APIwhile still providing a simple API
                                           while still providing a simple 
                                   
                               </Text>
                               </View>
                               
                              <Text >
                                         while still providing a simple APIdckdsfksdfkdofcd while still providing a simple APIAPIwhile still providing a simple API
                                          
                                          
                             </Text>
                              <View style={styles.top}>
                                  <Text >
                                          while still providing a simple APIAPIwhile still providing a simple APIwhile still providing a simple API
                                          while still providing a simple 
                                   
                                </Text>
                                </View>

                             
                             </Text>

        
           <TouchableHighlight style={[styles.buttonContainer, styles.loginButton,styles.top]} onPress={toggleModal}>
           <Text style={styles.loginText}>I Accept</Text>
        </TouchableHighlight>

         </View>
      </Modal>
       </View>
       </View>


             </>
             )
    
};







export default Login;

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


});