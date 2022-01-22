import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home/Home';

const Tab = createBottomTabNavigator();

const DummyScreen: FC = () => {
  return <View />;
};

const TabNavigation: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{backgroundColor: '#F2F2F2'}}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FA4A0C',
        tabBarInactiveTintColor: '#ADADAF',
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
              style={focused ? styles.iconShadow : {}}
            />
          ),
          tabBarAccessibilityLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="WishList"
        component={DummyScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name="heart-outline"
              color={color}
              size={size}
              style={focused ? styles.iconShadow : {}}
            />
          ),
          tabBarAccessibilityLabel: 'WishList',
        }}
      />
      <Tab.Screen
        name="User"
        component={DummyScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <FeatherIcons
              name="user"
              color={color}
              size={size}
              style={focused ? styles.iconShadow : {}}
            />
          ),
          tabBarAccessibilityLabel: 'User',
        }}
      />

      <Tab.Screen
        name="History"
        component={DummyScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name="history"
              color={color}
              size={size}
              style={focused ? styles.iconShadow : {}}
            />
          ),
          tabBarAccessibilityLabel: 'History',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    shadowOpacity: 0,
    borderTopWidth: 0,
    elevation: 0,
    backgroundColor: '#F2F2F2',
  },
  iconShadow: {
    textShadowColor: 'rgb(215, 56, 0)',
    shadowOpacity: 0.2,
    textShadowRadius: 3,
    textShadowOffset: {width: 0, height: 2},
  },
});

export default TabNavigation;
