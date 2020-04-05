import React from 'react';
import RecipeContext from '../RecipeContext';

class RecipePage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
        	id: '',
        }
    }

	static contextType = RecipeContext;


	componentDidMount() {
		// store the URL param/slug as id in the state
		const { id } = this.props.match.params;
		this.setState({id: id})
	}

  render() {

  	//find recipe from url id
  	const recipe = this.context.find(entry => entry.RecipeName.replace(/\W/g, '') === this.state.id)
  	console.log(recipe ? recipe.Ingredients.replace(/\n/g, '<br>') : '')

  	return ( 
  		<div>
  		{ recipe && 
  			<div>
	  			<h1>{recipe.RecipeName}</h1>

	  			{/*this bit is so dumb, i hate react*/}
	  			<div className="ingredients">
	  			{recipe.Ingredients.split('\n').map((item, key) => {
					return <span key={key}>{item}<br/></span>})}
	  			</div>
	  			<div className="steps">
	  			{recipe.Steps.split('\n').map((item, key) => {
					return <span key={key}>{item}<br/></span>})}
	  			</div>
	  			<div className="description">
	  			{recipe.Description.split('\n').map((item, key) => {
					return <span key={key}>{item}<br/></span>})}
	  			</div>

	  		</div>
  		}
  		</div>
  	 );
	}

}

export default RecipePage;