import React, {Component} from 'react';

import{ View, Text } from 'react-native';

export default class Main extends Component{
    static navigationOptions = { // adiciona título ao app
        title: "JSHunt"
    };
    
    render(){
        return(
            <View>
                <Text>Página Main</Text>
            </View>
        );
    }
}