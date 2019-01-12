import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableHighlight } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    var customData = require('./data/tripsDB.json');

    this.state = {
      trips: customData
    };

  }


  _addTrip = () => {
    console.log("Add trip")
  };

  _contenido() {
    if (this.state.trips.trips.length > 0) {
      return (<TripWithData tripsData={this.state.trips} addTrip={this._addTrip}></TripWithData>)
    }
    else {
      return (<TripNoData addTrip={this._addTrip}></TripNoData>)
    }
  };



  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Hi</Text>
        </View>

        {this._contenido()}
      </View>
    );
  }
}





class TripNoData extends React.Component {
  render() {
    return (
      <View>
        <Button title="Agregar" onPress={this.props.addTrip}></Button>
      </View>
    );
  }
}


class TripWithData extends React.Component {

  render() {
    return (
      <View>
        <View><Button title="Agregar 2" onPress={this.props.addTrip}></Button></View>
      </View>
    );
  }
}




class ListTrips extends React.Component {

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id) => {
    console.log("Item press " + id)
  };

  _renderItem = ({ item }) => (
    <ListTripsItem
      id={item.id}
      onPressItem={this._onPressItem}
      title={item.name}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.tripsData}
        //extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

class ListTripsItem extends React.Component {

  render() {
    return (


      <View>

        <TouchableHighlight
          onPress={() => this.props.onPressItem(this.props.id)}>
          <View style={{ backgroundColor: 'skyblue', height: 50 }}>
            <Text>{this.props.name}</Text>
          </View>
        </TouchableHighlight>


        <View style={{ backgroundColor: 'white', height: 5 }}></View>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
