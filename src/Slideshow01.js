import React from "react";
import './Slideshow.css';
// import BlueBG from './BlueBG.jpg';
// import RedBG from './RedBG.jpg';
// import GreenBG from './GreenBG.jpg';
// import CyanBG from './CyanBG.jpg';
// import YellowBG from './YellowBG.jpg';
// import MagentaBG from './MagentaBG.jpg';



const imgUrls = [
	"https://i.imgur.com/5NaX9Cj.png", 
	"https://i.imgur.com/mG65wjN.png",
	"https://i.imgur.com/iSkjWja.png",
	"https://i.imgur.com/tLM7kSL.png",
	"https://i.imgur.com/iA5ImQr.png",
  "https://i.imgur.com/2DKQJO4.png"
];

// const imgImports = [
//   BlueBG,
//   RedBG,
//   GreenBG,
//   YellowBG,
//   MagentaBG,
//   CyanBG
	
// ];

class Slideshow01 extends React.Component{
  constructor (props) { //use of the constructor to initialize the state of the carousel. This will help implementing the functions down the line.
    super(props);
    this.state ={
      currentImageIndex: 0
    };
  

  this.nextSlide = this.nextSlide.bind(this); //used to bind the previous and next slide functions to constructor, so that they can enact onto the Slideshow.
  this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide(){
    const lastIndex = imgUrls.length - 1; //const lastIndex = imgImports.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide(){
    const lastIndex = imgUrls.length - 1; //const lastIndex = imgImports.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    
    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
        < Arrow direction="left" clickFunction={ this.previousSlide} glyph="&#9664;" />
        <ImageSlide url={imgUrls[this.state.currentImageIndex]} />{/* <ImageSlide url={imgImports[this.state.currentImageIndex]} /> */}
        < Arrow direction="right" clickFunction={ this.nextSlide} glyph="&#9654;" />
      </div>
    )
  }
}

//Creation of the ImageSlide component. stateless/functional component as there is no inherent logic to control the state of these components. 
//The component shall receive the image URL (as a string) creates an object describing how it should be styled and returns with the markup filled with the info provided.

const ImageSlide = ({url}) => {
  const styles = {
    backgroundImage: `url(${url})`, //`img(${img})`
    //backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="image-slide" style={styles}></div>
  );
}

//Creation of the Arrow Function.  Both arrows will be constructed at the same time, the direction changed accordingly.
//Clickfunction describes what happens once an arrow is clicked. Glyph answers the question "What will be rendered".

const Arrow = ({ direction, clickFunction, glyph}) => (
  <div className={ `slide-arrow ${direction}`} onClick={ clickFunction}>
    {glyph}
  </div>
);



export default Slideshow01;