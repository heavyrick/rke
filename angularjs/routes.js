angular.module('app').config([
    '$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider)
    {

        $locationProvider.html5Mode(true); // evita os # na url

        $stateProvider

            // LOGIN
            .state('/', {
                url: '/',
            })

        $urlRouterProvider.otherwise('/');

    }
])