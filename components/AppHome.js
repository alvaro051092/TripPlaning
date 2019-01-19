import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableHighlight, StatusBar} from 'react-native';

export default class AppHome extends React.Component {

  constructor(props) {
    super(props);

    var customData = require('../data/tripsDB.json');

    this.state = {
      trips: customData
    };

  }

  _addTrip = () => {
    this.props.goTo("TripAdd", null, true, "");
  };

  _clickOnTrip = (item) => (this.props.goTo("Trip", item, true, ""));

  render() {
      return (
        <View >
        <View >
          <ListTrips tripsData={this.state.trips} clickOnTrip={this._clickOnTrip}></ListTrips>
        </View>

        <View>
          <Button title="Agregar" onPress={this._addTrip}/>
        </View>
      </View>
        )
  }
}


class TripWithData extends React.Component {

  render() {
    return (
      <View >
        <View >
          <ListTrips tripsData={this.props.tripsData} clickOnTrip={this.props.clickOnTrip}></ListTrips>
        </View>

        <View>
          <Button title="Agregar" onPress={this.props.addTrip}/>
        </View>
      </View>
    );
  }
}




class ListTrips extends React.Component {

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (

    <ListTripsItem
      id={item.id}
      item={item}
      onPressItem={this.props.clickOnTrip}
      title={item.name}
    />
  );

  render() {

    return (
      <FlatList
        data={this.props.tripsData.trips}
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
          onPress={() => this.props.onPressItem(this.props.item)}>
          <View style={{ backgroundColor: 'skyblue', height: 50 }}>
            <Text>{this.props.title}</Text>
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
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: StatusBar.currentHeight
  },
  centrar_medio:{
    alignItems: 'center', 
    justifyContent:'center'
  }
});
