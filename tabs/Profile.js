import { Component } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";

import { UserApi } from "../api/user";
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomButton from "../components/CustomButton";
import { getStorage } from "../helper/storage";

import profile_style from '../styles/profile'

export default class Profile extends Component {
    constructor(props){
        super(props);

        this.UserApi = new UserApi();

        this.state = {
            active_profile_username: "",
            active_profile_lastname: "",
            active_profile_email: ""
        }
    }

    async getUserProfileName () {
        let user_firstname = await getStorage('firstname')
        let user_lastname = await getStorage('lastname')
        let user_email = await getStorage('email')
        this.setState({
            active_profile_username: user_firstname, 
            active_profile_lastname: user_lastname,
            active_profile_email: user_email
        })
    }

    componentDidMount() {
        this.getUserProfileName()
    }

    render(){
        return(
            <View style={profile_style.container}>
                {/* centered profile image */}
                <View>
                    <View style={profile_style.imageContainer}>
                        <Image 
                        source={require('../assets/images/profile.png')}
                        style={profile_style.profileImage}
                        />
                    </View>

                    {/* Profile Data */}
                    <View style={profile_style.profileData}>
                        <Text style={profile_style.profileDataFullname}>
                            {this.state.active_profile_username} {this.state.active_profile_lastname}
                        </Text>
                        <Text>
                            {this.state.active_profile_email}
                        </Text>
                    </View>
                </View>

                <CustomButton
                color='#AF3C72'
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
