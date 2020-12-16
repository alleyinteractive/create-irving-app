// Byline.
import * as singleByline from 'components/byline/themes/singleByline';

// Container.
import * as singleMetaContainer from
  'components/container/themes/singleMetaContainer';

// Text.
import * as singleTitle from 'components/text/themes/singleTitle';
import * as html from 'components/text/themes/html';

export default {
  'irving/byline': {
    singleByline,
  },
  'irving/container': {
    singleMetaContainer,
  },
  'irving/text': {
    html,
    singleTitle,
  },
};
