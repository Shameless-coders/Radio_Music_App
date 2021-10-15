import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Search from "../../SearchBar";
import Listing from "../../spotify_api/Listing";
import spotify_search from "../../spotify_api/spotify_search";
import spotify_token from "../../spotify_api/spotify_token";

const pageLimit = 10;

class Music extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     tracks: [],
  //     offset: 0,
  //     query: "",
  //     isFetching: false,
  //     isEmpty: false,
  //     spotify_token: null,
  //     isTokenFetching: false
  //   };
  // }

  // async componentDidMount() {
  //   await this.refreshToken();
  //   await this.loadNextPage();
  // }

  // async componentWillMount() {
  //   this.refreshToken();
  //   this.loadNextPage();
  // }

  // handleSearch(text) {
  //   this.setState(
  //     {
  //       isEmpty: false,
  //       query: text,
  //       offset: 0,
  //       tracks: []
  //     },
  //     () => {
  //       this.nextPage();
  //     }
  //   );
  // }

  // async loadNextPage() {
  //   const {
  //     tracks,
  //     offset,
  //     query,
  //     spotify_token,
  //     isFetching,
  //     isEmpty
  //   } = this.state;

  //   if(isFetching || isEmpty) {
  //     return;
  //   }

  //   this.setState({isFetching: true});

  //   const newTrack = await spotify_search({
  //     offset: offset,
  //     limit: pageLimit,
  //     q: query,
  //     spotify_token
  //   });

  //   if(newTrack.length === 0) {
  //     console.log("no songs found");
  //     this.setState({isEmpty: true});
  //   }

  //   this.setState({
  //     isFetching: false,
  //     tracks: [...tracks, ...newTrack],
  //     offset: offset + pageLimit
  //   });
  // }

  // async refreshToken() {
  //   this.setState({
  //     isTokenFetching: true
  //   });

  //   const newToken = await spotify_token();
  //   this.setState({
  //     spotify_token: newToken,
  //     isTokenFetching: false
  //   });
  // }

  // async handleEndReached() {
  //   await this.loadNextPage();
  // }

    render() {
      // const {query, tracks, isFetching} = this.state;

        return (
            <View style={styles.container}>
              {/* <Search 
                onChange={text => this.handleSearch(text)} 
                value={query}
              /> */}
              {/* {
                isFetching && tracks.length === 0 ? (ActivityIndicator) : 
                (<Listing 
                  items={tracks}
                  onEndReached={() => this.handleEndReached()}
                />)
              } */}
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