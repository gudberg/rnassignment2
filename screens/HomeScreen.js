import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SectionList
} from "react-native";
import wholeData from "../ass2data.json";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: wholeData,
      isReady: false
    };
  }
  componentDidMount() {
    this.setState({
      isReady: true
    });
    this.state.data.sort(this.compare);
  }

  // To make the our data fit for SectionList we want to change it's structure.
  // This function returns our data as an array of objects where each object has
  // a key named data, and a key named key, where data are all the items where
  // the first letter in first_name is the same as the letter in key
  fitDataForSectionList = () => {
    // first we make an object of lists where the key is the first
    // letter of each first_name and the data for each key is a list
    // where the first letter in first_name fits the key
    let fitData = this.state.data.reduce((cc, x) => {
      const key = x.name.first_name[0];
      if (!cc[key]) {
        cc[key] = [];
      }
      cc[key].push(x);
      return cc;
    }, {});
    // we convert the object to an array of objects that fits SectionList
    fitData = Object.keys(fitData).map(x => {
      obj = { data: fitData[x], key: x };
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

  onPress = item => {
    this.props.navigation.navigate("Detail", item);
  };

  renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.onPress(item.item);
        }}
      >
        <View style={styles.marginalizer}>
          <Text>
            {item.item.name.first_name} {item.item.name.last_name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderHeader = headerItem => {
    return <Text style={styles.header}>{headerItem.section.key}</Text>;
  };

  render() {
<<<<<<< HEAD
    const { data } = this.state;
    data.sort(this.compare);

    let data2 = data.map(x => {
      return { ...x, key: x.name.first_name[0] };
    });

    data2 = data2.reduce((cc, x) => {
      if (!cc[x.key]) {
        cc[x.key] = [];
      }
      cc[x.key].push(x);
      return cc;
    }, {});

    console.log(data2);
    let newData = Object.keys(data2).map(x => {
      obj = { data: data2[x], key: x };
      return obj;
    });
=======
    let newData = this.fitDataForSectionList();
>>>>>>> 789fd4886af25da038933e756f1c8057564350c3

    return (
      <View style={styles.container}>
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderHeader}
          sections={newData}
          keyExtractor={item => item.work.email}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  marginalizer: {
    margin: 20
  },
  header: {
    fontSize: 20
  }
});
