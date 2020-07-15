// import fetch from 'node-fetch';
const fetch=require('node-fetch')
const process_api_key = process.env.NANCY_SEMINE_AIRTABLE_KEY;
const MAX_RECORDS = 100;

exports.handler = async (event) => {
  // Retrive type of http method
  const { httpMethod } = event;
  
  if (httpMethod === 'GET') {
  	//get the recipes
	const recipes = await fetch(`https://api.airtable.com/v0/app379cZrnZxEWyFK/Recipes?maxRecords=${MAX_RECORDS}&view=Grid%20view`, {
 	"headers": {"Authorization": `Bearer ${process_api_key}`} })
 	const recipeData = await recipes.json();

 	//get the gardens
 	const gardens = await fetch(`https://api.airtable.com/v0/app379cZrnZxEWyFK/Gardens?maxRecords=${MAX_RECORDS}&view=Grid%20view`, {
 	"headers": {"Authorization": `Bearer ${process_api_key}`} })
 	const gardenData = await gardens.json();

 	const data = {
 		recipes: recipeData,
 		gardens: gardenData
 	}

	return { statusCode: 200, body: JSON.stringify(data) };
  }
  return { statusCode: 404 };
}