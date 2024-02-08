import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'brand-settings',
  exposes: {
    './Routes': 'apps/brand-settings/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
