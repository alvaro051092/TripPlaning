import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableHighlight, StatusBar } from 'react-native';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      actualComponent: '',
      actualComponentData: null,
      backVisible: false,
      backComponent: '',
      tripSelected: null,
      placeSelected: null
    };

  }


  _setActualComponent = (actualComponent, actualComponentData, backVisible, backComponent) => (
    this.setActualComponent(actualComponent, actualComponentData, backVisible, backComponent)
  );

  setActualComponent(actualComponent, actualComponentData, backVisible, backComponent) {

    var tripSelected = this.state.tripSelected;
    var placeSelected = this.state.placeSelected;

    switch (actualComponent) {
      case 'Trip':
        if (actualComponentData != null) {
          tripSelected = actualComponentData;
        }
        break;
      case 'Place':
        if (actualComponentData != null) {
          placeSelected = actualComponentData;
        }

        break;
    }


    this.setState({
      actualComponent: actualComponent,
      actualComponentData: actualComponentData,
      backVisible: backVisible,
      backComponent: backComponent,
      tripSelected: tripSelected,
      placeSelected: placeSelected
    })
  }

  _header() {
    return (<AppHeader
      setActualComponent={this._setActualComponent}
      backVisible={this.state.backVisible}
      backComponent={this.state.backComponent}
      actualComponent={this.state.actualComponent}
      tripSelected={this.state.tripSelected}
      placeSelected={this.state.placeSelected}
    />);
  }

  _content() {
    return (<AppContent
      setActualComponent={this._setActualComponent}
      actualComponent={this.state.actualComponent}
      actualComponentData={this.state.actualComponentData}
    />);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>{this._header()}</View>
        <View style={styles.content}>{this._content()}</View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: StatusBar.currentHeight
  },
  header: {
    flex: 1
  },
  content: {
    flex: 10,
  },
  centrar_medio: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
