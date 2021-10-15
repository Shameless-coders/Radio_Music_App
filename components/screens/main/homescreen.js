import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import { firebase } from '../../../Firebase/firebase.js';

import Search from "./radioscreen.js";

class Home extends Component {
    render() {
      const user = firebase.auth().currentUser;  
      const email = user.email;

        return (
          <ScrollView style={styles.container}>
            <Text style={styles.greeting}>Welcome {email}!</Text>
            <View style={styles.displayInline}>
              <Text style={styles.subTitle}>Music</Text>
              <MaterialCommunityIcons style={styles.icon} name={'magnify'} />
            </View>
              <ScrollView style={styles.row} horizontal={true}>
                <Card containerStyle={styles.card}>
                  <Card.Image style={styles.cardimg} source={require('../../../assets/images/logo-2.png')}></Card.Image>
                  <Card.Divider />
                  <Card.Title style={styles.cardTitle}>Heartbreak Arcade</Card.Title>
                </Card>
                <Card containerStyle={styles.card}>
                  <Card.Image style={styles.cardimg} source={require('../../../assets/images/logo-2.png')}></Card.Image>
                  <Card.Divider />
                  <Card.Title style={styles.cardTitle}>Heartbreak Arcade</Card.Title>
                </Card>
                <Card containerStyle={styles.card}>
                  <Card.Image style={styles.cardimg} source={require('../../../assets/images/logo-2.png')}></Card.Image>
                  <Card.Divider />
                  <Card.Title style={styles.cardTitle}>Heartbreak Arcade</Card.Title>
                </Card>
              </ScrollView>
              <View style={styles.displayInline}>
                <Text style={styles.subTitle}>Radio</Text>
                <MaterialCommunityIcons style={styles.icon} name={'magnify'} />
              </View>
              <ScrollView style={styles.row} horizontal={true}>
                <Card containerStyle={styles.card}>
                  <Card.Image style={styles.cardimg} source={require('../../../assets/fulllogo.jpeg')}></Card.Image>
                  <Card.Divider />
                  <Card.Title style={styles.cardTitle}>91.5 FM</Card.Title>
                </Card>
                <Card containerStyle={styles.card}>
                  <Card.Image style={styles.cardimg} source={require('../../../assets/fulllogo.jpeg')}></Card.Image>
                  <Card.Divider />
                  <Card.Title style={styles.cardTitle}>92.5 FM</Card.Title>
                </Card>
                <Card containerStyle={styles.card}>
                  <Card.Image style={styles.cardimg} source={require('../../../assets/fulllogo.jpeg')}></Card.Image>
                  <Card.Divider />
                  <Card.Title style={styles.cardTitle}>93.5 FM</Card.Title>
                </Card>
              </ScrollView>
          </ScrollView>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#191C55',
    },
    greeting: {
      fontSize: 23,
      textAlign: 'center',
      marginTop: 25,
      marginBottom: 50,
      color: '#FFF',
    },
    displayInline: {
      flexDirection: 'row',
    },
    row: {
      marginBottom: 25,
    },
    subTitle: {
      color: '#FFF',
      fontSize: 18,
      marginLeft: 10,
    },
    icon: {
      fontSize: 25,
      color: '#FFF',
      marginLeft: 250,
    },
    card: {
      width: 200,
      borderColor: '#A6A7E7',
      backgroundColor: '#191C55',
    },
    cardimg: {
      resizeMode: "contain",
    },
    cardTitle: {
      color: '#A6A7E7',
      fontSize: 16,
    }
  });