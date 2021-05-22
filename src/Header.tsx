import React from 'react';
import styled from 'styled-components';
import { vars } from './styles';

function Header() {
    return (
        <HeaderWrapper>
            <HeaderInnerWrapper>
                <Title>The Ian Times</Title>
                <Tagline>the best place to hear from Ian</Tagline>
            </HeaderInnerWrapper>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  background: rgb(209,177,92);
  background: ${vars.gradient};
  padding: 1em;
`;

const HeaderInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${vars.maxWidth};
`;

const Title = styled.p`
  display: block;  
  font-size: 1.5em;
  color: white;
`;

const Tagline = styled.p`
  display: block;  
  font-style: italic;
`;
export default Header;