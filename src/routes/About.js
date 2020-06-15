import React from 'react';
import Nav from '../components/Nav';

class About extends React.Component{

  render() {
  	return ( 
  		<div>
  		<Nav location="about"></Nav>
  		<div className="pageContainer">
  			<h1>nancy and semine’s diaspora blues</h1>
  			<h2>meals from our garden of friendship</h2>
	  		<div>Our recipes are born out of love for each other. 
	  		Like Spongebob’s Bikini Bottom, our Zucchini Bottom is a true Garden of Friendship 
	  		where we nourish and nurture each other in times of heartache, homesickness, finals, 
	  		and other pains part of this journey that is life. 
	  		</div>
	  		</div>
  		</div>);
	}

}

export default About;