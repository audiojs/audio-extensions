'use strict';
var assert = require('assert');
var audioExtensions = require('./');

it('should be an array', function () {
	assert.deepEqual(Array.isArray(audioExtensions), true );
});

it('should be more than 1 length', function () {
	assert.deepEqual(audioExtensions.length > 1, true );
});

it('should contain only strings', function () {
	assert.deepEqual(audioExtensions.filter(function (val) {
		return typeof val === 'string';
	}).length, audioExtensions.length );
});



