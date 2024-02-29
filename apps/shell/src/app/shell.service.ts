import { Injectable, signal } from '@angular/core';
import { fromEvent, switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
    providedIn: 'root',
})
export class ShellService {
    color = signal<string>('#0058ff');

    constructor() {
        this.initGlobalListeners();
    }

    private initGlobalListeners() {
        console.log('[shell] initGlobalListeners');
        fromEvent(window, 'brand:init')
            .pipe(
                switchMap((evt: Event) => {
                    const { color } = (evt as CustomEvent).detail;
                    // color is a WriteableSignal<string> here
                    // converting it to an observable
                    return toObservable(color);
                })
            )
            .subscribe((color: any) => {
                this.color.set(color);
            });
    }
}
