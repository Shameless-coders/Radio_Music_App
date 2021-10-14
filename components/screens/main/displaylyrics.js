import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Placeholder from 'rn-placeholder';

export default function Lyrics(props){
    const displayLyrics = (props) => {
        
        console.log(props);
            return(
                <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <Text style={styles.songname}>{props.songname}</Text>
                    <Text style={styles.artist}>{props.artistname}</Text>
                    <View style={styles.lyricscontainer}>
                    
                      <Text style={styles.lyrics}>
                            {props.lyrics}
                            
                      </Text>
            
                        
                    </View>
                </ScrollView>
                </View>

            );
           
        
    }
    return(
        <>
        {displayLyrics(props)}
        </>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
    },
    scroll:{
      width:'100%',
    },
    songname:{
        fontStyle:'italic',
        fontSize:30,
        backgroundColor:'#000000',
        color:'#fff',
        textAlign:"center",
    },
    artist:{
        fontStyle:'italic',
        fontSize:30,
        backgroundColor:'#000000',
        color:'#fff',
        textAlign:"center",
    },
    lyrics:{
       backgroundColor:'#000000d0',
       fontFamily:'cursive',
       marginTop:30,
       textAlign:"center",
       color:'#fff',
       fontSize: 20,
    },
  });