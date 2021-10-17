import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Card, SearchBar } from "react-native-elements";

import SearchBody from "../../search/searchbody";

class Music extends Component {
  state = {
    searchMusic:'',
    musicData: [],
    musicFound: false
  };
  
  music_search = () => {
    const musicQuery = this.state.searchMusic.toLowerCase();

    const axios = require("axios");

    axios({
      method: 'GET',
      url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
      params: {q: musicQuery},
      headers: {
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': '28ef96556amsh63000c2e224a8cfp1806e9jsn1a1938144972'
      }
    }).then((response) => {
      console.log(response.data)

      var DATA = response.data;

      this.setState({
        musicData: DATA,
      });

    }).catch((error) => {
      console.error(error);
      this.setState({
        musicFound: false
      })
    })
  }

  renderContent = () => {
    if(this.state.musicData) {
      return (
        <SearchBody musicData={this.state.musicData} />
      );
    } else {
      <Text>Music Not Found!</Text>
    }
  }
  
    render() {
      const {musicData} = this.state;
        return (
            <View style={styles.container}>
              <SearchBar 
                containerStyle={{backgroundColor: '#A6A7E7', borderRadius: 15}}
                inputContainerStyle={{backgroundColor: '#191C55', borderRadius: 15}}
                placeholder="Search for a song..." 
                platform='default'
                value={this.state.searchMusic} 
                onChangeText={(searchMusic) => this.setState({ searchMusic })} 
                onSubmitEditing={this.music_search}
                music_search={this.music_search}
              />
              <View>
                {this.renderContent()}
              </View>
            </View>
        );
    }
}

export default Music;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#191C55',
    },
  });