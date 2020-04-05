import React from 'react';
import { Link } from 'react-router-dom';

class RecipeCard extends React.Component{

  render() {
  	const recipeURL = this.props.recipe.RecipeName.replace(/\W/g, '')
  	return ( 
		<Link className="App-link" to={{	pathname: "/" + [recipeURL] }}>
  			<div>{this.props.recipe.RecipeName}</div> 
		</Link>
		);
	}

}

export default RecipeCard;