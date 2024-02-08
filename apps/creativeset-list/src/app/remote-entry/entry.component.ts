import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'mfe-demo-creativeset-list-entry',
  template: `<mfe-demo-nx-welcome></mfe-demo-nx-welcome>`,
})
export class RemoteEntryComponent {}
