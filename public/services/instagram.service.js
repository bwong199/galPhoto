angular.module('galleryPhoto')


.factory('instagram', function($resource){
	return{
		fetchPopular: function(callback){
			var api = $resource('https://api.instagram.com/v1/media/popular/?access_token=:access_token&callback=JSON_CALLBACK', {
				access_token: '72ed95164ccf435a9f922264758550e3'
			}, {
				fetch: {method: 'JSONP'}
			});

			api.fetch(function(response){
				callback(response.data);
			});
		}
	}
}) 