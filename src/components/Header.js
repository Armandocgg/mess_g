'use strict'
import React from 'react'
import { Constants, LinearGradient } from 'expo'
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native'
import PropTypes from 'prop-types'

function Header ({title}){
  return(
    <LinearGradient colors={['#ac8bfa', '#636cf9']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
      <View style={styles.statusbar}></View>
      <View style={styles.container}>
        <Text style={styles.title}>{ title }</Text>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Platform.OS == 'ios' ? 50 : 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  },
  statusbar:{
    height: Constants.statusBarHeight,
  }
})

export default Header