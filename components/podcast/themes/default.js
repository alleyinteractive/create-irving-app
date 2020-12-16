/* eslint max-len: 0 */
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #EEE;
  border-radius: 3px;
  display: flex;
  padding: 1rem;

  @media (max-width: 700px) {
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
`;

export const Title = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-size: 2rem;
  letter-spacing: -0.015em;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

export const Image = styled.img`
  height: auto;
  width: 100%;
  margin: auto;
  max-width: 300px;
`;

export const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;

  @media (min-width: 701px) {
    margin-left: 2rem;
  }

  @media (max-width: 700px) {
    margin-top: 1rem;
  }
`;

export const CTAButton = styled.a`
  background: #4E9CAF;
  border-radius: 5px;
  color: white;
  display: block;
  font-weight: bold;
  line-height: 25px;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
`;

export const Description = styled.div`
  margin-bottom: 1rem;

  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;
