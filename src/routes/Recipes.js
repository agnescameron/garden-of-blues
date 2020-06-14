import React from 'react';
import RecipeContext from '../RecipeContext';
import RecipeCard from '../components/RecipeCard';
import Nav from '../components/Nav';

class Recipes extends React.Component{

  render() {
  	return ( 
  		<div>
      <Nav location="recipes"></Nav>
  		<h1>recipe index</h1>
        <RecipeContext.Consumer>
          {recipes => { 
            return (
              recipes.map((recipe, i) => {
              // Return the element. Also pass key
                return (<RecipeCard key={i} index={i} recipe={recipe} />)
              })
              )
          }}
        </RecipeContext.Consumer>
      	</div>
  		 );
	}


}

export default Recipes;