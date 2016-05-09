"use strict";

import angular from 'angular';

import structureHeader from './directives/StructureHeader.directive.js'
import structureSideMenu from './directives/StructureSideMenu.directive.js'

export default angular
  .module('English.Shared', [])
  .directive('structureHeader', structureHeader)
  .directive('structureSideMenu', structureSideMenu)
  .name