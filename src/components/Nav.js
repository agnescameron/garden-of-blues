import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
    	zoomed: true,
    }
  }

	zoom = (scale, origin) => {
		//change scale
		document.getElementById('home').style.webkitTransform =  scale;    // Chrome, Opera, Safari
		document.getElementById('home').style.msTransform =   scale;       // IE 9
		document.getElementById('home').style.transform = scale;     // General

		//change origin
		document.getElementById('home').style.webkitTransformOrigin =  origin;    // Chrome, Opera, Safari
		document.getElementById('home').style.msTransformOrigin =   origin;       // IE 9
		document.getElementById('home').style.transformOrigin = origin;     // General
		this.setState(prevState => ({
		  zoomed: !prevState.zoomed
		}));
	}

  render() {
  	let zoomed=this.state.zoomed;
  	let gardenNav;

  	if(this.props.location === 'home'){
  		gardenNav = zoomed ? <span onClick={() => this.zoom('scale(0.5, 0.5)', '0% 0%')}>view whole garden</span> :
      		<span onClick={() => this.zoom('scale(1, 1)', '100% 100%')}>explore garden</span>
  	}
  	else {
        gardenNav = <Link to={{ pathname: "/"}} >
      			<span>to garden</span>
        </Link>
  	}

  	return (
  		<div className="nav">
        {gardenNav}

        <Link to={{ pathname: "/about"}} >
      			<span>about</span>
        </Link>

        <Link to={{ pathname: "/ingredients"}} >
      			<span>ingredients</span>
        </Link>

        <Link to={{ pathname: "/recipes"}} >
      			<span>index</span>
        </Link>

        </div>
        );
	}

}