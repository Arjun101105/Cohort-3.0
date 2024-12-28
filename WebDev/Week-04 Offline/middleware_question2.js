// you have been given an express server which has a few endpoints.
// Your task is to create a global middleware which will
// rate limit the requests from a user to only 5 requests per second
// if a user sends more than 5 per second 
// should block them with a 404
// user will be sending their user id in the header as `user-id`
// you have been given a numberOfRequestForUser object to start off with
// which clears every second


const express = require('express')
const app = express()

app.use(function(req,res,next){

})