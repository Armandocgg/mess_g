'user strict'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

function ListUser ({ item }) {
  return(
    <TouchableOpacity style={styles.container}>
      <View style={styles.infoLeft}>
        <View>
          <Image source={{uri: 'https://cde.peru.com//ima/0/1/7/9/7/1797472/924x530/yanet-garcia.jpg'}} style={ styles.avatar} />
        </View>
        <View>
          <Text style={[ styles.textStyle, styles.textSemiBold, styles.textBold ]}>Nombre Completo</Text>
          <Text style={[ styles.textStyle, styles.textLigth ]}>Mensaje</Text>
        </View>
      </View>
      <View style={ styles.infoRight } >
        <Text style={[ styles.textStyle, styles.textLigth, styles.textSmall ]}>06:00PM</Text>
        <View style={[styles.circule]}>
          <Text style={[ styles.textRigth, { color: 'white'} ]}>1</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#52d3c7', 
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#f5f5f5',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 10,
  },
  infoLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  infoRight:{
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  textRigth: {
    textAlign: 'center'
  },
  textStyle: {
    color: '#111111',fontSize: 16,
  },
  textSemiBold: {
    fontWeight: '500'
  },
  textLigth:{
    fontWeight: "200"
  },
  textSmall: {
    fontSize: 14
  },
  circule: {
    width: 20,
    paddingVertical: 2,
    borderRadius: 50,
    backgroundColor: '#4852fe',
  }
})

export default ListUser