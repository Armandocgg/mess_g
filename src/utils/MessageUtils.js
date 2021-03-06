'use strict'
import PropTypes from 'prop-types'

export const messageShare = PropTypes.shape({
  id: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['text', 'image', 'location']),
  text: PropTypes.string,
  uri: PropTypes.string,
  coordinate: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  })
})

let messageId = 0
export const getNextId = () => messageId += 1

export const createTextMessage = text => {
  return {
    id: getNextId(),
    type: 'text',
    text
  }
}

export const createImageMessage = uri => {
  return {
    id: getNextId(),
    type: 'image',
    uri
  }
}

export const creteLocationMessage =  coordinate => {
  return {
    id: getNextId(),
    type: 'location',
    coordinate
  }
}