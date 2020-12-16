import styledConfig from '@irvingjs/styled';
import styledComponentsConfig from '@irvingjs/styled-components/irving.config';
import integrationsConfig from '@irvingjs/integrations';

const config = {
  name: 'tutorial',
  packages: [
    styledConfig,
    styledComponentsConfig,
    integrationsConfig,
  ],
  getAppTemplateVars: {
    head: {
      link: () => '<link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=Gentium+Book+Basic:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,600;1,600&display=swap" rel="stylesheet">', /* eslint-disable-line max-len */
    },
  },
};

export default config;
