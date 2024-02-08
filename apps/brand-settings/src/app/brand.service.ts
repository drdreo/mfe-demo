import {Injectable, signal} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class BrandService {
    brandId = signal<string>('a80e56ad-08a3-40f8-9586-832c245b0bf8');
    brandColor = signal<string>('#daa520');

    constructor() {
        // this.brandId = this.generateGuid();
        console.log('constructed - ' + this.generateGuid());

        this.sendBrandInit();
    }

    private generateGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
            /[xy]/g,
            function (c) {
                var r = (Math.random() * 16) | 0,
                    v = c === 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            }
        );
    }

    private sendBrandInit() {
        console.debug('sending brand init');
        const brand = {
            id: this.brandId,
            color: this.brandColor,
        };
        const customEvent = new CustomEvent('brand:init', {detail: brand});
        window.dispatchEvent(customEvent)
    }
}
