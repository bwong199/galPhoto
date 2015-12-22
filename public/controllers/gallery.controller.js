angular.module('galleryPhoto')

.controller('GalleryCtrl', ['$scope', 'instagram',  function($scope, instagram){

	$scope.images = [];


	instagram.fetchPopular(function(data){
		console.log('apple');
		console.log(arguments);
		$scope.images = data; 
	})
}])