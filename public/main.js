console.log('aaaaaa')

fetch(".netlify/functions/lambda")
	.then(function(response) {
	  // console.log(response)
	  return response.json();
})