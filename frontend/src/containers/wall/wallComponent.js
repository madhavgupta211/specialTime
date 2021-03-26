import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import dayWall from '../../assets/elements/dayWall.png';
import nightWall from '../../assets/elements/nightWall.png';

const Bg = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  background-image: url(${ props => props.day ? dayWall : nightWall });
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -50;
  overflow-y: hidden;
`

class Wall extends Component {
  render() {
    return(
      <Bg day = {this.props.day}>
        {this.props.children }
      </Bg>
    );
  }
}

export default Wall;