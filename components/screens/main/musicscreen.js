import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from "react-native-elements";

class Music extends Component {

  state={
    search:'',
  };

  updateSearch = (search) => {
    this.setState({search});
  };
  
    render() {
      const {search} = this.state;

        return (
            <View style={styles.container}>
              <SearchBar placeholder="Search for a song" onChangeText={this.updateSearch} value={search} />
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
    },
  });