import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';

export  default class NotificationsScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>NotificationsScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});