import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import table from '../../assets/elements/table.png';

const Adjuster = styled.div`
  width: ${ props => props.width/1.5 }px;
  height: 100vh;
  min-width: 900px;
  text-align: center;
  background-image: url(${table});
  background-size: 100% auto;
  background-position: bottom center;
  background-repeat: no-repeat;
  overflow-y: hidden !important;
  z-index: 2;
`
const Frame = styled.img`
  width: 69.2%;
  position: relative;
  z-index: 0;
  margin-top: 18.8vh;
`

class Table extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      widthOk: window.innerWidth > 1050
    }
  }

  async componentDidMount() {
    window.addEventListener('resize', this.updateDimension);
  }

  async componentWillUnmount() {
    window.addEventListener('resize', this.updateDimension);
  }
  
  updateDimension = () => {
    this.setState({
      width: window.innerWidth,
      widthOk: window.innerWidth > 1050
    });
  }

  render() {
    return(
      <Adjuster width = {this.state.width} className = "mx-auto" >        
      </Adjuster>
    );
  }
}

export default Table;