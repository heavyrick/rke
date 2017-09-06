angular.module('app').config([
    '$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider)
    {

        $locationProvider.html5Mode(true); // evita os # na url

        $stateProvider

        // MAIN
        .state('/', {
            url: '/',
            templateUrl: './angularjs/views/main.html'
        })

        // FORM
        .state('add', {
            url: '/add',
            templateUrl: './angularjs/views/form.html'
        })

        .state('edit', {
            url: '/edit/:id',
            templateUrl: './angularjs/views/form.html'
        })

        $urlRouterProvider.otherwise('/');

    }
])