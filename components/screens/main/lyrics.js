import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Lyrics from './displaylyrics';
import axios from "axios";

const songname = "Rose Garden";
const artistname = "Lynn Anderson";
let data ="";

export default function displayLyrics(){
    
        const [lyrics, setlyrics] = useState('');
        useEffect(() => {
            getLyrics();
        }, []);
        const getLyrics = () => {
            axios
              .get(`https://api.lyrics.ovh/v1/${artistname}/${songname}`)
              .then(function (response) {
                // handle success
                //alert(JSON.stringify(response.data));
                data = response.data.lyrics;
                console.log(data);
                setlyrics(data);
              })
              .catch(function (error) {
                // handle error
                console.log(error.message);
              });
              
          };
        return (
            <Lyrics lyrics={lyrics} songname={songname} artistname={artistname}/>
        );
    
}



  
  
