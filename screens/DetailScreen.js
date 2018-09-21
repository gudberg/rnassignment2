import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
// Global styling declared in style
const globalStyle = require("./styles");

export default class DetailView extends React.Component {
  render() {
    const data = this.props.navigation.state.params;
    console.log(data.name.first_name);

    return (
      <View style={{ backgroundColor: "white" }}>
        <View style={globalStyle.information}>
          <Text style={globalStyle.text}>Detail Information</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Image source={{ uri: data.avatar }} style={globalStyle.imageStyle} />
        </View>
        <View style={globalStyle.names}>
          <Text>{data.name.first_name}</Text>
        </View>
        <View style={globalStyle.informationStyle}>
          <Text>{data.name.last_name}</Text>
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
