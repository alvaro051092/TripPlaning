import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Button} from 'react-native';


export default class AppTrip extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      placeSelected: null
    };

  }

  _clickOnPlace = (item) => (this.clickOnPlace(item));
  clickOnPlace(item){
    console.log('click ' + item.id)
    //this.setState({ placeSelected: item });
    this.props.goTo("Place", item, true, "Trip");
  }

  _addPlace = () => {
    this.props.goTo("PlaceAdd", null, true, "Trip");
  };

  render() {
    return (
      <View >
            <Text>Soy un viaje {this.props.data.name}</Text>
            <View>
                <ListPlaces places={this.props.data.places} clickOnPlace={this._clickOnPlace}></ListPlaces>
              </View>
              <View>
          <Button title="Agregar" onPress={this._addPlace}/>
        </View>
      </View>
    );
  }
}



class ListPlaces extends React.Component {

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (

    <ListPlacesItem
      id={item.id}
      item={item}
      onPressItem={this.props.clickOnPlace}
      title={item.name}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.places}
        //extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

class ListPlacesItem extends React.Component {

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