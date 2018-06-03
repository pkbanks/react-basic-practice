import React, { Component } from 'react';

class Notification extends Component {

  getClassType = () => {
    let result = "";
    switch(this.props.notification["type"]) {
      case "success":
        result = "alert alert-success";
        break;
      case "message":
        result = "alert alert-info";
        break;
      case "caution":
        result = "alert alert-warning";
        break;
      case "error":
        result = "alert alert-danger";
        break;
      default:
        result = "alert alert-info";
    }
    return result;
  }
  
  render() {
    const msg = this.props.notification['message'];
    const classType = ( msg == "" ? "" : this.getClassType() )
    return (
      <div className={classType}>
        {msg}
      </div>
    );
  }
}

function App(props) {

  // TODO: Pass Notification its props
  return (
    <div id="app">
      <Notification notification={props.notification} />
    </div>
  )
}

export default App;
