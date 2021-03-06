import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableHighlight, StatusBar} from 'react-native';
import AppTrip from './components/AppTrip';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    var customData = require('./data/tripsDB.json');

    this.state = {
      trips: customData,
      screen: 'home',
      trip_selected:'',
      backVisible:false
    };

  }


  _addTrip = () => {
    console.log("Add trip")
  };

  _header(){
    if(this.state.backVisible)
    {
      return(<TouchableHighlight style={{backgroundColor:'blue'}} onPress={() => this.clickOnHome()}><Text>Back</Text></TouchableHighlight>);
    }
  }

  _contenido() {
    console.log("Screen " + this.state.screen)
    switch(this.state.screen) {
      case 'home':
        return(this._loadHome());
        break;
      case 'on_trip':
      return(this._loadTrip());
        break;
    }
  };

  _loadHome(){
    console.log('Load home ' + this.state.trips.trips.length);
    if (this.state.trips.trips.length > 0) {
      return (<TripWithData tripsData={this.state.trips} addTrip={this._addTrip} clickOnTrip={this._clickOnTrip}></TripWithData>)
    }
    else {
      return (<TripNoData addTrip={this._addTrip}></TripNoData>)
    }
  }

  _loadTrip(){
    return (<AppTrip trip={this.state.trip_selected}></AppTrip>)
  }

  _clickOnTrip = (item) => (this.clickOnTrip(item));

  clickOnTrip(item){
    console.log('click ' + item.id)
    
    this.setState({ trip_selected: item });
    this.setState({ screen: 'on_trip' });
    this.setState({ backVisible: true });
  }

  _clickOnHome = () => (this.clickOnHome());

  clickOnHome(){
    
    this.setState({ trip_selected: null });
    this.setState({ screen: 'home' });
    this.setState({ backVisible: false });
  }

  render() {
    return (
      <View style={styles.container}>

     
        <View style={[styles.centrar_medio, {flex:1, backgroundColor:'green', flexDirection:'row'}]}>
          
          {this._header()}
          <Text>Hi</Text>
        </View>
        <View style={{flex:10}}>
          {this._contenido()}
        </View>
        
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
      <View style={{ flex: 1 }}>
        <View style={{ flex: 3 }}>
          <ListTrips tripsData={this.props.tripsData} clickOnTrip={this.props.clickOnTrip}></ListTrips>
        </View>

        <View style={{ flex: 2 }}>
          <Button title="Agregar 2" onPress={this.props.addTrip}>
          </Button>
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
