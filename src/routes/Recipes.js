import React from 'react';
import RecipeContext from '../RecipeContext';
import RecipeCard from '../components/RecipeCard';

class Recipes extends React.Component{

  render() {
  	return ( 

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
      
  		 );
	}


}

export default Recipes;