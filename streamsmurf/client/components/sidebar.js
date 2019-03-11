import React from 'react'
import { SideNav, Nav } from 'react-sidenav'

 const Sidebar = () => (
    <div> 
        <SideNav defaultSelectedPath="1">
            <Nav id="1">Item 1</Nav>
            <Nav id="2">Item 2</Nav>
            <Nav id="3">Item 3</Nav>
        </SideNav>
    </div>
)

export default Sidebar
/*
// import React from 'react'
// import { SideNav, Nav } from 'react-sidenav'

// export const Sidebar = () => {
//   return (
//     <div>
//         <SideNav defaultSelectedPath="1">
//             <Nav id="1">
//                 <Icon icon={item1}/>
//                 Item 1
//             </Nav>
//             <Nav id="2">
//                 <Icon icon={item2}/>
//                 Item 2
//             </Nav>
//             <Nav id="3">
//                 <Icon icon={item2}/>
//                 Item 3
//             </Nav>
//         </SideNav>        
//     </div>
//   )
// }

// export default Sidebar

import React from "react";
import { SideNav, Nav } from "react-sidenav";
import styled from "styled-components";
import {
  AppContainer as BaseAppContainer,
  ExampleNavigation as BaseNavigation,
  ExampleBody as Body
} from "./containers";
// import { Icon } from "react-icons-kit";
// import { dashboard } from "react-icons-kit/fa/dashboard";
// import { users } from "react-icons-kit/fa/users";
// import { shoppingCart } from "react-icons-kit/fa/shoppingCart";
// import { cubes } from "react-icons-kit/fa/cubes";
// import { circleO } from "react-icons-kit/fa/circleO";

const AppContainer = styled(BaseAppContainer)`
  height: calc(100vh - 40px);
`;

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
   aligh-items: center;
 `;

const theme = {
  selectionColor: "#FFF",
  hoverBgColor: "#181b20"
};

const Text = styled.div`
  padding-left: 8px;
`;

export class RenderItems extends React.Component {
  state = { selectedPath: "1" };

  onItemSelection = arg => {
    this.setState({ selectedPath: arg.path });
  };

  render() {
    return (
      <AppContainer>
        <Navigation>
          <SideNav
            defaultSelectedPath="1"
            theme={theme}
            onItemSelection={this.onItemSelection}
          >
            <Nav id="1">
              <Text>Dashboard</Text>
            </Nav>
            <Nav id="2">
              <Text>Users</Text>
            </Nav>
            <Nav id="3">
              <Text>Deliveries</Text>
            </Nav>
            <Nav id="4">
              <Text>Orders</Text>
            </Nav>
            <Nav id="5">
              <Text>Transactions</Text>
            </Nav>
          </SideNav>
        </Navigation>
        <Body>
          You can render any items as child of Nav element. All items will be
          rendered under a flex container.
        </Body>
      </AppContainer>
    );
  }
}

*/