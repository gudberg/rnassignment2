const React = require("react-native");

const { StyleSheet } = React;

// We use this file for global styling
module.exports = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    padding: 2,
    backgroundColor: "lightblue",
    borderColor: "#333",
    borderWidth: 2,
    borderRadius: 22
  },
  information: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  },
  names: {
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    borderColor: "black",
    height: 180,
    borderWidth: 1
  },
  imageMarginizer: {
    marginBottom: 12,
    marginTop: 12
  },
  informationStyle: {
    marginBottom: 12,
    marginTop: 12,
    borderBottomWidth: 1
  }
});
