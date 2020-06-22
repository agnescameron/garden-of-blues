import React from 'react';
import RecipeContext from '../RecipeContext';
import Nav from './Nav';

import './Recipe.css'

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
		console.log('matching params')
		this.setState({id: id})
	}

  render() {
  	const recipe = this.state.id ? this.context.recipes.find(entry => entry.RecipeName.replace(/\W/g, '') === this.state.id) : undefined
  	if(recipe) console.log(recipe.Photos)

  	return ( 
  		<div>
  		<Nav location="recipePage"></Nav>
  		{ recipe && 
  			<div className="pageContainer">
	  			<h1>{recipe.RecipeName}</h1>

	  			{/*this bit is so dumb, i hate react*/}
	  			<div className="description">
	  			{recipe.Description && recipe.Description.split('\n').map((item, key) => {
					return <span key={key}>{item}<br/></span>})}
	  			</div>

	  			<div className="ingredients">
	  			{recipe.Ingredients && recipe.Ingredients.split('\n').map((item, key) => {
					return <span key={key}>{item}<br/></span>})}
	  			</div>
	  			
	  			<div className="steps">
	  			{recipe.Steps && recipe.Steps.split('\n').map((item, key) => {
					return <span key={key}>{item}<br/></span>})}
	  			</div>

	  			<div className="images">
	  			{recipe.Photos && recipe.Photos.map((item, key) => {
					return <img key={key} src={item.url}/>})}
	  			</div>

	  		</div>
  		}
  		</div>
  	 );
	}

}

export default RecipePage;