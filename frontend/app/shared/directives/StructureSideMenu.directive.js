"use strict";

export default function structureSideMenu() {
  return {
    restrict: 'E',
    replace: true,
    template: require('views/structure/side-menu.html')
  };
}