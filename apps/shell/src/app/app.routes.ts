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
        loadComponent: () =>
            import('./react-wrapper/react-wrapper.component').then(
                (m) => m.ReactWrapperComponent
            ),
    },
    {
        path: '',
        component: NxWelcomeComponent,
    },
];
