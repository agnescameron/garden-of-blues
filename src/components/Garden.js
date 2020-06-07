import React from 'react';
import { Link } from 'react-router-dom';
import Flower from './Flower';
import RecipeContext from '../RecipeContext';

export default class Garden extends React.Component{

  static contextType = RecipeContext;

  render() {
	const recipes = this.context.filter(entry => entry.Gardens ? entry.Gardens.includes(this.props.garden.name) : '')
	let flowers = [];

	for(let i=0; i<this.props.garden.numFlowers; i++){
		if(recipes.length){
			const el = Math.floor(Math.random()*recipes.length);
			const recipeURL = recipes[el].RecipeName.replace(/\W/g, '');
			flowers.push({
				'recipeURL': recipeURL,
				'position': {
					'left': `${Math.random()*80 + 5}%`,
					'top': `${Math.random()*60 + 5}%`,
				}
			})
		}
		else {
			flowers.push({
				'recipeURL': '',
				'position': {
					'left': `${Math.random()*80 + 5}%`,
					'top': `${Math.random()*60 + 5}%`,
				}
			})
		}
	}

  	return (
  		<div>
  			<p>{this.props.garden.name}</p>
  			{ flowers.map( (flower, index) => {
  				return (
  				<div className='flower' style={flower.position} key={index} >
  					<Flower flower={this.props.garden.flower} recipeURL={flower.recipeURL}/>
  				 </div>)
  				})}
  		</div>
  		);
	}
}