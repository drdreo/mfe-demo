import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandSettingsComponent } from '../brand-settings/brand-settings.component';

@Component({
    standalone: true,
    imports: [CommonModule, BrandSettingsComponent],
    selector: 'mfe-demo-brand-settings-entry',
    template: ` <mfe-demo-brand-settings></mfe-demo-brand-settings>`,
})
export class RemoteEntryComponent {}
