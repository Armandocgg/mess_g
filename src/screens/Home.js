import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { v4 } from 'uuid'
import Header from '@/components/Header'
import ListUser from '@/components/ListUser'

export  default class HomeScreen extends Component {
  state = {
    messages: [
      {
        id: v4(),
        avatar: '',
        username: '',
        lastMessager: '',
        date: new Date()
      },
      {
        id: v4(),
        avatar: '',
        username: '',
        lastMessager: '',
        date: new Date()
      },
      {
        id: v4(),
        avatar: '',
        username: '',
        lastMessager: '',
        date: new Date()
      },
      {
        id: v4(),
        avatar: '',
        username: '',
        lastMessager: '',
        date: new Date()
      },
      {
        id: v4(),
        avatar: '',
        username: '',
        lastMessager: '',
        date: new Date()
      },
      {
        id: v4(),
        avatar: '',
        username: '',
        lastMessager: '',
        date: new Date()
      },
      {
        id: v4(),
        avatar: '',
        username: '',
        lastMessager: '',
        date: new Date()
      },
    ] 
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Header title="Mess"/>
        <FlatList 
          data={this.state.messages}
          renderItem={({item}) => <ListUser item={ item }/>}
          keyExtractor={(item, index) => item.id}
        /> */}
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
