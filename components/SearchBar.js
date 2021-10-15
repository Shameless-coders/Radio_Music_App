import React, { Component } from "react";
import { SearchBar } from "react-native-elements";

class Search extends Component {
    constructor({ txt }) {
        super();

        this.state = {
            text: txt || "",
        };
    }

    handleUserInput(userInputText) {
        const {onChange} = this.props;

        this.setState({
            text: userInputText,
        }, () => {
            onChange && onChange(userInputText);
        });
    }

    render() {
        const {text} = this.state;

        return (
            <SearchBar
                placeholder="Look for a song"
                onChangeText={userInputText => this.handleUserInput(userInputText)}
                value={text}
            />
        );
    }
}

export default Search;