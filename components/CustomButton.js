
import {Component} from 'react'
import {Text, View, TouchableOpacity} from 'react-native'

import common from '../styles/common';

export default class CustomButton extends Component {
    render(){
        return(
            <View>
                <TouchableOpacity 
                disabled={this.props.disabled}
                activeOpacity={0.8}
                style={{
                    marginTop: this.props.margin_Top, 
                    // backgroundColor: this.props.disabled ? "#514D5A":"#272232"
                }}
                onPress={()=> {
                    this.props.destination ? this.props.navigation.navigate(this.props.destination):null,
                    this.props.on_press ? this.props.on_press():null
                }}
                >
                    <View 
                    style={[common.button, 
                        {   
                            backgroundColor: this.props.clickable ? '#252031':'#474351',
                            backgroundColor: this.props.borderOnly?'#F7FAEF':'#252031', 
                            backgroundColor: this.props.color? this.props.color: '#252031', 
                            borderWidth: this.props.borderOnly ? 2:0,
                            
                        }]}>
                        <Text style={[common.buttonText, {color: this.props.borderOnly?'#252031':'#F7FAEF'}]}>{this.props.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>

        );
    }
}