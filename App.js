import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Counter from './Counter.js';
import Login from "./Login.js";
import SettingsScreen from './SettingsScreen.js';
import Home from './Home.js';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
import { SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';

// import Icons from "./Icons";
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userName, setUserName]  = useState(false);

  if (userLoggedIn)
  {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Home'
          activeColor='white'
          barStyle={{ backgroundColor: 'green' }}
        >
          <Tab.Screen
            name='Home'
            children={() => <Home userName={userName} />}
            // component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name='home' color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name='Step Counter'
            component={Counter}
            options={{
              tabBarLabel: 'Step Counter',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name='watch' color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name='Settings'
            component={SettingsScreen}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color }) => (
                <FontAwesome name='gear' color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
    
  } else {
    return (
      <Login setUserLoggedIn={setUserLoggedIn} setToken={setToken} setUserName={setUserName}/>
    )
  }
}


const styles = StyleSheet.create({
  margin: {
    marginTop: 10
  }
  
});

