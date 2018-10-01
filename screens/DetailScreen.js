import React from 'react';
import {
  Text, View, Image, StyleSheet,
} from 'react-native';
import SwitchScreen from './SwitchScreen';
// Global styling declared in style
const globalStyle = require('./styles');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//  This component is dumb component and
// renders the image and the name and then sends
// data as a props to SwitchScreen which takes care of toggling the Work.js and Home.js
const DetailView = ({ navigation }) => {
  const data = navigation.state.params;
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={{ marginBottom: 20 }}>
          <Image source={{ uri: data.avatar }} style={globalStyle.imageStyle} />
        </View>
        <View style={globalStyle.names}>
          <Text>
            {data.name.first_name}
            {' '}
            {data.name.last_name}
          </Text>
        </View>
        <SwitchScreen data={data} />
      </View>
    </View>
  );
};

export default DetailView;
