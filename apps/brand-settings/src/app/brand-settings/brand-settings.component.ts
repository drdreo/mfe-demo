import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandService } from '../brand.service';

@Component({
    selector: 'mfe-demo-brand-settings',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './brand-settings.component.html',
    styleUrl: './brand-settings.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandSettingsComponent {
    brandId = this.brandService.brandId;
    brandColor = this.brandService.brandColor;

    constructor(private brandService: BrandService) {}

    onColorChange($event: string) {
        this.brandColor.set($event);
    }
}
