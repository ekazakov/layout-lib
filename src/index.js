import React from 'react';
import styled from 'react-emotion'

export const Block = styled('div')`
  flex-basis: ${p => p.basis || 'auto'};
  flex-grow: ${p => p.grow || 0};
`;

export const Row = styled('div')`
    flex-basis: ${p => p.basis || 'auto'};
    flex-grow: ${p => p.grow || 0};
    display: flex;
    flex-direction: row;
    justify-content: ${p => p.justify || 'flex-start'};
`;

export const Column = styled('div')`
    flex-basis: ${p => p.basis || 'auto'};
    flex-grow: ${p => p.grow || 0};
    display: flex;
    flex-direction: column;
`;

export const FixedBlock100 = styled('div')`
  width: 100px;
  height: 50px;
  background-color: cornflowerblue;
  color: white;
  margin: 5px;
`;