import React from 'react';
import Nav from '../components/Nav';
import './Home.css';

class About extends React.Component{

  render() {
  	return ( 
  		<div>
  		<Nav location="about"></Nav>
  		<div className="pageContainer">
  			<h1>nancy and semine’s diaspora blues</h1>

  			<h2>meals from our garden of friendship</h2>

        <img src="./assets/semine_nancy.jpg"/>

        <p>Our Garden of Blues is born out of love for each other. Like Spongebob’s Bikini Bottom, our Zucchini Bottom is a true Garden of Friendship where we nourish and nurture each other in times of heartache, homesickness, finals, and other pains part of this marvelous journey that is life. </p>

        <p>From our very first encounter in September 2018 in 7-429 at MIT, we knew that we wanted to live together. But little did we know about the fusion cuisine we would brew and stew.</p>

        <p>Both our research and art practices center on colonial botany and seed collections. So, when we started cooking together and realized our many overlapping flavors, the surprising similarity made sense: our respective geographies of origin were nodes in the same imperial network. </p>

        <p>Initially, Diaspora Blues was the name given to our imaginary food cart from where we imagined selling food to hungry Harvard papitos while scouting for future ex-husbands. </p>

        <p>While the cart never materialized itself, Diaspora Blues has become a universe of its own, a universe that is ruled by mutual care, sisterhood, and love. </p>

        <p>Our food is blue like Semine’s denim; Nancy’s cyanotypes; Semine’s butterfly pea flowers; Joni Mitchell’s album; James Baldwin’s essay “Sonny’s Blues;” our butter-roasted blue yams; and the deep blues we feel when we eat ghosts of our home foods.  </p>

        <p>A year of living together has made us feel that half is whole; that substitutes are okay; and most importantly, that we are neither unauthentic nor a disgrace to where we come from and what we represent.</p>

        <p>This collection of recipes is an ode to coconut milk, brown palm sugar, sour limes, pungent dried fishes, stinky pickles, and chilis that make you sweat. </p>

        <p>While our recipes are inspired by the kitchens of Honduras and Malaysia, treats from the colonial metropolises occasionally make their ways into our pots. In particular, we enjoy kirsebærvin (Danish cherry wine), julehjerte (Danish Christmas cake spiced with cloves and nutmeg), and Vesterhavsost (Danish aged cheese). Thank you to Semine’s brother Seh Ghee for importing those goods to the Americas. </p>

        <p>Indeed, our Garden of Friendship is full of beautiful people who fill our worlds with love. </p>

        <p>From the bottom of our hearts and Zucchini Bottom, thank you to Ayeshu for your legendary lentils; Rodrigo for your jallah and shakshuka; Casey for your grassfed butter and knife dexterity; Ethan for your professional pastries; Rae for your kisses and tteokbokki; Agnes for your ease in the East Asian cuisine and for inspiring us with your beautiful cookbook website backseatfrying.net; and Zainab for your lamb stews and sermons on freedom-dreaming.</p>

        <p>Thank you also for sharing a non-white, non-Christmas with us on Beacon Street; mourning loved ones with dim sum at Hei La Moon; celebrating thesis presentations at Pepper Sky; treating us to cakes from Flour; and soothing homesickness with sourdough from Clear Flour.  </p>

        <p>Food is difficult. It is money; it is food insecurity; it is home, family, and loneliness. On top of that, the food scene in Cambridge Massachusetts is a sad one. But with help from TJ’s, HMart, Super88, the occasional Market Basket excursion, and of course, Nancy’s Institute harvests (in particular Media Lab and the Banana Lounge yield in abundance), we usually have a well-stocked fridge to cook the books and rewrite history.</p>

        <p>After all, we have bigger fish to fry. </p>

	  		</div>
  		</div>);
	}

}

export default About;