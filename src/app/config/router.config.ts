import {UIRouter} from '@uirouter/angular';
// import {visualizer} from '@uirouter/visualizer';
import {Injector, Injectable} from '@angular/core';

/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {

  // If no URL matches, go to the `hello` state by default
  router.urlService.rules.otherwise({ state: 'dashboard' });

  // Use ui-router-visualizer to show the states as a tree
  // and transitions as a timeline
  // visualizer(router);
}
