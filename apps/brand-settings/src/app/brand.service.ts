import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class BrandService {
    brandId = signal<string>('a80e56ad-08a3-40f8-9586-832c245b0bf8');
    brandColor = signal<string>('#daa520');

    constructor() {
        this.sendBrandInit();
    }

    private sendBrandInit() {
        const brand = {
            id: this.brandId,
            color: this.brandColor,
        };
        const customEvent = new CustomEvent('brand:init', { detail: brand });

        console.log('[brandservice] sending brand', brand);
        window.dispatchEvent(customEvent);
    }
}
