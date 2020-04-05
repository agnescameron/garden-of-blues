import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{

  render() {
  	return ( 
  		<div>
  		<h1>home</h1>
  		<div>
          <h3><Link to='/about'>about this site</Link></h3>
          <h3><Link to='/recipes'>recipes</Link></h3>
  		</div>
  		</div>
  	 );
	}

}

export default Home;