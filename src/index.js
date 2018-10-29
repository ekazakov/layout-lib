import React from 'react';
import styled from 'react-emotion'

export const Block = styled('div')`
  flex-basis: ${p => p.basis || 'auto'};
  flex-grow: ${p => p.grow || 0};
`;

export const Row = styled('div')`
    ${Block};
    display: flex;
    flex-direction: row;
    
`;

export const Column = styled('div')`
    ${Block};
    display: flex;
    flex-direction: column;
`;

export const TextBlock = styled('div')``;