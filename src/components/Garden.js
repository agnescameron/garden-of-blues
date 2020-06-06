import React from 'react';
import { Link } from 'react-router-dom';
import Flower from './Flower';
import RecipeContext from '../RecipeContext';

export default class Garden extends React.Component{

  static contextType = RecipeContext;

  render() {
	const recipes = this.context.filter(entry => entry.Gardens ? entry.Gardens.includes(this.props.garden.name) : '')
	console.log(recipes)
  	return (
  		<div>
  			<p>{this.props.garden.name}</p>
  			<Flower flower={this.props.garden.flower} recipeURL={recipes.length ? recipes[0].RecipeName.replace(/\W/g, '') : ''}/>
  		</div>);
	}

}