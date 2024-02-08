import {Component, WritableSignal} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NxWelcomeComponent} from './nx-welcome.component';
import {ShellService} from "./shell.service";

@Component({
    standalone: true,
    imports: [NxWelcomeComponent, RouterModule],
    selector: 'mfe-demo-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'shell';
    color: WritableSignal<string>;

    constructor(private shellService: ShellService) {
        this.color = this.shellService.color;
    }
}
