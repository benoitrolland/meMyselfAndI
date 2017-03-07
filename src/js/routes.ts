import {Demo} from "./demo/demo.routes";

/**
 * Created by ramor11 on 4/19/2016.
 */


export class RouteProvider {
    static $inject = ['routeStateProvider'];

    constructor(private states) {
        //public routes no authentication needed
        states.inject(Demo.routes);
    }
}
