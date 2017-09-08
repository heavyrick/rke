angular.module('app').config([
    '$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider)
    {
        $locationProvider.html5Mode(true); // evita os # na url

        $stateProvider

        // MAIN
        .state('home', {
            url: '/',
                views: {
                    '': {
                        templateUrl: './angularjs/views/main.html'
                    },
                    'main@home': {
                        templateUrl: './angularjs/views/table.html'
                    }
                }
        })

        // ADD
        .state('add', {
            url: '/add',
            views: {
                '': {
                    templateUrl: './angularjs/views/main.html'
                },
                'main@add': {
                    templateUrl: './angularjs/views/form.html'
                }
            }
        })

        // EDIT
        .state('edit', {
            url: '/edit/:id',
            views: {
                '': {
                    templateUrl: './angularjs/views/main.html'
                },
                'main@edit': {
                    templateUrl: './angularjs/views/form.html'
                }
            }
        })

        $urlRouterProvider.otherwise('/');

    }
])