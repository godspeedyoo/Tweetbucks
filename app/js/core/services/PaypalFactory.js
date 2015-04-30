'use strict';

app.factory('PaypalFactory', ['$rootScope', function($rootScope) {

	var paypal = {};
	var baseUrl = 'https://api.sandbox.paypal.com';
	var paymentUrl = '/v1/payments/payment';
	var userInfoUrl = 'v1/identify/openidconnect/userinfo/?schem=openid';

	paypal.getMe = function() {
		return $rootScope.paypalOAuthResult.get(baseUrl + userInfoUrl);
	};

	return paypal;

}]);