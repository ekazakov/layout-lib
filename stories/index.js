import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Column, Block, FixedBlock100 } from '../src';
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';

const stories = storiesOf('Button', module);
stories.add('One', () => {
    return <div>
        <Row>
            <FixedBlock100>1</FixedBlock100>
            <Column>
                <FixedBlock100>1</FixedBlock100>
                <Row justify="center" style={{ width: 300 }}>
                    <FixedBlock100>5</FixedBlock100>
                    <FixedBlock100>6</FixedBlock100>
                </Row>
                <FixedBlock100>2</FixedBlock100>
            </Column>
            <FixedBlock100>2</FixedBlock100>
            <FixedBlock100>3</FixedBlock100>
        </Row>
    </div>
});

stories.add('Two', () => {
    return <div>
        <Row>
            <FixedBlock100>1</FixedBlock100>
            <Column>
                <FixedBlock100>1</FixedBlock100>
                <Row justify="center" style={{ width: 300 }}>
                    <FixedBlock100>5</FixedBlock100>
                    <FixedBlock100>6</FixedBlock100>
                </Row>
                <FixedBlock100>2</FixedBlock100>
            </Column>
            <FixedBlock100>2</FixedBlock100>
            <FixedBlock100>3</FixedBlock100>
        </Row>
    </div>
});