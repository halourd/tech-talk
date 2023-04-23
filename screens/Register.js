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

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
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
            <CustomField placeHolder="First Name" protectInput={false} />
            <CustomField placeHolder="Last Name" protectInput={false} />
            <CustomField placeHolder="Email Address" protectInput={false} />
            <CustomField placeHolder="Password" protectInput={false} />
            <CustomButton name="Create your Account" margin_Top={50} />
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
