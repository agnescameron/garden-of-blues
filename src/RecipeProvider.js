import React from 'react';
import RecipeContext from './RecipeContext';
import dotenv from 'dotenv'; 

dotenv.config()

const process_api_key = process.env.REACT_APP_AIRTABLE_API_KEY;
const airtable_api_url = process.env.REACT_APP_AIRTABLE_API_URL;
const airtable_base = process.env.REACT_APP_AIRTABLE_BASE; 


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
          fetch(`${airtable_api_url}/${airtable_base}/Recipes`, {
               "headers": {"Authorization": `Bearer ${process_api_key}`}})
          .then(function(response) {
            return response.json();
          })
          .then( (data) => {
            console.log(data)
            let recipeArr = [];
            data.records.forEach(function(recipe){
              recipeArr.push(recipe.fields);
          })

            this.setState(prevState => ({
                data: {
                    ...prevState.data,
                    recipes: recipeArr,
                }
            }))
          })
      }
      catch (e) {
        console.log("error w recipes", e)
      }

      try{
          fetch(`${airtable_api_url}/${airtable_base}/Gardens`, {
               "headers": {"Authorization": `Bearer ${process_api_key}`}})
          .then(function(response) {
            return response.json();
          })
          .then( (data) => {
            console.log(data)
            let gardenArr = [];
            data.records.forEach(function(garden){
              gardenArr.push(garden.fields);
          })

            this.setState(prevState => ({
                data: {
                    ...prevState.data,
                    gardens: gardenArr,
                }
            }))
          })
      }
      catch (e) {
        console.log("error w gardens", e)
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
