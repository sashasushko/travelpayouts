import React, { Component } from 'react';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import ServiceList from './components/ServiceList';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TopBar />
        <SideBar />
        <MainContent title="Сервисы">
          <ServiceList />
        </MainContent>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
