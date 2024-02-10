import {NxWelcomeComponent} from './nx-welcome.component';
import {Route} from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'creativeset-list',
        loadChildren: () =>
            import('creativeset-list/Routes').then((m) => m.remoteRoutes),
    },
    {
        path: 'brand-settings',
        loadChildren: () =>
            import('brand-settings/Routes').then((m) => m.remoteRoutes),
    },
    {
        path: 'react-app',
        loadChildren: () =>
            import('react-app/Module').then((m) => m.remoteRoutes),
    },
    {
        path: '',
        component: NxWelcomeComponent,
    },
];
