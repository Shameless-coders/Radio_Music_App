import React, {Component} from "react";
import { StyleSheet, FlatList } from "react-native";

import { Card } from "react-native-elements";

const SearchBody = () => {
    // const musicData = this.musicData;
    return (
        <Card>
            {/* <Card.Image source={{uri: musicData.artist.picture}} /> */}
            {/* <Card.Title style={styles.featureTxt}>{musicData.title}</Card.Title> */}
        </Card>
    );
}

export default SearchBody;

const styles = StyleSheet.create({
    featureTxt: {
        color: '#000',
        fontSize: 18,
    }
});