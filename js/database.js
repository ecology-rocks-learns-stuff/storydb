/*jslint node: true */
/*global angular, dialog, fs */
'use strict';

angular.module('StoryDb').controller('DatabaseController', ['$scope', '$log', function ($scope, $log) {

    //initialize models
    $scope.wordEntry = "cats";
    
    
    var db = new PouchDB('wordsDb'),
        doc = { name: 'David' };

    function error(err) {
        $log.error(err);
    }
 
    function get(res) {
        if (!res.ok) {
            return error(res);
        }
        return db.get(res.id);
    }
 
    function bind(res) {
        $scope.doc = res;
    }
 
    /*db.post(doc)
        .then(get)
        .then(bind)
        .catch(error);*/
    
    this.addTodo = function (mytext) {
        var todo = {
            _id: new Date().toISOString(),
            title: mytext
        };
        
        db.post(todo).then(get).then(bind).catch(error);
    };

}]);