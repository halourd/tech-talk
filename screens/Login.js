import { Component } from "react";
import {
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableNativeFeedback,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import common from "../styles/common";
import CustomButton from "../components/CustomButton";
import { UserApi } from "../api/user";
import { getStorage, setStorage } from "../helper/storage";
import CustomField from "../components/Field";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.UserApi = new UserApi();
    this.state = {
      email: "",
      password: "",
      successDestination: null,
      errMessage: ""
    };
  }

  componentDidMount(){
    this.setState({email: "", password: ""})
  }
  render() {
    return (
      <KeyboardAvoidingView style={common.mainBody}>
        <View style={common.logoContainer}>
          <Image
            style={common.centerLogo}
            source={require("../assets/logo/logo.png")}
          />
          <Text style={common.title}>Login to TechTalk</Text>
        </View>

        <View style={common.formContainer}>
          <CustomField
            type="email-address"
            placeHolder="Email Address"
            protectInput={false}
            onChangeTxt={(email) => {
              this.setState({ email: email });
            }}
            txt_value={this.state.email}
          />
          <CustomField 
          placeHolder="Password" 
          protectInput={true} 
          onChangeTxt={(pass) => {
            this.setState({ password: pass });
          }}
          txt_value={this.state.password}
          />

          <CustomButton 
          navigation={this.props.navigation}
          name="LOGIN" 
          margin_Top={50} 
          on_press={async ()=>{
              let [res, error] = await this.UserApi.login(this.state.email, this.state.password);

              if(error){
                this.setState({errMessage: error})
                alert(this.state.errMessage)
                this.setState({successDestination: null})
                this.setState({email: "", password: ""})
                console.log(error)
              }else{
                await setStorage('user', res.data.token);
                await setStorage('firstname', res.data.firstname);
                await setStorage('lastname', res.data.lastname);
                await setStorage('email', res.data.email);
                console.log('[SUCCESS] Key successfully stored.')
                this.setState({successDestination: "Home"})
                this.props.navigation.navigate(this.state.successDestination)
              }
          }}
          />

          <View style={common.middleTextContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ flex: 1, height: 1, backgroundColor: "#ccc" }} />
              <View>
                <Text style={{ color: "gray" }}> Don't have an account? </Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: "#ccc" }} />
            </View>
          </View>
          <CustomButton
            name="REGISTER"
            color='#F7FAEF'
            navigation={this.props.navigation}
            destination="Register"
            margin_Top={0}
            borderOnly={true}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
