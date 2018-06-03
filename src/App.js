import React, { Component } from 'react';



function App() {

  render() {
    // TODO: Pass Notification its props
    return (
      <div id="app">
        <Notification message={this.props.message} type={this.props.type} />
      </div>
    )
  }
}

export default App;
