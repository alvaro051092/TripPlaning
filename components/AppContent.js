import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import AppHome from './AppHome';
import AppTrip from './AppTrip';
import AppTripPlace from './AppTripPlace';
import AppTripAdd from './AppTripAdd';
import AppPlaceAdd from './AppPlaceAdd';

export default class AppContent extends React.Component {

  constructor(props) {
    super(props);

  }


  _goTo = (component, data, backVisible, backComponent) => {
    this.props.setActualComponent(component, data, backVisible, backComponent);
  };

  _cargar = () => {
      

      switch(this.props.actualComponent) {
        case '':
            return(<AppHome data={this.props.actualComponentData} goTo={this._goTo}/>);
          break;
        case 'Trip':
            return(<AppTrip data={this.props.actualComponentData} goTo={this._goTo}/>);
          break;
          case 'TripAdd':
          return(<AppTripAdd data={this.props.actualComponentData} goTo={this._goTo}/>);
          break;
          case 'Place':
          return(<AppTripPlace data={this.props.actualComponentData} goTo={this._goTo}/>);
          break;
          case 'PlaceAdd':
          return(<AppPlaceAdd data={this.props.actualComponentData} goTo={this._goTo}/>);
          break;
      }


  }

  render() {
    return (
      <View >
            
            {this._cargar()}

      </View>
    );
  }
}
