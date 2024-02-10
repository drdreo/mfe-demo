import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

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
        // @ts-ignore
        loadChildren: () => import('reactApp/Module').then((m) => m.default),
    },
    {
        path: '',
        component: NxWelcomeComponent,
    },
];
