import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {START} from '../routes';

export default class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.navigation.navigate(START, this.state);
  }

  render() {
    return (
      <View>
        <ActivityIndicator size="large" color="#ffdf00" />
      </View>
    );
  }
}
