import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class AppContent extends React.Component {

  constructor(props) {
    super(props);

  }


  _Testeo2 = () => {
    console.log("entrar");
    this.props.setActualComponent("Testeo2", "aaa1", true, "");
  };

  _cargar = () => {
      console.log("cargar" + this.props.actualComponent)


      switch(this.props.actualComponent) {
        case '':
            
            return(<Testeo1 testeo2={this._Testeo2}/>);
          break;
        case 'Testeo2':
            return(<Testeo2 data={this.props.actualComponentData}/>);
          break;
      }


  }

  render() {
    console.log("render content")
    return (
      <View >
            
            {this._cargar()}

      </View>
    );
  }
}


class Testeo1 extends React.Component {


    
    render() {
        console.log("render testeo 1")
        //this.props.setBackVisible(true);
        return(<View><Text>Uno</Text>
        <Button title="Entrar" onPress={this.props.testeo2}></Button>

</View>);
    }
}

class Testeo2 extends React.Component {
    render() {
        console.log("render testeo 2")
        return(<View><Text>Dos {this.props.data}</Text></View>);
    }
}