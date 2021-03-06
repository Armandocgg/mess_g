'use strict'
import React from 'react'
import {
  View,
  Text,
  Platform,
  StyleSheet,
} from 'react-native'
import { Constants, LinearGradient } from 'expo'
import Status from './Status'
import PropTypes from 'prop-types'

const HEIHGT = Platform.OS === 'ios' ? 50 : 56

function Header ({ title, leftIcon, rightIcon, children, investColor }) {
  const colors = investColor ? ['#ac8bfa', '#636cf9'] : ['#636cf9', '#ac8bfa']
  return (
    <LinearGradient colors={ colors } start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
      <Status />
      <View style={styles.container}>
        <View style={styles.iconView}>
          { leftIcon }        
        </View>
        <View style={[styles.flex, styles.center]}>
          { children ? children : <Text style={styles.textStyle}>{ title }</Text> }
        </View>
        <View style={styles.iconView}>
          { rightIcon }        
        </View>
      </View>
    </LinearGradient>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  children: PropTypes.element
}

const styles = StyleSheet.create({
  container: {
    height: HEIHGT,
    width: '100%',
    elevation: 5,
    flexDirection: 'row',
  },
  statusBar: {
    height: Constants.statusBarHeight,
  },
  iconView: {
    height: HEIHGT,
    width: HEIHGT,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: 'white',
    fontWeight: '300',
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Bold' : 'Roboto'
  },
  flex: {
    flex: 1
  }
})

export default Header