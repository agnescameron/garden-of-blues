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
        .then(function(data) {
          console.log("got a thing!", data)
        })
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
          <div>"hello"</div>
            </RecipeContext.Provider>
        );
    }
}

export default RecipeProvider;
