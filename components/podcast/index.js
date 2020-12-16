/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import {
  standardPropTypes,
  getStandardDefaultProps,
} from '@irvingjs/styled/types/propTypes';
import useStandardProps from '@irvingjs/styled/hooks/useStandardProps';
import * as defaultStyles from './themes/default';

const Podcast = (props) => {
  const {
    theme,
    title,
  } = props;
  const standardProps = useStandardProps(props, {
    tag: 'div',
  });
  const {
    CTAButton,
    Description,
    Image,
    InnerContent,
    Title,
    Wrapper,
  } = theme;

  return (
    <Wrapper {...standardProps}>
      <Image src="https://placekitten.com/300/300" />
      <InnerContent>
        <Description>
          <Title>{title}</Title>
          <p>Reviewing the best cats available.</p>
          <p>Published every Tuesday</p>
        </Description>
        <CTAButton href="google.com">Sign Up</CTAButton>
      </InnerContent>
    </Wrapper>
  );
};

Podcast.defaultProps = {
  ...getStandardDefaultProps(),
  theme: defaultStyles,
  title: '',
};

Podcast.propTypes = {
  ...standardPropTypes,
  title: PropTypes.string,
};

const themeMap = {
  default: defaultStyles,
};

export {
  Podcast as Component,
  themeMap,
};

export default Podcast;
