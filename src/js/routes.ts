import {Impress} from "./impress/routes";

/**
 * Created by ramor11 on 4/19/2016.
 */


export class RouteProvider {
    static $inject = ['routeStateProvider'];

    constructor(private states) {
        states.inject(Impress.routes);
    }
}
