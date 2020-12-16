import createThemedComponentMap from '@irvingjs/styled-components/componentMap';
import { componentMap as WordPressComponentMap } from '@irvingjs/wordpress';
import { IntegrationsManager } from '@irvingjs/integrations';
import themeMap from './themeMap';

export default {
  ...createThemedComponentMap(themeMap),
  ...WordPressComponentMap,
  'irving/integrations': IntegrationsManager,
};
