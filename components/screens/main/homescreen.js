import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Card } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Card containerStyle={styles.card}>
                <Card.Image source={require('../../../assets/images/logo-2.png')}></Card.Image>
                <Card.Divider />
                <Card.Title>Hello World!</Card.Title>
              </Card>
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
    card: {
      backgroundColor: '#69DDFF',
    }
  });