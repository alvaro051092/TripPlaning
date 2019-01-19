import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class AppPlaceAdd extends React.Component {

    constructor(props) {
        super(props);

        var newPlace = {
            id: "",
            name: ""
        }

        this.state = {
            id: "",
            name: "",
        };

    }


    _goTo = (component, data, backVisible, backComponent) => {
        this.props.goTo(component, data, backVisible, backComponent);
    };

    _addPlace = () => {

        var newPlace = {
            id: "",
            name: "",
            date: "",
            places: []
        }

        console.log(this.state);
        newPlace.id=this.state.id;
        newPlace.name=this.state.name;

        this._goTo("Place", newPlace, true, "Place");
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

                <Button title="Agregar" onPress={this._addPlace} />

            </View>
        );
    }
}
