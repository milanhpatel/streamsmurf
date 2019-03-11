import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUrl, fetchStreamers, fetchChannel, fetchUser} from '../store/stream'
import ReactTwitchEmbedVideo from 'react-twitch-embed-video'


export class Stream extends Component {
  constructor(props) {
    super(props)
    this.state = {
      game: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick(game) {
    this.props.loadStreamers()
    this.setState({
      game
    })
    console.log('state is: ', this.state.game)
  }
  
  handleSubmit(e) {
    e.preventDefault();
    // const userName = e.target.userName.value;
    this.props.loadStreamers()
  }

  /*
  <li class="nav-item">
              <a class="nav-link" onClick={() => this.handleClick('League of Legends')} href="#">League of Legends</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => this.handleClick('Overwatch')} href="#" value="Overwatch">Overwatch</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => this.handleClick('Apex Legends')} href="#">Apex Legends</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => this.handleClick('Fortnite')} href="#">Fortnite</a>
            </li>
            <li className="nav-item" key={game}>
                  <a className="nav-link" onClick={() => this.handleClick(game)} href="#">{game} </a>
                </li>
*/

  render() {
    return (
      <div>
          {this.props.games.length < 1 ? null : 
          <ul className="nav justify-content-center">
            {Object.keys(this.props.games).sort().map((game, i) => {
              return (
                <div key={i} id="gameRender">
                  <button type="button" className="btn btn-primary" onClick={() => this.handleClick(game)}>
                  {game} <span className="badge badge-light">{this.props.games[game]}</span>
                  </button>
                </div>)
            })}
            <h1> {this.props.games[0]} </h1>
          </ul>
          }

        <form id="update-user-form" onClick={() => this.handleClick('League of Legends')}>
          <span className="input-group-btn">
            <button className="btn-default" type="submit">
              Start dashboard
            </button>
          </span>
        </form>

        {this.props.streamers.length < 1 ? 
        <div className="container">
          <h1>Loading...</h1>
        </div> : 
        <div className="container">
          <h1>{this.props.streamChannel}</h1>
          <ul>{this.props.streamers.map((streamer) => {
            if(streamer.game === this.state.game){
            return (
              <div key={streamer.id}>
                <li>{streamer.game}</li>
                <p>{streamer.channel.name}</p>
              </div>
            )}
          })}</ul>
      </div>}
    </div>
    ) 
  }
}

// <ReactTwitchEmbedVideo channel={streamer.channel.name} theme="dark" muted={1}/>

const mapStateToProps = state => ({
  streamers: state.stream.streamers,
  streamUrl: state.stream.streamUrl,
  streamChannel: state.stream.streamChannel,
  games: state.stream.games
})

const mapDispatchToProps = dispatch => ({
  loadStreamers: () => dispatch(fetchStreamers()),
  loadUrl: () => dispatch(fetchUrl()),
  loadChannel: () => dispatch(fetchChannel()),
  loadUser: (userName) => dispatch(fetchUser(userName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Stream)