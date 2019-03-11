import axios from 'axios'
import history from '../history'

// ACTION TYPES

const GET_STREAMERS = 'GET_STREAMERS'
const GET_USER_STREAMERS = 'GET_USER_STREAMERS'
const GET_URL = 'GET_URL'
const GET_CHANNEL = 'GET_CHANNEL'
const GET_USER = 'GET_USER'
const GET_GAMES = 'GET_GAMES'
const clientId = 'xrc1thbn1z6sc9pax8tzvndrpwjyn8'

// INITIAL STATE

const initialState = {
    streamers: [],
    streamUrl: [],
    streamChannel: [],
    games: []
}

// Utils
const getGames = (data) => {
    let games = {}
    data.filter((ele) => {
        if(ele.game.length > 1) {
            if(!games[ele.game]) {
                games[ele.game] = 1
            } else {
                games[ele.game]++
            }
        }
    })
    return games;
}

// ACTION CREATORS

const getGamesAction = games => ({
    type: GET_GAMES,
    payload: games
})

const getUser = user => ({
    type: GET_USER,
    payload: user
})

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
export const fetchUser = (userName) => async dispatch => {
  try {
    const {data} = await axios.get(`https://api.twitch.tv/helix/users?login=${userName}`)
    // dispatch(getUser(data.stream.channel.url))
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

export const fetchUrl = () => async dispatch => {
  try {
    const {data} = await axios.get(`https://api.twitch.tv/kraken/streams/tfue?client_id=${clientId}`)
    dispatch(getUrl(data.stream.channel.url))
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

export const fetchChannel = () => async dispatch => {
  try {
    const {data} = await axios.get(`https://api.twitch.tv/kraken/streams/tfue?client_id=${clientId}`)
    dispatch(getChannel(data.stream.channel.name))
  } catch (error) {
    console.error(error)
  }
}

export const fetchStreamers = () => async dispatch => {
  try {
    const {data} = await axios.get(`https://api.twitch.tv/kraken/streams?client_id=${clientId}`)
    dispatch(getStreamers(data.streams))
    console.log('DATA IS: ', data.streams)
    dispatch(getGamesAction(getGames(data.streams)))
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
    case GET_GAMES:
        return {
            ...state,
            games: action.payload
        }
    default:
      return state
  }
}

