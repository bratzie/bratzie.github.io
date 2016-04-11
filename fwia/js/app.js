/*jslint white: true */
/*jslint node: true */
/*global angular, $, usr, pwd, url */

'use strict';

angular.module('fwia', [$httpProvider])

.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common = 'Content-Type: application/json';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
])

.controller('mainCtrl', ['$scope', '$http',
    function ($scope, $http) {
        var headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        
        $http({
            method: 'GET',
            url: 'http://swedbank_jellyfish.findwise.com/rest/ident/demoident/searcher/default/search.json',
            headers: headers,
            params:  {
                hits: 10,
                offset: 0,
                q: 'bank'
            }
        }).success(function (data) {
            console.log(data);
        });
        
        $scope.test = 'tjenare';
}]);