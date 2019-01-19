import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class AppTripPlace extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View >
            <Text>Soy un lugar {this.props.data.name}</Text>
      </View>
    );
  }
}