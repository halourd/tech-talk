
import {Component} from 'react'
import {Text, TextInput, View, TouchableOpacity} from 'react-native'

import common from '../styles/common';

export default class CustomButton extends Component {
    render(){
        return(
            <View>
                <TouchableOpacity 
                activeOpacity={0.8}
                style={{marginTop: this.props.margin_Top}}
                onPress={()=> {
                    this.props.navigation.navigate(this.props.destination)
                }}
                >
                    <View 
                    style={[common.button, 
                        {
                            backgroundColor: this.props.borderOnly?'#F7FAEF':'#252031', 
                            borderWidth: this.props.borderOnly ? 2:0,
                            
                        }]}>
                        <Text style={[common.buttonText, {color: this.props.borderOnly?'#252031':'#F7FAEF'}]}>{this.props.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>

        );
    }
}