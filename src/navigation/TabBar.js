import React from 'react'

import { createBottomTabNavigator,createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/Home'
import NotificationsScreen from '../screens/Notifications'
import ProfileScreen from '../screens/Profile'


const Tabs = createBottomTabNavigator(
  {
    HomeScreen: HomeScreen,
    NotificationsScreen: NotificationsScreen,
    ProfileScreen:ProfileScreen
  }
)

const TabBar = createAppContainer( Tabs )

export default TabBar