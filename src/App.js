import React, { Component } from "react";
import {
  Container,
  TopBar,
  SideBar,
  Main,
  Footer
} from "./components/Layout/Layout";
import Balance from "./components/Balance/Balance";
import Nav from "./components/Nav/Nav";
import Page from "./components/Page/Page";
import ServiceList from "./components/ServiceList";
import Copyright from "./components/Copyright/Copyright";

class App extends Component {
  render() {
    return (
      <Container>
        <SideBar>
          <Nav />
        </SideBar>
        <TopBar>
          <Balance />
        </TopBar>
        <Main>
          <Page title="Сервисы">
            <ServiceList />
          </Page>
        </Main>
        <Footer>
          <Copyright />
        </Footer>
      </Container>
    );
  }
}

export default App;
