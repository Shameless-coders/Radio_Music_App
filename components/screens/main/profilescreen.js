import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {firebase} from '../../../Firebase/firebase';

const Profile = ({navigation, route}) => {

  const user = firebase.auth().currentUser;
  const email = user.email;
  const signOut = () => {
   firebase.auth().signOut();
  }

  const deleteAccount = () => {
      return user.delete();
        }
  
        return (
          <View>
          <TouchableOpacity style={styles.ButtonLogin} onPress={signOut} >
          <Text style={{ color:'#fff',fontSize:20,}}>Log Out</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonLogin} onPress={deleteAccount} >
          <Text style={{ color:'#fff',fontSize:20,}}>Delete Account</Text>
          </TouchableOpacity>
          <Text>{email}</Text>
          </View>
        );
    }


export default Profile;



  const styles = StyleSheet.create({

   ButtonLogin:{
     width:'50%',

     height:52,
     backgroundColor:'#4632a1',
     borderRadius:50,
     marginTop:20,
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
   },




  })
