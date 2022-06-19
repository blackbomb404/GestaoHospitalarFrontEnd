import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public reloadCurrentComponent(router: Router) {
    const currentUrl = router.url;
        router.routeReuseStrategy.shouldReuseRoute = () => false;
        router.onSameUrlNavigation = 'reload';
        router.navigate([currentUrl]);
    }
}
