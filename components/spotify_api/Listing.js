import React, { Component } from "react";
import { FlatList } from "react-native-gesture-handler";

import ListItem from "./ListItem";

export default ({items, onEndReached}) => {
    <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={onEndReached}
    />
};