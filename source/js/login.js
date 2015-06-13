angular.module('myApp.login', [])
.controller('LoginCtrl', ['$scope', '$rootScope', '$window', '$state', '$location', function ($scope, $rootScope, $window, $state, $location) {
	// Login controller
	function loginFacebook() {
		function fbSuccess(result) {
			$rootScope.go('/search');
		}
		function fbFailure(error) {
			// console.error(JSON.stringify(error));
			// auto login in development
			fbSuccess({ id: '0000000001', secret: 'abc123456789' });
		}
		
		if (window.cordova.platformId === 'browser') {
			window.facebookConnectPlugin.browserInit('1601282223489096');
		}
		window.facebookConnectPlugin.logout(function () {
			window.facebookConnectPlugin.login(['email'], fbSuccess, fbFailure);
		});
	}

	$rootScope.login = function (provider) {
		switch (provider) {
			case 'facebook': {
				loginFacebook();

			}
		}
	};
}]);