import React from 'react'
import { Animated, Easing } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from '@/screens/Home'
import ChatScreen from '@/screens/Chat'

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {      
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })

      return { transform: [ { translateX } ] }
    },
  }
}

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Chat: ChatScreen
  },
  {
    transitionConfig: transitionConfig
  }
)

HomeStack.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index > 0 ? false : true
})

export default HomeStack