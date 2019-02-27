import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import HomeStack from './stacks/HomeStack'
import NotificationsScreen from '../screens/Notifications'
import ProfileScreen from '../screens/Profile'
import { Ionicons } from '@expo/vector-icons'

const Tabs = createBottomTabNavigator({
    Home: HomeStack,
    Notifications: NotificationsScreen,
    Profile: ProfileScreen
  },{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : ''}`
        } else if (routeName === 'Notifications') {
          iconName = `ios-notifications${focused ? '' : ''}`
        } else if ( routeName === 'Profile' ) {
          iconName = `ios-contact${focused ? '' : ''}`
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />
      }
    }),
  tabBarOptions: {
    activeTintColor: '#5855FD',
    inactiveTintColor: '#DBDAD9',
  },
})

const TabBar = createAppContainer( Tabs )

// const transitionConfig = () => {
//   return {
//     transitionSpec: {
//       duration: 750,
//       easing: Easing.out(Easing.poly(4)),
//       timing: Animated.timing,
//       useNativeDriver: true,
//     },
//     screenInterpolator: sceneProps => {      
//       const { layout, position, scene } = sceneProps

//       const thisSceneIndex = scene.index
//       const width = layout.initWidth

//       const translateX = position.interpolate({
//         inputRange: [thisSceneIndex - 1, thisSceneIndex],
//         outputRange: [width, 0],
//       })

//       return { transform: [ { translateX } ] }
//     },
//   }
// }

// const Tabs = createBottomTabNavigator(
//   {
//     HomeScreen: HomeScreen,
//     NotificationsScreen: NotificationsScreen,
//     ProfileScreen:ProfileScreen,
//   }
// )

// const RootStack = createStackNavigator(
//   {
//     HomeStack: {
//       screen: Tabs,
//       // navigationOptions: ({ navigation }) => {
//       //   const routeIndex = navigation.state.index
//       //   const routename = navigation.state.routes[routeIndex].routeName
//       //   return{ 
//       //     gesturesEnabled: false,
//       //     header: <Header title={ routename } /> 
//       //   }
//       // }
//     },
//     Chat: { screen: ChatScreen },
//   },
//   {
//     transitionConfig: transitionConfig
//   }
// )

export default TabBar