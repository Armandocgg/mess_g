'user strict'
import React from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { MapView } from 'expo'
import PropTypes from 'prop-types'
import { messageShare } from '../utils/MessageUtils'

class MessageList extends React.Component {
  
  _keyExtractor = item => item.id.toString()

  _renderItem = ({ item, index }) => {
    const { onMessagePress } = this.props
    return (
      <View>
        <TouchableOpacity style={ styles.messageRow } key={ item.id } onPress={ () => onMessagePress( item ) }>
          { this._renderMessageBody({ item, index }) }
        </TouchableOpacity>
      </View>
    )
  }

  _renderMessageBody = ({ item, index })  => {
    const { type, text, id, uri, coordinate, } = item
    switch( type ) {
      case 'text':
        const { messages } = this.props
        const firstIndex = 0 
        const lastIndex = messages.length - 1
        if ( index === firstIndex ) {
          return (
            <View style={[styles.messageBubble, styles.firstBubble]}>
              <Text style={styles.text}>{ text }</Text>
            </View>
          )
        } else if ( index === lastIndex ) {
          return (
            <View style={[styles.messageBubble, styles.lastBubble]}>
              <Text style={styles.text}>{ text }</Text>
            </View>
          )
        } else {
          return (
            <View style={[styles.messageBubble, styles.middleBubble]}>
              <Text style={styles.text}>{ text }</Text>
            </View>
          )
        }
      case 'image':
        return null
      case 'location':
        return null
      default:
        return null
    }
  }
  
  render() {
    const { messages } = this.props
    // console.log('Messages', messages )
    return(
      <FlatList
        data={ messages }
        inverted
        keyExtractor={ this._keyExtractor }
        renderItem={ this._renderItem }
        keyboardShouldPersistTaps={'handled'}
      />
    )
  }
}

MessageList.propType = {
  message: PropTypes.arrayOf(messageShare).isRequired,
  onMessagePress: PropTypes.func
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    overflow: 'visible'
  },
  messageRow:{
    flexDirection: 'row',
    marginBottom: 4,
    justifyContent: 'flex-end',
    marginRight: 10,
    marginLeft: 60,
  },
  messageBubble:{
    borderWidth: 1,
    borderColor: '#636cf9',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  text: {
    color: '#636cf9',
    fontSize: 18
  },
  firstBubble: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  middleBubble: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  lastBubble: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  }
})

export default MessageList