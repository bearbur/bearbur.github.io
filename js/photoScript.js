$('.instagram-lite').instagramLite({
	accessToken: '3957809161.199f0e9.53bf57f4ee02408281c9f820a5c70b99',
  list: false,
		urls: true,
    limit: 9,
		success: function() {
			console.log('The request was successful!');
		},
		error: function(errorCode, errorMessage) {
			console.log('There was an error with the request');
		}
});
