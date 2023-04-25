import { Component } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons'
import { UserApi } from "../api/user";
import CustomButton from "../components/CustomButton";

export default class Profile extends Component {
    constructor(props){
        super(props);

        this.UserApi = new UserApi();
    }
    render(){
        return(
            <View>
                <View>
                    
                </View>







                <CustomButton
                on_press={() => {
                    this.UserApi.logout(),
                    this.props.navigation.replace('Login', {email: '', password: ''} )
                }}
                name="Logout"
                margin_Top={20}
                />

            </View>
        )
    }
}
