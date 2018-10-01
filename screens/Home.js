import React from 'react';
import { Text, View } from 'react-native';
// Global styling declared in style
const globalStyle = require('./styles');

const Home = ({ data }) => (
  <View>
    <View style={globalStyle.imageMarginizer}>
      <View style={globalStyle.informationStyle}>
        <Text>{data.home.address}</Text>
      </View>
      <View style={globalStyle.informationStyle}>
        <Text>{data.home.email}</Text>
      </View>
      <View style={globalStyle.informationStyle}>
        <Text>{data.home.phone_number}</Text>
      </View>
    </View>
  </View>
);

export default Home;
