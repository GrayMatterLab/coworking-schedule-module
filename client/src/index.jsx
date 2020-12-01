import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import * as s from './styled-components.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <s.Wrapper>
        <s.Title>
          Hello World!
        </s.Title>
      </s.Wrapper>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
