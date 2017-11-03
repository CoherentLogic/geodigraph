/*
 * Geodigraph GIS 2017
 *
 * Copyright (C) 2017 Coherent Logic Development LLC
 * 
 * Author: John P. Willis <jpw@coherent-logic.com>
 *
 * account.js: passport authentication object
 *
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    dob: {
	month: Number,
	day: Number,
	year: Number
    },
    vectorLayers: [{name: String,
		    url: String}],
    rasterLayers: [{name: String,
		    url: String}]
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
