/*jslint node: true */
/*global angular, dialog, fs */
'use strict';

angular.module('StoryDb').controller('DatabaseController', ['$scope', function ($scope) {

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
 
    db.post(doc)
        .then(get)
        .then(bind)
        .catch(error);
    
    this.addTodo = function (text) {
        var todo = {
            _id: new Date().toISOString(),
            title: text
        };
        
        db.put(todo, function callback(err, result) {
            if (!err) {
                console.log('Successfully posted a todo!');
            }
        });
    };

}]);