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
  	return ( <div>a recipe</div> );
	}

}

export default RecipePage;