import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
    name: 'brand-settings',
    exposes: {
        './Routes': 'apps/brand-settings/src/app/remote-entry/entry.routes.ts',
        './BrandService': 'apps/brand-settings/src/app/brand.service.ts',
    },
};

export default config;
