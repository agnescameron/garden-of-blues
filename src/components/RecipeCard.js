import React from 'react';

class RecipeCard extends React.Component{

  render() {
  	return ( <div>{this.props.recipe.RecipeName}</div> );
	}

}

export default RecipeCard;