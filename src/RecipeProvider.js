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
        fetch(".netlify/functions/fetch")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data)
        })
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
