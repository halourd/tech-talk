
import {Component} from 'react'
import {Text, TextInput, View, TouchableOpacity} from 'react-native'

import common from '../styles/common';

export default class Field extends Component {
    render(){
        return(
            <View>
                <View style={common.fieldContainer}>
                    <TextInput 
                    placeholder={this.props.placeHolder}
                    style={common.field}
                    secureTextEntry={this.props.protectInput}
                    onChangeText={this.props.onChangeTxt}
                    keyboardType={`${this.props.type}`}
                    />
                </View>                
            </View>

        );
    }
}