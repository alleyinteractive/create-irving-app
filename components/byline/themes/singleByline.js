import styled from 'styled-components';

/* eslint-disable import/prefer-default-export */
export const BylineWrapper = styled.div`
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  padding-right: 1rem;
  white-space: pre;
  width: auto;
`;

export const AuthorsWrapper = styled.span`
  align-items: center;
  display: flex;
`;

export const AuthorWrapper = styled.span`
  a {
    font-weight: 700;
  }
`;
/* eslint-enable */
