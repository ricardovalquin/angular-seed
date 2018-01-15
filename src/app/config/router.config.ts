import {UIRouter} from '@uirouter/angular';
import {Injector} from '@angular/core';
import {AuthGuardService} from '../core/service/guard/auth-guard.service';
import {toPromise} from 'rxjs/operator/toPromise';

/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {

  const criteria = {entering: (state) => state.data && state.data.authorization};
  router.transitionService.onBefore(criteria, requireAuthentication);
  router.urlService.rules.otherwise({state: 'login'});
}

function requireAuthentication(transition) {
  const $state = transition.router.stateService;
  const authSvc = transition.injector().get(AuthGuardService);
  const stateData = transition.targetState().$state().data;

  return authSvc.userIsLogged().toPromise().then(returnData => {
    if ('logged' === stateData.authorization && !returnData) {
      return $state.target('login');
    } else if ('notLogged' === stateData.authorization && returnData) {
      return $state.target('app.dashboard');
    }
  });
}
