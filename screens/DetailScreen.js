import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
// Global styling declared in style
const globalStyle = require("./styles");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

//  This component render the detail view
export default class DetailView extends React.Component {
  render() {
    const data = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <View style={globalStyle.information}>
          <Text style={globalStyle.text}>Detail Information</Text>
        </View>
        <View>
          <Image source={{ uri: data.avatar }} style={globalStyle.imageStyle} />
        </View>
        <View style={globalStyle.informationStyle}>
          <Text>
            {" "}
            {data.name.first_name} {data.name.last_name}
          </Text>
        </View>
        <View style={globalStyle.informationStyle}>
          <Text>{data.home.address}</Text>
        </View>
        <View style={globalStyle.informationStyle}>
          <Text>{data.home.email}</Text>
        </View>
      </View>
    );
  }
}
