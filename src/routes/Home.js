import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

import './Home.css';
import Garden from '../components/Garden'
import { gardens } from '../helpers/gardens'

class Home extends React.Component{

  render() {

  	return ( 
      <div>
      <Nav location="home"></Nav>
  		<div className="home-container" id="home">
  			{gardens && gardens.map((garden, index) => {
  				return (
  					<div key={index} className="garden" style={garden.placement}>
  						<Garden garden={garden}/>
  					</div>)
  			})}
  		</div>
      </div>
  	 );
	}

}

export default Home;