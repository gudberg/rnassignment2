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

  render() {
    const { data, isReady } = this.state;
    data.sort(this.compare);
    // ends
    console.log(data);
    return (
      <View style={styles.container}>
        {/* {this.renderList(this.state.data)} */}
        {isReady ? (
          <SectionList
            renderItem={this.renderList}
            sections={data}
            // keyExtractor={(item, index) => item + index}
          />
        ) : (
          <Text> not ready</Text>
        )}
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
