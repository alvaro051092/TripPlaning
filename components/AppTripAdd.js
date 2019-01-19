import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class AppTripAdd extends React.Component {

    constructor(props) {
        super(props);

        var newTrip = {
            id: "",
            name: "",
            date: "",
            places: []
        }

        this.state = {
            id: "",
            name: "",
            date: "",
            places: []
        };

    }


    _goTo = (component, data, backVisible, backComponent) => {
        this.props.goTo(component, data, backVisible, backComponent);
    };

    _addTrip = () => {

        var newTrip = {
            id: "",
            name: "",
            date: "",
            places: []
        }

        console.log(this.state);
        newTrip.id=this.state.id;
        newTrip.name=this.state.name;
        newTrip.date=this.state.date;
        newTrip.places=this.state.places;

        this._goTo("Trip", newTrip, true, "");
    }

    render() {
        return (
            <View >

                <Text>Agregar</Text>

                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ id: text })}
                    value={this.state.id}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ date: text })}
                    value={this.state.date}
                />

                <Button title="Agregar" onPress={this._addTrip} />

            </View>
        );
    }
}
