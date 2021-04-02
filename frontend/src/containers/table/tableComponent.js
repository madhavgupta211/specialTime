import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import table from '../../assets/elements/table.png';
import notable from '../../assets/elements/noframe.png';
import radio from '../../assets/elements/radio.png';
import roof from '../../assets/elements/woodRoof.png';
import panel from '../../assets/elements/woodWall.png';
import ring from '../../assets/elements/ring.png';
import postit from '../../assets/elements/postIt.png';
import clock from '../../assets/elements/clock.png';
import notepad from '../../assets/elements/notepad.png';
import photo from '../../assets/elements/photo.png';
import { Tooltip } from 'shards-react';
import './table.css';
import music from '../../assets/music.mp3';
import tune from '../../assets/elements/tune.gif';

const importAll = require =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

const dayImages = importAll(require.context('../../assets/day', false, /\.(png|jpe?g|svg)$/));

const nightImages = importAll(require.context('../../assets/night', false, /\.(png|jpe?g|svg)$/));

const people = importAll(require.context('../../assets/people', false, /\.(png|jpe?g|svg)$/));

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
  cursor: pointer;
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
  z-index: 1;
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
  bottom: ${ props => props.width >= 1300 ? '120px' : '100px' };
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
  bottom: ${ props => props.width >= 1370 ? '105px' : '85px' };
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

const Tune = styled.img`
  position: fixed;
  width: 100px;
  left: ${ props => props.width >= 865 ? 50 : 34 }%;
  bottom: ${ props => props.width >= 1190 ? '17vh' : '115px' };
  transform: translateX(-50%);
  z-index: 5;
` 

const ImageContainer = styled.div`
  position: fixed;
  min-width: 550px;
  min-height: 395px;
  width: ${ props => props.width/2.17 }px;
  height: ${ props => 0.718*(props.width/2.17)}px;
  z-index: 2;
  background-color: black;
  left: 50%;
  transform: translateX(-50%);
  bottom: 113px;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
`

class Table extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      widthOk: window.innerWidth > 1050,
      gallery: this.props.day ? dayImages : nightImages,
      imageNo: 0,
      table: true,
      openRing: false,
      openPost: false,
      openNote: false,
      isPlaying: false
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

  nextImage = () => {
    console.log(Object.keys(this.state.gallery).length);
    console.log()
    this.setState({
      imageNo: ((this.state.imageNo + 1)%Object.keys(this.state.gallery).length) 
    })
    console.log(this.state.imageNo);
  }

  toggleframe = async() => {
    console.log(!this.state.table);
    let galleria;
    if(!this.state.table) {
      if(this.props.day) {
        galleria = dayImages;
      }
      else {
        galleria = nightImages;
      }
    }
    else {
      galleria = people;
    }
    console.log(galleria);
    await this.setState({
      table: !this.state.table,
      gallery: galleria,
      imageNo: 0
    });
    console.log(this.state);
  }

  clockClick = () => {
    this.props.toggleDay();
    this.setState({
      imageNo: 0,
      gallery: this.props.day ? dayImages : nightImages
    });
  }

  static getDerivedStateFromProps(nextProps,prevState) {
    console.log("bruh");
    let galleria;
    if(prevState.table) {
      if(nextProps.day) {
        galleria = dayImages;
      }
      else {
        galleria = nightImages;
      }
    }
    else {
      galleria = people;
    }
    return {
      gallery: galleria
    }
  }

  toggleRing = () => {
    this.setState({
      openRing: !this.state.openRing
    });
  }

  togglePost = () => {
    this.setState({
      openPost: !this.state.openPost
    });
  }

  toggleNote = () => {
    this.setState({
      openNote: !this.state.openNote
    });
  }

  toggleMusic = () => {
    console.log("toggle");
    this.setState({
      isPlaying: !this.state.isPlaying
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
    if(this.state.isPlaying !== prevState.isPlaying) {
      if(this.state.isPlaying) {
        this.player.play();
        console.log("play");
        this.player.loop = true;
      }
      else {
        this.player.pause();
        console.log("pause");
      }
    }
  }


  render() {
    console.log(Object.keys(this.state.gallery));
    return(
      <div>
        <Roof src = {roof} />
        <div>
          <Radio className = "border-select" src = {radio} width = {this.state.width} onClick = { this.toggleMusic }/>
          <Tune src = {tune} hidden = {!this.state.isPlaying} />
        </div>
        <Panel className = "border-select" src = {panel} width = {this.state.width} />
        <Ring id="ring" className = "border-select" src = {ring} />
        <Tooltip
          open={this.state.openRing}
          target="#ring"
          toggle={this.toggleRing}
        >
          The souvenir i can never forget
        </Tooltip>
        <PostIt id = "postit" hidden = {!this.state.table} className = "border-select" src = {postit} width = {this.state.width}/>
        <Tooltip
          open={this.state.openPost}
          target="#postit"
          toggle={this.togglePost}
        >
          Recieved 19th February 2020 with a violet flower
        </Tooltip>
        <Clock onClick = {this.clockClick} className = "border-select" src = {clock} width = {this.state.width}/>
        <NotePad id = "notepad" className = "border-select" src = {notepad} width = {this.state.width} />
        <Tooltip
          open={this.state.openNote}
          target="#notepad"
          toggle={this.toggleNote}
        >
          I have never seen a heart purer than yours....<br></br>.....don't change yourself till the end of my life
        </Tooltip>
        <Photo className = "border-select" src = {photo} width = {this.state.width} onClick = {this.toggleframe} />
        <Tableau src = {this.state.table ? table : notable}  width = {this.state.width} onClick = { this.nextImage } />
        <ImageContainer width = {this.state.width}>
          <Image src = {this.state.gallery[`${this.state.imageNo}.jpg`].default}/>
        </ImageContainer>
        <audio src = {music} ref = {ref => (this.player = ref)} />
      </div>
    );
  }
}

export default Table;