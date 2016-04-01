/*jslint node: true */
'use strict';

// need to just use pouchDB on front end 
//and stop trying to get it integrated into electron's version of node.

var remote = require('remote');
var dialog = remote.require('dialog');
var angular =   require('angular');
var fs = require('fs');
angular.module('StoryDb', [])

    .factory('MyStory', function () {
    // private
        var story = "";
    // public
        return {
            getValue: function () {
                return story;
            },
            setValue: function (val) {
                story = val;
            }
        };
    })
