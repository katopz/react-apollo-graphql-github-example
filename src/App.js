// React
import React, { Component } from 'react'

// Apollo
import { ApolloProvider } from 'react-apollo'
import ApolloClient, { createNetworkInterface } from 'apollo-client'

// Auth
import { login } from './githubLogin'
import { username, password } from './config'

// App.Components
import Repository from './repository'

// Global.Auth
let TOKEN = null

// Global.Apollo
const networkInterface = createNetworkInterface('https://api.github.com/graphql')

networkInterface.use([
  {
    applyMiddleware (req, next) {
      if (!req.options.headers) {
        req.options.headers = {} // Create the header object if needed.
      }

      // Send the login token in the Authorization header
      req.options.headers.authorization = `Bearer ${TOKEN}`
      next()
    }
  }
])

const client = new ApolloClient({
  networkInterface
})

// App
export default class App extends Component {
  constructor () {
    super()
    this.state = { login: false }
  }

  componentDidMount () {
    if (username === 'xxx') {
      throw new Error('Please create a config.js your username and password.')
    }
    login(username, password).then(token => {
      TOKEN = token
      this.setState({ login: true })
    })
  }

  routeForRepository (login, name) {
    return {
      title: `${login}/${name}`,
      component: Repository,
      login,
      name
    }
  }

  render () {
    // Log in state
    if (!this.state.login) {
      return <p>Login...</p>
    }

    // Logged in, fetch from Github
    return this.state.login
      ? <ApolloProvider client={client}>
        <Repository {...this.routeForRepository('facebook', 'react')} />
      </ApolloProvider>
      : <p>Logging in...</p>
  }
}
