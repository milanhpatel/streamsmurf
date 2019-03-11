const passport = require('passport')
const router = require('express').Router()
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
var twitchStrategy = require('passport-twitch').Strategy;
const {User} = require('../db/models')
module.exports = router

/**
 * For OAuth keys and other secrets, your Node process will search
 * process.env to find environment variables. On your production server,
 * you will be able to set these environment variables with the appropriate
 * values. In development, a good practice is to keep a separate file with
 * these secrets that you only share with your team - it should NOT be tracked
 * by git! In this case, you may use a file called `secrets.js`, which will
 * set these environment variables like so:
 *
 * process.env.GOOGLE_CLIENT_ID = 'your google client id'
 * process.env.GOOGLE_CLIENT_SECRET = 'your google client secret'
 * process.env.GOOGLE_CALLBACK = '/your/google/callback'
 */

/*
  const googleConfig = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/twitch/callback',
    scope: "user_read"
  }
*/

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.log('Twitch client ID / secret not found. Skipping Twitch OAuth.')
} else {
  const googleConfig = {
    clientID: 'xrc1thbn1z6sc9pax8tzvndrpwjyn8',
    clientSecret: 'iloqyjmxxyg2dqg2hmq0s4wnly4e79',
    callbackURL: '/auth/twitch/callback',
    scope: "user_read"
  }

  const strategy = new twitchStrategy(
    googleConfig,
    (token, refreshToken, profile, done) => {
      const name = profile.displayName
      const email = profile.emails[0].value

      User.findOrCreate({
        where: {twitchId: profile.id},
        // defaults: {name, email}
      })
        .then(([user]) => done(null, user))
        .catch(done)
    }
  )

  passport.use(strategy)

  router.get('/', passport.authenticate('twitch'/*, {scope: 'email'}*/))

  router.get(
    '/callback',
    passport.authenticate('twitch', {
      successRedirect: '/home',
      failureRedirect: '/login'
    })
  )
}
