import React from 'react';
import { Link } from 'react-router-dom';

export default class Flower extends React.Component{


  render() {
  	return (
        <Link to={{ pathname: "/" + [this.props.recipeURL] }} >
      			<p>{this.props.flower}</p>
        </Link>);
	}

}