angular.module('app').controller('MainController', ['$scope', 'restService', '$stateParams', '$state',
    function($scope, restService, $stateParams, $state)
    {
        var that = this;
        $scope.form = {};
        that.rows = [];

        /**
         * Load all registers
         */
        that.loadBooks = function()
        {
            restService.findAll('books')
                .then(function(response){
                    that.rows = response.data;
                })
                .catch(function(error){
                    console.log("Erro");
                });
        };

        /**
         * Load a specific register
         */
        that.loadBook = function()
        {
            restService.find('books', $stateParams.id)
                .then(function(response){
                    $scope.form = response.data;
                })
                .catch(function(error){
                    console.log("Erro");
                });
        }

        /******************
         * SUBMIT FORM
         ******************/

        that.submitForm = function(formData)
        {
            if($stateParams.id){ // UPDATE
                restService.put('books', $stateParams.id, formData)
                    .then(function(response){
                        $scope.form = response.data.data;
                    })
                    .catch(function(error){
                        console.log("Erro");
                    });
            } else { // INSERT
                restService.post('books', formData)
                    .then(function(response){
                        $state.go('home');
                    })
                    .catch(function(error){
                        console.log("Erro");
                    });
            }
        };

        /**
         * Delete register
         * @param id
         */
        that.delete = function(id){
            restService.delete('books', id)
                .then(function(response){
                    $state.reload();
                })
                .catch(function(error){
                    console.log("Erro");
                });
        }

        /******************
         * LOAD DATA
         ******************/

        if($state.current.name == 'home'){
            that.loadBooks();
        }

        if($state.current.name == 'edit' && $stateParams.id){
            that.loadBook();
        }

    }
]);