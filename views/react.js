import React from 'react';
import ReactDOM from 'react-DOM';

export default class User extends React.Component {
  constructor() {
    super()

    this.state = {};
  }

  render() {
    return(
      <div id="user">

      </div>
    );
  }
}

ReactDOM.render(
  <User />, document.getElementById('user')
);
