import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Lyrics from './displaylyrics';
import axios from "axios";

const songname = "Rose Garden";
const artistname = "Lynn Anderson";
let data ="";

export default function displayLyrics(){
        const [song, setSong] = useState('Rose Garden');
        const [artist, setArtist] = useState('Lynn Anderson');
    
        const [lyrics, setlyrics] = useState('');
        useEffect(() => {
            getLyrics();
        }, []);
        const getLyrics = () => {
            axios
              .get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
              .then(function (response) {
                // handle success
                //alert(JSON.stringify(response.data));
                data = response.data.lyrics;
                //console.log(data);
                setlyrics(data);
              })
              .catch(function (error) {
                // handle error
                console.log(error.message);
              });
              
          };
        return (
          <View>
          <TextInput
          placeholder="Song Name"
          placeholderTextColor="#fff"
          onChangeText={(val) => setSong(val)}
          style={styles.input}
        />
        <TextInput
          placeholder="Artist Name"
          placeholderTextColor="#fff"
          onChangeText={(val) => setArtist(val)}
          style={styles.input}
        />
        
            <Lyrics lyrics={lyrics} songname={song} artistname={artist}/>
            </View>
        );
    
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: "#242c59",
    color: "#fff",
    width: 250,
    margin: 15,
    height: 40,
    borderRadius: 10,
    borderColor: "#d4cfcf",
    borderWidth: 1,
    alignContent: "center",
    paddingLeft: 10,
    
  },

});



  
  
