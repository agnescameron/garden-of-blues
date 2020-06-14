import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component{

  constructor(props) {
    super(props);
  }


	zoom = () => {
		var scale = 'scale(0.6, 0.6)';
		var origin = '0% 0%';
		document.getElementById('home').style.webkitTransform =  scale;    // Chrome, Opera, Safari
		document.getElementById('home').style.msTransform =   scale;       // IE 9
		document.getElementById('home').style.transform = scale;     // General
		document.getElementById('home').style.webkitTransformOrigin =  origin;    // Chrome, Opera, Safari
		document.getElementById('home').style.msTransformOrigin =   origin;       // IE 9
		document.getElementById('home').style.transformOrigin = origin;     // General
	}

  render() {
  	return (
  		<div className="nav">
        <Link to={{ pathname: "/about"}} >
      			<span>about</span>
        </Link>

      	<span id="zoom" onClick={this.zoom}>view whole garden</span>

        <Link to={{ pathname: "/ingredients"}} >
      			<span>ingredients</span>
        </Link>
        </div>
        );
	}

}