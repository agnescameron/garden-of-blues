import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component{

  constructor(props) {
    super(props);
  }


	zoom = () => {

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