import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import Garden from '../components/Garden'
import { gardens } from '../helpers/gardens'

class Home extends React.Component{

  render() {

  	return ( 
  		<div className="home-container">
  			{gardens && gardens.map((garden, index) => {
  				return (
  					<div key={index} className="garden" style={garden.placement}>
  						<Garden garden={garden}/>
  					</div>)
  			})}
  		</div>
  	 );
	}

}

export default Home;