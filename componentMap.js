import createThemedComponentMap from '@irvingjs/styled-components/componentMap';
import { componentMap as WordPressComponentMap } from '@irvingjs/wordpress';
import { IntegrationsManager } from '@irvingjs/integrations';
import themes from 'themes';

// Import custom components.
import Podcast from 'components/podcast';

export default {
  ...WordPressComponentMap,
  ...createThemedComponentMap(themes),
  'irving/integrations': IntegrationsManager,
  'tutorial/podcast': Podcast,
};
