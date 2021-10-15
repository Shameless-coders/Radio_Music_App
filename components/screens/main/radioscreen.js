import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
  Alert,
  Linking,
  Image,
} from "react-native";
import { style } from "styled-system";

const Search = () => {
  const [country, setCountry] = useState("Canada");
  const URL = `https://radio-browser.p.rapidapi.com/json/stations/search?country=${country}&reverse=false&offset=0&limit=15&hidebroken=false`;

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // const [title, setTitle] = useState([]);
  // const [description, setDescription] = useState([]);
  // const [text, onChangeText] = React.useState("Useless Text");

  useEffect(() => {
    fetch(URL, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "radio-browser.p.rapidapi.com",
        "x-rapidapi-key": "93929a08ebmsh1d9489f52854d26p1ca74djsna9c4054aea22",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        // console.log(json);
        // setTitle(json.title);
        // setDescription(json.description);
      })
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  }, [URL]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={styles.logoImg}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#fff"
          onChangeText={(val) => setCountry(val)}
          style={styles.input}
        />
      </View>

      <Text style={styles.textStylingChannels}>Channels</Text>
      <FlatList
        data={data}
        key={data.changeuuid}
        // keyExtractor={({ id }, index) => id}
        keyExtractor={(value, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.stationsContainer} key={item.id}>
            <View>
              <Image
                source={{
                  uri: item.favicon
                    ? item.favicon
                    : "https://www.iconsdb.com/icons/preview/orange/tabletop-radio-xxl.png",
                }}
                style={{ width: 90, height: 90 }}
              />
            </View>
            <View style={styles.stationsTextContainer}>
              <Text style={styles.stationText}>
                {item.name} {"\n"}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2A6B",
    justifyContent: "center",
    color: "#fff",
    paddingLeft: 15,
  },
  input: {
    backgroundColor: "#242c59",
    color: "#fff",
    width: 250,
    margin: 15,
    height: 40,
    borderRadius: 10,
    borderColor: "#d4cfcf",
    borderWidth: 1,
    alignContent: "center",
    paddingLeft: 10,
  },
  stationsContainer: {
    color: "#F5F5F5",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  logoImg: {
    height: 75,
    width: 75,
  },
  searchContainer: {
    flexDirection: "row",
    paddingTop: 20,
  },
  textStylingChannels: {
    color: "#c4c3c3",
    marginTop: 10,
    fontSize: 22,
  },
  stationsTextContainer: {
    marginLeft: 15,
    fontSize: 10,
  },

  stationText: {
    color: "#fff",
    fontSize: 15,
    flexWrap: "wrap",
    width: 250,
  },
});

export default Search;
