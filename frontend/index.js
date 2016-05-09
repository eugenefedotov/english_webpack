"use strict";

import angular from 'angular';

import uiRouter from 'angular-ui-router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './less/directives/lessons.less';
import './less/main.less';
import './less/importer.less';

import sharedModule from './app/shared/shared.module.js';

import appConfig from './app/app.config';
import appRouting from './app/app.routes';
import appRun from './app/app.run';

angular
  .module('English', [
    uiRouter,

    sharedModule
  ])
  .config(appConfig)
  .config(appRouting)
  .run(appRun);
