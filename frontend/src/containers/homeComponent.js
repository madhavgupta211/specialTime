import React, { Component } from 'react';
import Wall from "./wall/wallComponent.js";
import Table from "./table/tableComponent"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: true
    }
  }
  
  render() {
    return(
      <Wall day = {this.state.day}>
        <div className = "row">
          <Table />
        </div>
      </Wall>
    );
  }
}

export default Home;