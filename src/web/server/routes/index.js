/*
 * Geodigraph GIS 2017
 *
 * Copyright (C) 2017 Coherent Logic Development LLC
 * 
 * Author: John P. Willis <jpw@coherent-logic.com>
 *
 * index.js: express routes
 *
 */


var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();


router.get('/', function (req, res) {

	if(!req.session.site) {
		req.session.site = req.hostname;
	}

	res.sendFile('client/index.html', {root: process.cwd()});
});

router.get('/session', function (req, res) {
	
	res.set('Content-Type', 'application/json');
	res.send(req.session);
	
});

router.get('/css/:file', function (req, res) {
	res.sendFile('client/css/' + req.params.file, {root: process.cwd()});
});

router.get('/js/:file', function (req, res) {
	res.sendFile('client/js/' + req.params.file, {root: process.cwd()});
});

router.get('/images/:file', function (req, res) {
    res.sendFile('client/images/' + req.params.file, {root: process.cwd()});
});

router.get('/config.json', function (req, res) {
	res.sendFile('client/config.json', {root: process.cwd()});
});

router.get('/favicon.ico', function (req, res) {
	res.sendFile('client/favicon.ico', {root: process.cwd()});
});

router.get('/register', function(req, res) {
	res.sendFile('client/register.html', {root: process.cwd()});
});



router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
	if (err) {
	    return res.render('register', { account : account });
	}

	passport.authenticate('local')(req, res, function () {
	    res.redirect('/');
	});
    });
});

router.get('/login', function(req, res) {
	res.sendFile('client/login.html', {root: process.cwd()});
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;
