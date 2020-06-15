import React from 'react';
import Nav from '../components/Nav';

class Ingredients extends React.Component{

  render() {
  	return ( 
  		<div>
  			<Nav location="ingredients" ></Nav>
	  		<div className="pageContainer">
	  			<h1>ingredients</h1>
	  			<h2>a curation</h2>
	  		</div>
  		</div>);
	}

}

export default Ingredients;