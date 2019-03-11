import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import styled from "styled-components";

import {
  AppContainer as BaseAppContainer,
  ExampleBody as Body
} from './components/containers';

const AppContainer = styled(BaseAppContainer)`
  height: calc(100vh - 40px);
`;

const App = () => {
  return (
      <AppContainer>
        <Navbar id='main_nav'/>
        <Body>
          <Routes id='main_routes'/>
        </Body>
      </AppContainer>
  )
}

export default App
