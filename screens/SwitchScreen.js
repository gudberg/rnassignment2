import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Home from './Home';
import Work from './Work';

const globalStyle = require('./styles');

// The SwitchScreen component is responsible for toggling
// the Home.js and Work.js
class SwitchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleComponents: true,
    };
  }

  renderView = () => {
    const { toggleComponents } = this.state;
    this.setState({
      toggleComponents: !toggleComponents,
    });
  };

  render() {
    const { toggleComponents } = this.state;
    const { data } = this.props;
    return (
      <View>
        <View style={globalStyle.imageMarginizer}>
          <TouchableOpacity
            style={globalStyle.buttonStyle}
            title="click here"
            onPress={this.renderView}
          >
            {toggleComponents ? <Text>Go to Work info</Text> : <Text>Go to Home Info</Text>}
          </TouchableOpacity>
        </View>
        {toggleComponents ? <Home data={data} /> : <Work data={data} />}
      </View>
    );
  }
}

export default SwitchScreen;
