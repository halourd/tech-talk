import { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons'

import posts_style from "../styles/posts";
export default class PostBlock extends Component {
  render() {
    return (
        <View style={posts_style.postContent}>
          {/* <View style={posts_style.mediaContentContainer}>
            <Image
              source={require("../assets/images/mediaTemp.jpg")}
              style={posts_style.mediaImage}
            />
          </View> */}
          
          <View style={posts_style.postDescriptionContainer}>
            <View style={posts_style.postTextContainer}>
              <Text>
                {this.props.post}
              </Text>
            </View>
            <View style={posts_style.postUploaderContainer}>
              <Image
                style={posts_style.profileImage}
                source={require("../assets/images/profile.png")}
              />
              <View>
                <Text style={posts_style.profileName}>{this.props.uploader}</Text>
                <Text style={[posts_style.profileName, {fontSize: 10}]}>{this.props.createdAt}</Text>
              </View>
            </View>
          </View>

          <View style={posts_style.postActionContainer}>
            <TouchableOpacity
              style={posts_style.postActionButton}
              activeOpacity={0.6}
            >
              <View 
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '55%'
              }}>
                <Ionicons style={{fontSize: 19}} name="heart-outline"/>
                <Text>Like</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={posts_style.postActionButton}
              activeOpacity={0.6}
            >
              <View 
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '80%'
              }}>
                <Ionicons style={{fontSize: 19}} name="chatbox-ellipses-outline"/>
                <Text>Comment</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={posts_style.postActionButton}
              activeOpacity={0.6}
            >
              <View 
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '55%'
              }}>
                <Ionicons style={{fontSize: 19}} name="arrow-redo-outline"/>
                <Text>Share</Text>
              </View>
            </TouchableOpacity>


          </View>
        </View>
    );
  }
}
