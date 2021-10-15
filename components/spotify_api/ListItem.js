import React, { Component } from "react";
import { Card } from "react-native-elements";

export default class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card>
                <Card.Image source={{uri: this.props.item.imageUri}} />
                <Card.Divider />
                <Card.Title>{this.props.item.title}</Card.Title>
                <Card.FeaturedSubtitle>{this.props.item.album + "-" + this.props.item.artist}</Card.FeaturedSubtitle>
            </Card>
        );
    }
}