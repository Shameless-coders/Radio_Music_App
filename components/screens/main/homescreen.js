import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Card } from "react-native-elements";

class Home extends Component {
    render() {
        return (
            <View>
              <Card>
                <Card.Image source={require('../../../assets/images/logo-2.png')}></Card.Image>
                <Card.Title>Hello World!</Card.Title>
                <Card.Divider />
                <Card.FeaturedSubtitle>Listen to all your favourite music!</Card.FeaturedSubtitle>
            </Card>
            </View>
        );
    }
}

export default Home;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });