import { Component } from 'react';
import {View, Text, Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons'
import PostsScreen from '../tabs/Posts';
import ProfileScreen from '../tabs/Profile';

const Tab = createBottomTabNavigator();


export default class Home extends Component {
    render(){
        return(
            <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                  let icon_name;
        
                  if(route.name == 'Posts') {
                    icon_name = 'reader-outline'
                  }else if(route.name == 'Profile'){
                    icon_name = 'settings-outline'
                  }
                  return <Ionicons name={icon_name} size={size} color={color} />
                },
                tabBarActiveTintColor: '#AF9BDC',
                tabBarInactiveTintColor: 'gray'
              })
              }
            >
                <Tab.Screen 
                name="Posts" 
                component={PostsScreen} 
                options={{title: "TechTalk"}} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        )
    }
}