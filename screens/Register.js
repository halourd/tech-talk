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
import CustomField from "../components/Field";

import { UserApi } from "../api/user";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.UserApi = new UserApi();
    this.state = {
      firstname: "",
      lastname: "",
      email:"",
      password: "",
      successDestination: null,
    };
  }

  

  componentDidMount() {
    this.is_fields_incomplete;
  }

  submit_registration = async (f_name, l_name, email, password) => {
    console.log("submit_registration triggered")
    console.log(f_name, l_name, email, password)
    let res = await this.UserApi.register(f_name, l_name, email, password)

    if(res) {
      console.log(res)
    }
  }

  is_fields_complete(){
    const {firstname, lastname, email, password } = this.state
    const isFieldComplete = firstname.length>0 && lastname.length>0 && email.length>0 && password.length>0
    console.log(isFieldComplete)
    if(!isFieldComplete){
      console.log('Incomplete fields')
      return false
    }else {
      console.log("-> Complete Fields", this.state.is_field_incomplete)
      this.setState({successDestination: "Login"})
      return true
    }
  }

  render() {
    return (
        <View style={common.mainBody}>
          <View style={common.logoContainer}>
            <Image
              style={[common.centerLogo, {width: 90, height: 90, marginTop: 50}]}
              source={require("../assets/logo/logo.png")}
            />
            <Text style={[common.title, {marginTop: 40}]}>Sign Up for an Account</Text>
          </View>

          <View style={common.formContainer}>
            <CustomField 
            placeHolder="First Name" 
            protectInput={false}
            onChangeTxt={(fname)=> {
              // this.is_fields_complete()
              this.setState({firstname: fname})
            }} 
            />
            <CustomField 
            placeHolder="Last Name" 
            protectInput={false}
            onChangeTxt={(lname)=> {
              // this.is_fields_complete()
              this.setState({lastname: lname})
            }} 
            />
            <CustomField 
            placeHolder="Email Address" 
            protectInput={false}
            onChangeTxt={(email)=> {
              // this.is_fields_complete()
              this.setState({email: email})
            }} 
            />
            <CustomField 
            placeHolder="Password" 
            protectInput={true}
            onChangeTxt={(pass)=> {
              // this.is_fields_complete()
              this.setState({password: pass})
            }} 
            />
            <CustomButton 
            navigation={this.props.navigation}
            disabled={this.state.is_field_incomplete}
            destination={this.state.successDestination == "Login"?"Login": null}
            name="Create your Account" 
            margin_Top={50} 
            on_press={()=> {
              if(!(this.state.firstname.trim() && this.state.lastname.trim() && this.state.email.trim() && this.state.password.trim())){
                alert("Incomplete Details")
                return null
              }
              this.submit_registration(
                this.state.firstname.trim(),
                this.state.lastname.trim(),
                this.state.email.trim(),
                this.state.password.trim()).then(this.setState({successDestination: "Login"}))
              }
            }
            />
            <View style={common.middleTextContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "gray" }}>
                    Already have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("Login");
                    }}
                  >
                    <Text> Login instead</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
    );
  }
}
