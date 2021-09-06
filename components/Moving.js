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
  TouchableOpacity,
  Picker
} from 'react-native';
import {Actions } from 'react-native-router-flux'
import Register from './Register.js'
import Modal from "react-native-modal";
import DropDownPicker from 'react-native-dropdown-picker';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 


const image = { uri: "https://www.yogabasics.com/yogabasics2017/wp-content/uploads/2021/01/yoga-class.jpeg" };
const img={uri:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"}
const Moving=()=>{
    const [isSelected, setSelection] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        // Alert.alert("You Accpetd our Termas & conditions")
      };
    return(

        <>

<View style={styles.container}>

<ImageBackground source={image} resizeMode="cover" style={styles.image}>
<View style={styles.classButtonin}>
      <View style={{flexDirection:"row",marginLeft:10}}>

   <TouchableHighlight style={[styles.classButtonwyld,styles.top]}><Text style={{color:"white",marginLeft:10}}>WYLD</Text></TouchableHighlight>
    <TouchableHighlight style={[styles.classButtonwyld,styles.top]}><Text style={{color:"white",marginLeft:10}}>WYLD MIND</Text></TouchableHighlight>
    </View>
    
          <Text><Text style={{color:"white",fontSize:25,fontFamily:'sans-serif',marginLeft:10}}>Moving into Stillness 
          <MaterialCommunityIcons name="yoga" size={24} color="white" />  </Text> </Text>
    <View style={{flexDirection:"row"}}>
    <Text style={{fontSize:10,color:"white",marginTop:10,marginLeft:10}}>Feb 19 2021 07:00pm-Feb 26 08:55 pm  </Text>
    <TouchableHighlight style={[styles.classButtonwyldZ]}><Text style={{color:"#ff0000",marginLeft:16}}>WAITING</Text></TouchableHighlight>
    </View>

               <Text style={{color:"white",marginTop:10,marginLeft:10}}>CLASS INFO</Text>  
               <Text style={{color:"white",marginTop:10,marginLeft:15}}>A common feature request from developers familiar with thewebAcommon feature request from developers familiar with the web A common feature request from developers familiar with the web A common feature request from developers familiar with the web </Text>  
<Text style={{color:"white",marginTop:10,marginLeft:10}}>* This Class is sutaible for Beginners</Text>
        
<View style={[styles.classButtonwyldx,styles.top]}>
   <View style={{flexDirection:"row",marginTop:10}}><Text style={{color:"white",marginLeft:10,fontSize:20,marginTop:10}}>QAR 100.00  </Text>
   <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
                             <Text style={styles.loginText} onPress={toggleModal} >Book Now</Text>
                  
                    </TouchableOpacity>
                   </View>
                   <Text style={{color:"white",marginRight:180,fontSize:10}}>Sales end on Apr 25 2021 03:00pm</Text>
    </View>      
     
     <View style={[styles.classButtonwyldxx,styles.top]}>
         <View style={{flexDirection:"row"}}>
     <Image source={img} style={{ width: 50, height: 50, borderRadius: 37.5,marginLeft:30,marginTop:5 }} />
         <Text style={{color:"white",marginTop:10,marginLeft:10}}>Aymara</Text>
     </View>
     <Text style={{color:"white",fontSize:10,marginLeft:70}}>Orgarizser Of Moving Into Stillness</Text>
    <Text style={{color:"white",marginTop:30,marginLeft:15}}>this was good fasijhdhc gdchg hhcby jdbch hjh jhchhdhcbc hbhh cbdcdbhxhhxhh hhhhhhhhxhj  bxhxhxhxhxhxhx hch</Text>
     <Text style={{color:"#ffff00",marginTop:10,marginLeft:15}}>READ MORE</Text>
     </View>
     <View style={{flexDirection:"row"}}>
     <View style={[styles.classButtonwyldxxx,styles.top]}>
     <EvilIcons name="calendar" size={30} color="white"  style={{marginLeft:10,marginTop:10}}/>
     <Text style={{fontSize:13,marginTop:10,color:"white"}}>Add to Calendar</Text>
         </View>
         <View style={[styles.classButtonwyldxxxx,styles.top]}>
         <EvilIcons name="location" size={24} color="black" style={{marginLeft:30,marginTop:10}} />
        <Text style={{fontSize:13,marginTop:10}}>VIEW LOCATION</Text>
         </View>
     </View>
     </View>
</ImageBackground>
</View>
<View style={styles.modal}>
    <Modal isVisible={isModalVisible} 
  transparent={true} 
    //animationType="fade"
    >
        
        <Text>Your order</Text>

        <TouchableOpacity style={[styles. buttonContainerModal, styles.loginButtonModal]}>
                             <Text style={styles.loginText} >
                                 1. Wyld Mind Class * 1  QAR 200.00(1 day)


                                 Event              Basics
                                 Start Date  : Apr 25 2021 03:00pm
                                 End Date :Apr 25 2021 04:00pm
                                 Link:http://wyld.qa/class/basiss/30240000

                                 SUBTOTAL                    QAR 200.00

                                 TOTAL                        QAR 200.00
                             </Text>
                  
                    </TouchableOpacity>
                    <Text>PAYMENT METHODS</Text>
                    <Text>Payment Details</Text>

                    {/* <DropDownPicker 
                    items={[
                        {label:'item1',value:'item1'},
                        {label:'item1',value:'item2'}
                    ]}
                    defaultIndex={1}
                    
                    containerStyle={{height:40}}
                    onChangeItem={item=>console.log(item.value)}
                    /> */}

                    <Picker style={styles.pickerstyle} >
                        <Picker.Item label="Select" value="0"></Picker.Item>
                        <Picker.Item label="Credit Card" value="89"></Picker.Item>
                        <Picker.Item label="PayTm" value="90"></Picker.Item>
                    </Picker>
                    <Text>Card Number</Text>
                    <View style={styles.inputContainer}>
          
         <TextInput style={styles.inputs}
             // placeholder="Card Number"
              keyboardType="email-address"
             // underlineColorAndroid='transparent'
              placeholderTextColor = "#000000"
               />
              
     </View>
     <Text>Card Holder Namr</Text>
                    <View style={styles.inputContainer}>
          
         <TextInput style={styles.inputs}
              placeholder="Full Name Written on the card"
              keyboardType="email-address"
             // underlineColorAndroid='transparent'
              placeholderTextColor = "#000000"
               />
              
     </View>
     <View style={{flexDirection:"row"}}>
         <Text>Validity</Text>
         <Text style={{marginLeft:200}}>CVV</Text>
     </View>
     <View style={{flexDirection:"row",padding:2}}>

     <Picker style={styles.pickerstyle1} >
                        <Picker.Item label="Month" value="0"></Picker.Item>
                        <Picker.Item label="Credit Card" value="89"></Picker.Item>
                        <Picker.Item label="PayTm" value="90"></Picker.Item>
                    </Picker>
                    
                    <Picker style={styles.pickerstyle2} >
                        <Picker.Item label="Year" value="0"></Picker.Item>
                        <Picker.Item label="Credit Card" value="89"></Picker.Item>
                        <Picker.Item label="PayTm" value="90"></Picker.Item>
                    </Picker>
                    
                    <TextInput style={[styles.pickerstyle3]} />
                        
                    
     </View>
     <View style={{flexDirection:"row",marginTop:10}}>
     <CheckBox
    
    value={isSelected}
    onValueChange={setSelection}
    // style={{}}
    tintColors={{ true: '#000000', false: 'black' }}
  />
  <Text style={{marginLeft:10}}>SAVE CARD DETAILES</Text>
     </View>
         
    
   
   <TouchableOpacity style={[styles.buttonContainer1, styles.loginButton]}>
                             <Text style={{color:"white"}} onPress={toggleModal} >PAY NOW</Text>
                  
                    </TouchableOpacity>
                  
        </Modal>
</View>




</>

    )
}
export default Moving;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
    //   marginRight:1000
    },
    inputContainer: {
        borderBottomColor: '#1b1b1b',
       // backgroundColor: '#FFFFFF',
       backgroundColor:"#E5EBE8",
        borderRadius:10,
       // borderBottomWidth: 1,
        width:"80%",
        height:45,
        marginBottom:20,
         color:"#000000",
        flexDirection: 'row',
        alignItems:'center',
        
        marginTop:10
    },
    pickerstyle:{  
        height:45,  
        width: "80%",
        marginTop:10,  
        color: '#344953',  
        justifyContent: 'center', 
        borderRadius:10 ,
        padding:5
    }  ,

    pickerstyle1:{  
        height:45,  
        width: "80%",
        marginTop:10,  
        color: '#344953',  
        justifyContent: 'space-between', 
        borderRadius:10 ,
        padding:5,
        

    }  ,
    pickerstyle2:{  
        height:45,  
        width: "80%",
        marginTop:10,  
        color: '#344953',  
        justifyContent: 'space-between', 
        borderRadius:10 ,
        padding:5,
        marginLeft:3

        

    }  ,
    pickerstyle3:{  
        height:45,  
        width: "80%",
        marginTop:10,  
        backgroundColor: '#E5EBE8',  
        justifyContent: 'space-between', 
        borderRadius:10 ,
        padding:5,
        marginLeft:3
        

    }  ,
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
        //color:"white"
      
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
     marginTop:10,
      marginLeft:100,
      width:130,
      borderRadius:30,
      
    
     
    },
    buttonContainer1: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
        width:290,
        borderRadius:30,
        
      
       
      },
    buttonContainerModal: {
        height:205,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
       marginTop:10,
        // marginLeft:100,
        width:340,
        borderRadius:10,
        
      
       
      },
    loginButton: {
      backgroundColor: "#ffff00",
    },
    loginButtonModal: {
        backgroundColor: "#E2E1D6",
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
      height:750,
      
      // justifyContent: 'center',
      //  alignItems: 'center',
    //    marginBottom:50,
    marginTop:250,
    
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
    classButtonwyldZ: {
        backgroundColor: "rgba(255,0,0,0.3)",
        width:100,
        height:30,
        flexDirection: 'row',
        // justifyContent: 'center',
         alignItems: 'center',
        // marginBottom:50,
        fontSize:9,
        marginLeft:150,
        
        borderRadius:100,
      },
  
    
    classButtonwyldx: {
      backgroundColor: "#343635",
      width:400,
      height:100,
     
      // justifyContent: 'center',
       alignItems: 'center',
      // marginBottom:50,
      fontSize:9,
      marginLeft:3,
      marginTop:100,
      borderRadius:30,
    },
    classButtonwyldxx: {
        backgroundColor: "#343635",
        width:400,
        height:200,
    //    flexDirection:"row",
        // justifyContent: 'center',
        //  alignItems: 'center',
        // marginBottom:50,
        fontSize:9,
        // marginLeft:3,
        
        borderRadius:30,
      },

      classButtonwyldxxx: {
        backgroundColor: "#343635",
        width:160,
        height:50,
       flexDirection:"row",
        // justifyContent: 'center',
        //  alignItems: 'center',
        // marginBottom:50,
        fontSize:9,
        // marginLeft:3,
        
        borderRadius:10,
      },

      classButtonwyldxxxx: {
        backgroundColor: "#ffffff",
        width:160,
        height:50,
       flexDirection:"row",
        // justifyContent: 'center',
        //  alignItems: 'center',
        // marginBottom:50,
        fontSize:9,
        marginLeft:100,
        // marginLeft:3,
        
        borderRadius:10,
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
    backgroundColor:"#ffffff",
    borderRadius:20,
    width:370,
    
  
  
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
      backgroundColor:'#000000'
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
  