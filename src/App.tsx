import * as React from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import Main from 'pages/Main';
import About from 'pages/About';
import materialRoot from 'styles/materialRoot'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Main path="/" />
          <About path="/about" />
        </Router>
      </div>
    );
  }
}

export default materialRoot(App);
