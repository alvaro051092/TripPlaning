import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class AppHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    _backOption = () => {
        if (this.props.backVisible) {
            return (<TouchableHighlight style={{ backgroundColor: 'blue' }} onPress={() => this._backClick()}><Text>Back</Text></TouchableHighlight>);
        }
    };

    _backClick = () => {
        switch (this.props.backComponent) {
            case '':
                data = null;
                backVisible = false;
                backComponent = "";
                break;
            case 'Trip':
                data = this.props.tripSelected;
                backVisible = true;
                backComponent = "";
                break;
            case 'Place':
                data = this.props.placeSelected;
                backVisible = true;
                backComponent = "Trip";

                break;
        }

        this.props.setActualComponent(this.props.backComponent, data, backVisible, backComponent)
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ flex: 1 }}>
                    {this._backOption()}
                </View>
                <View style={{ flex: 2 }}>
                    <Text>Soy un Header</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        flexDirection: 'row'
    }

});
