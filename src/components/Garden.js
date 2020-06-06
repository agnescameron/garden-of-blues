import React from 'react';
import { Link } from 'react-router-dom';

export default class Garden extends React.Component{

  render() {
  	return (
  		<div>
  			<p>{this.props.garden.name}</p>
  			<p>{this.props.garden.flower}</p>
  		</div>);
	}

}