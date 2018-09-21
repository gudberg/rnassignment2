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
      data: [],
      isReady: false
    };
  }

  componentDidMount() {
    const { data } = this.state;
    wholeData.map(el => {
      data.push(el);
    });
    this.setState({
      isReady: true
    });
  }

  onPress = item => {
    this.props.navigation.navigate("Detail", item);
  };

  renderList = item => {
    return item.map((item, index) => {
      return (
        <TouchableOpacity
          onPress={() => {
            this.onPress(item);
          }}
        >
          <View style={styles.marginalizer} key={index}>
            <Text>
              {item.name.first_name} {item.name.last_name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        {this.state.isReady ? (
          this.renderList(this.state.data)
        ) : (
          <Text> Is not reddy </Text>
        )}
        {/* <SectionList
          renderItem={this.renderList(this.state.data)}
          sections={this.renderList(this.state.data)}
          keyExtractor={(item, index) => item.name}
        /> */}
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
