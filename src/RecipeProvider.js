import React from 'react';
import RecipeContext from './RecipeContext';

class RecipeProvider extends React.Component {
	    constructor(props) {
        super(props);
        this.state = {
        data: {
          recipes: [],
          gardens: []
        },
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
            data.recipes.records.forEach(function(recipe){
              recipeArr.push(recipe.fields);
            })

            let gardenArr = [];
            data.gardens.records.forEach(function(garden){
              gardenArr.push(garden.fields);
            })

            this.setState(prevState => ({
                data: {
                    ...prevState.data,
                    recipes: recipeArr,
                    gardens: gardenArr
                }
            }))
          })
      }
      catch (e) {
        console.log("error", e)
      }
    }

    render() {
	    const data = this.state.data;
        return (
            <RecipeContext.Provider value={data}>
                {this.props.children}
            </RecipeContext.Provider>
        );
    }
}

export default RecipeProvider;
