import axios from 'axios'
import history from '../history'

// ACTION TYPES

const GET_STREAMERS = 'GET_STREAMERS'
const GET_USER_STREAMERS = 'GET_USER_STREAMERS'
const GET_URL = 'GET_URL'
const GET_CHANNEL = 'GET_CHANNEL'
const clientId = 'xrc1thbn1z6sc9pax8tzvndrpwjyn8'

// INITIAL STATE

const initialState = {
    streamers: [],
    streamUrl: [],
    streamChannel: []
}

// ACTION CREATORS

const getUserStreamers = streamers => ({
    type: GET_USER_STREAMERS,
    payload: streamers
})

const getStreamers = streamers => ({
    type: GET_STREAMERS,
    payload: streamers
})

const getUrl = url => ({
    type: GET_URL,
    payload: url
})

const getChannel = channel => ({
    type: GET_CHANNEL,
    payload: channel
})

// THUNK CREATORS
export const fetchUrl = () => async dispatch => {
  try {
    const {data} = await axios.get(`https://api.twitch.tv/kraken/streams/riotgames?client_id=${clientId}`)
    dispatch(getUrl(data.stream.channel.url))
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

export const fetchChannel = () => async dispatch => {
  try {
    const {data} = await axios.get(`https://api.twitch.tv/kraken/streams/riotgames?client_id=${clientId}`)
    dispatch(getChannel(data.stream.channel.name))
  } catch (error) {
    console.error(error)
  }
}

export const fetchStreamers = () => async dispatch => {
  try {
    const {data} = await axios.get(`https://api.twitch.tv/kraken/streams/riotgames?client_id=${clientId}`)
    dispatch(getStreamers(data))
    console.log('DATA IS: ', data)
    console.log('URL IS: ', data.stream.channel.url)
  } catch (error) {
    console.error(error)
  }
}

export const fetchUserStreamers = () => async dispatch => {
  try {
    const {data} = await axios.get('https://api.twitch.tv/kraken/streams/')
    dispatch(getStreamers(data))
  } catch (error) {
    console.error(error)
  }
}

// REDUCER

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STREAMERS:
      return {
          ...state,
          streamers: action.payload
      }
    case GET_USER_STREAMERS:
      return {
          ...state,
          streamers: action.payload
    }
    case GET_URL:
        return {
            ...state,
            streamUrl: action.payload
        }
    case GET_CHANNEL:
        return {
            ...state,
            streamChannel: action.payload
        }
    default:
      return state
  }
}

