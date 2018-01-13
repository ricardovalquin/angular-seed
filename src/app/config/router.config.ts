import {UIRouter} from '@uirouter/angular';
import {Injector} from '@angular/core';
import {AuthGuardService} from '../core/service/guard/auth-guard.service';

/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {

  // const criteria = {entering: (state) => state.data && state.data.authorization};
  // router.transitionService.onBefore(criteria, requireAuthentication);
  // router.urlService.rules.otherwise({state: 'login'});
}

// function requireAuthentication(transition) {
//   const $state = transition.router.stateService;
//   const authSvc = transition.injector().get(AuthGuardService);
//   return authSvc.canActivate().catch(() => $state.target('login'));
// }
