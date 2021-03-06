import React, { Component } from 'react';

import './App.css';
import Header from './components/Header'
import Contacts from './components/contacts/Contacts'
import Addcontact from './components/contacts/Addcontact'
import Provider from './context'


class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header name="VinnyBoy Floyd" age="25" />
          <Addcontact />
          <Contacts />
        </div>
      </Provider>
    );
  }
}

export default App;
