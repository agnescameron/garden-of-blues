import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
    	zoomed: true,
    }
  }


	zoom = (scale, origin) => {
		document.getElementById('home').style.webkitTransform =  scale;    // Chrome, Opera, Safari
		document.getElementById('home').style.msTransform =   scale;       // IE 9
		document.getElementById('home').style.transform = scale;     // General
		document.getElementById('home').style.webkitTransformOrigin =  origin;    // Chrome, Opera, Safari
		document.getElementById('home').style.msTransformOrigin =   origin;       // IE 9
		document.getElementById('home').style.transformOrigin = origin;     // General
		this.setState(prevState => ({
		  zoomed: !prevState.zoomed
		}));
	}

  render() {
  	let zoomed=this.state.zoomed;

  	return (
  		<div className="nav">
        <Link to={{ pathname: "/about"}} >
      			<span>about</span>
        </Link>

      	{ zoomed ? <span ref="zoom" onClick={() => this.zoom('scale(0.6, 0.6)', '0% 0%')}>view whole garden</span> :
      	<span ref="unzoom" onClick={() => this.zoom('scale(1, 1)', '100% 100%')}>explore garden</span> }

        <Link to={{ pathname: "/ingredients"}} >
      			<span>ingredients</span>
        </Link>
        </div>
        );
	}

}