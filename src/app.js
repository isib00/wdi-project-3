import angular from 'angular';
import '@uirouter/angularjs';
import Router from './config/router';
import './scss/style.scss';




angular.module('wdi-project-3', ['ui.router'])
  .config(Router);
