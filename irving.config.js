import styledConfig from '@irvingjs/styled';
import styledComponentsConfig from '@irvingjs/styled-components/irving.config';
import integrationsConfig from '@irvingjs/integrations';

const config = {
  name: 'create-irving-app',
  packages: [
    styledConfig,
    styledComponentsConfig,
    integrationsConfig,
  ],
};

export default config;
