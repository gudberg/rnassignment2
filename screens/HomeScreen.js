import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View, SectionList,
} from 'react-native';
import wholeData from '../ass2data.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginalizer: {
    marginTop: 10,
  },
  header: {
    fontSize: 20,
    backgroundColor: '#DFDFDF',
    fontWeight: 'bold',
  },
  seactionListStyle: {
    width: '80%',
    padding: 2,
  },
});

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: wholeData,
    };
  }

  // To make the our data fit for SectionList we want to change it's structure.
  // This function returns our data as an array of objects where each object has
  // a key named data, and a key named key, where data are all the items where
  // the first letter in first_name is the same as the letter in key
  fitDataForSectionList = () => {
    // first we make an object of lists where the key is the first
    // letter of each first_name and the data for each key is a list
    // where the first letter in first_name fits the key
    const { data } = this.state;
    data.sort(this.compare);
    let fitData = data.reduce((cc, x) => {
      const key = x.name.first_name[0];
      if (!cc[key]) {
        Object.assign(cc, { [key]: [] });
      }
      cc[key].push(x);
      return cc;
    }, {});
    // we convert the object to an array of objects that fits SectionList
    fitData = Object.keys(fitData).map((x) => {
      const obj = { data: fitData[x], key: x };
      return obj;
    });
    return fitData;
  };

  compare = (a, b) => {
    // Generic sorting function used in render
    if (a.name.first_name < b.name.first_name) return -1;
    if (a.name.first_name > b.name.first_name) return 1;
    return 0;
  };

  onPress = (item) => {
    const { navigation } = this.props;
    navigation.navigate('Detail', item);
  };

  renderItem = item => (
    <TouchableOpacity
      onPress={() => {
        this.onPress(item.item);
      }}
    >
      <View style={styles.marginalizer}>
        <Text>
          {item.item.name.first_name}
          {' '}
          {item.item.name.last_name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  renderHeader = headerItem => <Text style={styles.header}>{headerItem.section.key}</Text>;

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          style={styles.seactionListStyle}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderHeader}
          sections={this.fitDataForSectionList()}
          keyExtractor={item => item.work.email}
        />
      </View>
    );
  }
}
