angular.module('app', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'md.data.table'
]);

var app = angular.module("app")
    .value("config", {
        baseUrl: "http://localhost/rke",
    }
)