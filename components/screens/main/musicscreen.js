import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';

class Music extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text>Music Streaming!</Text>
            </View>
        );
    }
}

export default Music;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });