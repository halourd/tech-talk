import {Component} from 'react'
import {Text, View, Image, TextInput, TouchableNativeFeedback, StyleSheet, TouchableOpacity} from 'react-native';

import common from '../styles/common';
import CustomButton from '../components/CustomButton'
import CustomField from '../components/Field'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render(){
        return(
            <View style={common.mainBody}>
                <View style={common.logoContainer}>
                    <Image style={common.centerLogo} source={require('../assets/logo/logo.png')}/>
                    <Text style={common.title}>Login to TechTalk</Text>
                </View>

                <View style={common.formContainer}>
                    <CustomField type="email" placeHolder="Email Address" protectInput={false}/>
                    <CustomField placeHolder="Password" protectInput={true}/>

                    <CustomButton name="LOGIN" margin_Top={50}/>
                    <View style={common.middleTextContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{flex: 1, height: 1, backgroundColor: '#ccc'}} />
                                <View>
                                <Text style={{color: 'gray'}}>   Don't have an account?   </Text>
                                </View>
                            <View style={{flex: 1, height: 1, backgroundColor: '#ccc'}} />
                        </View>
                            
                    </View>
                    <CustomButton name="REGISTER" navigation={this.props.navigation} destination='Register' margin_Top={0} borderOnly={true}/>
                </View>


            </View>
        )
    }
}