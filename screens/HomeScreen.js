import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
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
  }
  compare = (a, b) => {
    // Generic sorting function used in render
    if (a.name.first_name < b.name.first_name) return -1;
    if (a.name.first_name > b.name.first_name) return 1;
    return 0;
  };

  onPress = item => {
    this.props.navigation.navigate("Detail", item);
  };

  renderList = item => {
    return item.map((item, index, section) => {
      return (
        <TouchableOpacity
          onPress={() => {
            this.onPress(item);
          }}
        >
          <View style={styles.marginalizer} key={index}>
            <Text>{item.name.first_name}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };
  renderItem = item => {
    return <Text>{item.item.name.first_name}</Text>;
  };
  renderHeader = headerItem => {
    return <Text>{headerItem.section.key}</Text>;
  };

  render() {
    console.log("BLALBLAA");
    const { data, isReady } = this.state;
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

    Object.keys(data2).forEach(item => {
      console.log(item);
    });
    let newData = Object.keys(data2).map(x => {
      obj = { data: data2[x], key: x };
      return obj;
    });
    // ends
    console.log(newData);
    console.log("penids");
    return (
      <View style={styles.container}>
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderHeader}
          sections={newData}
          keyExtractor={item => item.name.first_name}
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
  }
});
