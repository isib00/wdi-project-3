import angular from 'angular';
import '@uirouter/angularjs';
import Router from './config/router';
import './scss/style.scss';
import 'satellizer';
import mainCtrl from './controllers/mainCtrl';
import 'angular-flash-alert';
import 'angular-flash-alert/dist/angular-flash.min.css';



angular.module('wdi-project-3', ['ui.router', 'satellizer', 'ngFlash'])
  .config(Router)
  .controller('mainCtrl', mainCtrl)
  .config(function($authProvider) {
    $authProvider.signupUrl = '/api/register';
    $authProvider.loginUrl = '/api/login';
  });
