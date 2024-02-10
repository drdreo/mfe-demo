import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createRoot } from 'react-dom/client';

// @ts-ignore
import FederatedReactApp from 'reactApp/Module';

@Component({
    selector: 'mfe-demo-react-wrapper',
    standalone: true,
    imports: [CommonModule],
    template: ` <div #reactComponent></div> `,
})
export class ReactWrapperComponent implements AfterViewInit {
    @ViewChild('reactComponent', { static: true }) reactComponent!: ElementRef;

    constructor() {
        console.debug('importing react component');

        // @ts-ignore
        import('reactApp/Module').then((m) => m.default).then(console.log);
    }

    ngAfterViewInit() {
        // Mount the React component to the div in Angular template.
        const root = createRoot(this.reactComponent.nativeElement);
        root.render(FederatedReactApp());
    }
}
