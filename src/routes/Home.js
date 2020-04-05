import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

class Home extends React.Component{

  render() {
  	return ( 
  		<div className="home-container">

	  		{/* top 2 rows gardens */}
	  		<div className="garden japanese-garden"></div>
	  		<div className="garden vegetable-garden"></div>
	  		<div className="garden dinner-ideas-1"></div>
	  		<div className="garden korean-garden"></div>
	  		<div className="garden tang-hall"></div>
	  		<div className="garden fruit-garden"></div>
	  		<div className="garden dinner-ideas-2"></div>
	  		<div className="garden danish-garden"></div>

	  		{/* central river */}
	  		<div className="garden nancy-river"></div>
	  		<div className="garden fusion-pool"></div>
	  		<div className="garden semine-river"></div>

	  		{/* central river */}
	  		<div className="garden sour-garden"></div>
	  		<div className="garden blue-garden"></div>
	  		<div className="garden family-garden"></div>
	  		<div className="garden crunchy-garden"></div>
	  		<div className="garden fusion-river"></div>
	  		<div className="garden friend-garden"></div>
	  		<div className="garden leftover-garden"></div>
	  		<div className="garden sweet-garden"></div>
	  		<div className="garden spicy-garden"></div>
  		</div>
  	 );
	}

}

export default Home;