import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import table from '../../assets/elements/table.png';
import radio from '../../assets/elements/radio.png';
import roof from '../../assets/elements/woodRoof.png';
import panel from '../../assets/elements/woodWall.png';
import ring from '../../assets/elements/ring.png';
import postit from '../../assets/elements/postIt.png';
import clock from '../../assets/elements/clock.png';
import notepad from '../../assets/elements/notepad.png';
import photo from '../../assets/elements/photo.png';
import './table.css';

const Tableau = styled.img`
  width: ${ props => props.width/1.45 }px;
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  min-width: 850px;
  text-align: center;
  background-size: 100% auto;
  background-position: bottom center;
  background-repeat: no-repeat;
  overflow-y: hidden !important;
  z-index: 3;
`

const Roof = styled.img`
  width: 100%;
  min-width: 850px;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  z-index: 4;
`

const Panel = styled.img`
  position: fixed;
  left: -10%;
  width: 38%;
  min-width: 400px;
  bottom: 275px;
  z-index: 2;
`

const Ring = styled.img`
  position: fixed;
  z-index: 7;
  left: 40%;
  bottom: ${ props => props.width >= 1190 ? '14vh' : '80px' };
  transform: translateX(-50%);
  width: 30px;
  cursor: pointer;
`

const PostIt = styled.img`
  position: fixed;
  left: ${ props => props.width >= 1190 ? '61%' : '62%' };
  transform: translateX(-50%);
  z-index: 5;
  width: 60px;
  bottom: 330px;
  cursor: pointer;
`

const Clock = styled.img`
  position: fixed;
  left: 55%;
  transform: translateX(-50%);
  z-index: 6;
  min-width: 60px;
  width: ${ props => props.width >= 1190 ? props.width/20 : 60 }px;
  bottom: ${ props => props.width >= 1300 ? '16.5vh' : '100px' };
  cursor: pointer;
`

const NotePad = styled.img`
  position: fixed;
  left: 58%;
  transform: translateX(-50%);
  min-width: 160px;
  width: ${ props => props.width >= 1190 ? props.width/8 : 160 }px;
  z-index: 6;
  bottom: ${ props => props.width >= 1300 ? '7vh' : '40px' };
  cursor: pointer;
`

const Photo = styled.img`
  position: fixed;
  width: 120px;
  z-index: 5;
  left: ${ props => props.width >= 850 ? 70 : props.width >= 600 ? 80 : 90 }%;
  transform: translateX(-50%);
  bottom: ${ props => props.width >= 1370 ? '15vh' : '85px' };
  cursor: pointer;
`

const Radio = styled.img`
  position: fixed;
  width: ${ props => props.width >= 1190 ? props.width/6 : 180 }px;
  left: ${ props => props.width >= 865 ? 28.5 : 17 }%;
  bottom: ${ props => props.width >= 1190 ? '10vh' : '70px' };
  transform: translateX(-50%);
  z-index: 5;
  cursor: pointer;
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
      <div>
        <Roof src = {roof} />
        <Tableau src = {table}  width = {this.state.width} />
        <Radio className = "border-select" src = {radio} width = {this.state.width} />
        <Panel className = "border-select" src = {panel} width = {this.state.width} />
        <Ring className = "border-select" src = {ring} />
        <PostIt className = "border-select" src = {postit} width = {this.state.width}/>
        <Clock onClick = {this.props.toggleDay} className = "border-select" src = {clock} width = {this.state.width}/>
        <NotePad className = "border-select" src = {notepad} width = {this.state.width} />
        <Photo className = "border-select" src = {photo} width = {this.state.width} />
      </div>
    );
  }
}

export default Table;