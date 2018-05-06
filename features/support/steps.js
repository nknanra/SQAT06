

const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()

"use strict";

Given('I go to figure1', function(callback) {
  this.browser
    .init()
    .url('https://app.figure1.com/account/register').then(function() {
      callback();
    }).catch(function(err){
      console.log(err)
      callback(err);
    })
})

When('I sign up with valid credentials', function(callback) {
  this.browser
    .waitForVisible('.register-page__username-input',5000)
    .setValue('.register-page__username-input', Math.random().toString(36).substring(7))
    .catch(function(err){
     console.log(err)
    })
    .setValue('.register-page__email-input', Math.random().toString(36).substring(7)+"@gmail.ca")
    .catch(function(err){
     console.log(err)
    }) 
    .setValue('.register-page__password-input', '300964702')
    .catch(function(err){
     console.log(err)
    })
    .setValue('.register-page__confirm-password-input', '300964702')
    .catch(function(err){
     console.log(err)
    })
    .addValue('.register-page__specialties-list', 'Student')
    .catch(function(err){
     console.log(err)
    })
    .addValue('.register-page__specialties-other-list', 'Medical Student')
    .catch(function(err){
     console.log(err)
    })
    .scroll('.register-page__terms-checkbox')
    .catch(function(err){
     console.log(err)
   })
    .click('.register-page__terms-checkbox')
    .catch(function(err){
     console.log(err)
   })
   .click('.register-page__submit-button')
    .then(function(){
      callback();
    })
    .catch(function(error){
     console.log(err)
     callback(error);
  })
  })
 Then ('I should see my account registered', function(callback) {
  this.browser
  .waitForVisible(".left-panel",5000)
  .isVisible(".left-panel").then(function(result){
   result.should.be.true; 
   callback();
    })
    .catch(function(err){
     console.log(err)
     callback(err);
    })
  })



