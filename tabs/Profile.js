import { Component } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomButton from "../components/CustomButton";

export default class Profile extends Component {
    render(){
        return(
            <View>
                <Text>Profile</Text>
                <CustomButton
                on_press={() => this.props.navigation.navigate('Login')}
                name="Logout"
                />
            </View>
        )
    }
}
