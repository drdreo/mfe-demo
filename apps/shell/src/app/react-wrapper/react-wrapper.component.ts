import {
    AfterViewInit,
    Component,
    ElementRef,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { createRoot } from 'react-dom/client';

@Component({
    selector: 'mfe-demo-react-wrapper',
    standalone: true,
    imports: [CommonModule],
    template: ` <div #reactComponent></div> `,
    encapsulation: ViewEncapsulation.ShadowDom,
})
export class ReactWrapperComponent implements AfterViewInit {
    @ViewChild('reactComponent', { static: true }) reactComponent!: ElementRef;

    constructor() {
        console.debug('importing react component');
    }

    async ngAfterViewInit() {
        // @ts-ignore
        const FederatedReactApp = await import('reactApp/Module').then(
            (m) => m.default
        );
        // Mount the React component to the div in Angular template.
        const root = createRoot(this.reactComponent.nativeElement);
        root.render(FederatedReactApp());
    }
}
