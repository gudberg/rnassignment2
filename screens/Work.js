import React from 'react';
import { Text, View } from 'react-native';
// Global styling declared in style
const globalStyle = require('./styles');

const Work = ({ data }) => (
  <View>
    <View style={globalStyle.imageMarginizer}>
      <View style={globalStyle.informationStyle}>
        <Text>{data.work.address}</Text>
      </View>
      <View style={globalStyle.informationStyle}>
        <Text>{data.work.email}</Text>
      </View>
      <View style={globalStyle.informationStyle}>
        <Text>{data.work.phone_number}</Text>
      </View>
      <View style={globalStyle.informationStyle}>
        <Text>{data.work.company_name}</Text>
      </View>
    </View>
  </View>
);

export default Work;
