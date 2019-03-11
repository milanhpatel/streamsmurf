import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import { SideNav, Nav } from 'react-sidenav'
import {Login, Demo} from '../components'
import styled from "styled-components";
import {
  AppContainer as BaseAppContainer,
  ExampleNavigation as BaseNavigation,
  ExampleBody as Body
} from "./containers";

import { Icon } from "react-icons-kit";
import { dashboard } from "react-icons-kit/fa/dashboard";
import { users } from "react-icons-kit/fa/users";


// const AppContainer = styled(BaseAppContainer)`
//   height: calc(100vh - 40px);
// `;

const Navigation = styled(BaseNavigation)`
  background: #303641;
  color: #8d97ad;
  font-size: 1em;
  letter-spacing: 2px;
  width: 240px;
  line-height: 22px;
`;

const IconCnt = styled.div`
   color: #6a56a5;
   display: flex;
   justify-content: center;
   align-items: center;
 `;

const theme = {
  selectionColor: "#FFF",
  hoverBgColor: "#181b20"
};

const Text = styled.div`
  padding-left: 15px;
`;

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
      <Navigation>
      <h2>StreamSmurf</h2>
        <SideNav theme={theme}>
          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <Nav>
                <IconCnt>
                    <Icon icon={users} />
                    <Link to="/demo"> <Text>Demo</Text> </Link>
                </IconCnt>
              </Nav>
              
              <Nav>
              <IconCnt>
                  <Icon icon={users} />
                <a href="#" onClick={handleClick}>
                   <Text>Logout</Text> 
                </a>
              </IconCnt>
              </Nav>
            </div>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              <Nav>
                <IconCnt>
                  <Icon icon={dashboard} />
                  <Link to="/demo"> <Text>Demo</Text> </Link>
                </IconCnt>
              </Nav>
              <Nav>
                <IconCnt>
                  <Icon icon={users} />
                  <Link to="/login"> <Text>Login</Text> </Link>
                </IconCnt>
              </Nav>
              <Nav>
                <IconCnt>
                  <Icon icon={users} />
                  <Link to="/signup"> <Text>Signup</Text> </Link>
                </IconCnt>
              </Nav>
              <Nav>
                <IconCnt>
                  <Icon icon={dashboard} />
                  <Link to="/stream"> <Text>Stream</Text> </Link>
                </IconCnt>
              </Nav>
            </div>
          )}
        </SideNav>
      </Navigation>
  </div>
)

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
