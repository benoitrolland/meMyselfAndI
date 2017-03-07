'use strict';

export module Demo {
    
    export let routes: Array<any> = [
        {
            name    : 'rootBundle',
            abstract: true,
            url     : "/",
        },
        {
            name    : 'rootBundle.root',
            abstract: true,
            resolve : {
                register: ['jsBundleResolver', function (jsBundleResolver) {
                    return jsBundleResolver((app, resolve) => {
                        (require as any).ensure([], function () {
                            app.register(require('./module'));
                            resolve();
                        });
                    });
                }]
            }
        },
        {
            name     : "root",
            parent   : "rootBundle.root",
            component: 'eqHome'
        }
    ];
}


