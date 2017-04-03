$('.instagram-lite').instagramLite({
	accessToken: '4677492945.7a2bc5b.fa2f224ea0584db2a74a89526497f3ac',
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
