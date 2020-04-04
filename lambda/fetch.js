import fetch from 'node-fetch';
const process_api_key = process.env.NANCY_SEMINE_AIRTABLE_KEY;
const MAX_RECORDS = 50;

exports.handler = async (event) => {
  // Retrive type of http method
  const { httpMethod } = event;
  
  if (httpMethod === 'GET') {
	const response = await fetch(`https://api.airtable.com/v0/app379cZrnZxEWyFK/Recipes?maxRecords=${MAX_RECORDS}&view=Grid%20view`, {
 	"headers": {"Authorization": `Bearer ${process_api_key}`} })
 	const data = await response.text();
	return { statusCode: 200, body: data };
  }
  return { statusCode: 404 };
}