import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

// top 2 rows gardens
import JapaneseGarden from '../components/gardens/JapaneseGarden'
import VegetableGarden from '../components/gardens/VegetableGarden'
import DinnerIdeas1 from '../components/gardens/DinnerIdeas1'
import KoreanGarden from '../components/gardens/KoreanGarden'
import TangHall from '../components/gardens/TangHall'
import FruitGarden from '../components/gardens/FruitGarden'
import DinnerIdeas2 from '../components/gardens/DinnerIdeas2'
import DanishGarden from '../components/gardens/DanishGarden'

//central rivers
import NancyRiver from '../components/gardens/NancyRiver'
import FusionPool from '../components/gardens/FusionPool'
import SemineRiver from '../components/gardens/SemineRiver'

//bottom 3 rows gardens
import SourGarden from '../components/gardens/SourGarden'
import BlueGarden from '../components/gardens/BlueGarden'
import FamilyGarden from '../components/gardens/FamilyGarden'
import CrunchyGarden from '../components/gardens/CrunchyGarden'
import ThirstRiver from '../components/gardens/ThirstRiver'
import FriendGarden from '../components/gardens/FriendGarden'
import LeftoverGarden from '../components/gardens/LeftoverGarden'
import SweetGarden from '../components/gardens/SweetGarden'
import SpicyGarden from '../components/gardens/SpicyGarden'

class Home extends React.Component{

  render() {
  	return ( 
  		<div className="home-container">

	  		{/* top 2 rows gardens */}
	  		<div className="garden japanese-garden"> <JapaneseGarden/> </div>
	  		<div className="garden vegetable-garden"><VegetableGarden/></div>
	  		<div className="garden dinner-ideas-1"><DinnerIdeas1/></div>
	  		<div className="garden korean-garden"><KoreanGarden/></div>
	  		<div className="garden tang-hall"><TangHall/></div>
	  		<div className="garden fruit-garden"><FruitGarden/></div>
	  		<div className="garden dinner-ideas-2"><DinnerIdeas2/></div>
	  		<div className="garden danish-garden"><DanishGarden/></div>

	  		{/* central rivers */}
	  		<div className="garden nancy-river"><NancyRiver/></div>
	  		<div className="garden fusion-pool"><FusionPool/></div>
	  		<div className="garden semine-river"><SemineRiver/></div>

	  		{/* bottom 3 rows gardens */}
	  		<div className="garden sour-garden"><SourGarden/></div>
	  		<div className="garden blue-garden"><BlueGarden/></div>
	  		<div className="garden family-garden"><FamilyGarden/></div>
	  		<div className="garden crunchy-garden"><CrunchyGarden/></div>
	  		<div className="garden thirst-river"><ThirstRiver/></div>
	  		<div className="garden friend-garden"><FriendGarden/></div>
	  		<div className="garden leftover-garden"><LeftoverGarden/></div>
	  		<div className="garden sweet-garden"><SweetGarden/></div>
	  		<div className="garden spicy-garden"><SpicyGarden/></div>
  		</div>
  	 );
	}

}

export default Home;