angular.module('app')
    .factory("restService",
    ["$http", "$state", "$q", "config",
        function($http, $state, $q, config) {
            return {

                /**
                 * Get all results
                 * @param route
                 * @returns {deferred.promise|{then, catch, finally}}
                 */
                findAll: function(route){
                    var deferred;
                    deferred = $q.defer();

                    $http({
                        method: 'GET',
                        url: config.baseUrl + '/api/' + route
                    })
                    .then(function(res)
                    {
                        deferred.resolve(res);
                    })
                    .then(function(error)
                    {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                },

                /**
                 * Get data by Id
                 * @param id
                 * @param route
                 * @returns {deferred.promise|{then, catch, finally}}
                 */
                find: function(route, id){
                    var deferred;
                    deferred = $q.defer();

                    $http({
                        method: 'GET',
                        url: config.baseUrl + '/api/' + route + '/' + id
                    })
                    .then(function (res)
                    {
                        deferred.resolve(res);
                    })
                    .catch(function (error)
                    {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                },

                /**
                 * Update Data
                 * @param formData
                 * @param id
                 * @param route
                 * @returns {deferred.promise|{then, catch, finally}}
                 */
                put: function(route, id, formData){
                    var deferred;
                    deferred = $q.defer();
                    $http({
                        method: 'PUT',
                        url: config.baseUrl + '/api/' + route +  '/' + id,
                        data: formData,
                    })
                        .then(function (res)
                        {
                            deferred.resolve(res);
                        })
                        .catch(function (error)
                        {
                            deferred.reject(error);
                        });
                    return deferred.promise;
                },

                /**
                 * Post data
                 * @param formData
                 * @param route
                 * @returns {deferred.promise|{then, catch, finally}}
                 */
                post: function(route, formData){
                    var deferred;
                    deferred = $q.defer();
                    $http({
                        method: 'POST',
                        url: config.baseUrl + '/api/' + route,
                        data: formData
                    })
                        .then(function (res)
                        {
                            deferred.resolve(res);
                        })
                        .catch(function (error)
                        {
                            deferred.reject(error);
                        });
                    return deferred.promise;
                },

                /**
                 * Delete Data
                 * @param id
                 * @param route
                 * @returns {deferred.promise|{then, catch, finally}}
                 */
                delete: function(route, id){
                    var deferred;
                    deferred = $q.defer();
                    $http({
                        method: 'DELETE',
                        url: config.baseUrl + '/api/' + route +  '/' + id
                    })
                        .then(function(res)
                        {
                            deferred.resolve(res);
                        })
                        .then(function(error)
                        {
                            deferred.reject(error);
                        });
                    return deferred.promise;
                },

            };
        }
    ]);