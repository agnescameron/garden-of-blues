import React from 'react';
import RecipeContext from './RecipeContext';

class RecipeProvider extends React.Component {
	    constructor(props) {
        super(props);
        this.state = {
        recipes: [],
        };
    }
    
    componentDidMount() {
      try{
        fetch(".netlify/functions/fetch")
          .then(function(response) {
            return response.json();
          })
          .then( (data) => {
            let recipeArr = [];
            console.log(data)
            data.recipes.records.forEach(function(recipe){
              recipeArr.push(recipe.fields);
            })
            data.gardens.records.forEach(function(garden){
              console.log('garden ', garden.fields)
            })
          this.setState({recipes: recipeArr})
          })
        // )
      }
      catch (e) {
        console.log("error", e)
      }
    }

    render() {
	    var recipes = this.state.recipes;
        return (
            <RecipeContext.Provider value={recipes}>
                {this.props.children}
            </RecipeContext.Provider>
        );
    }
}

export default RecipeProvider;
