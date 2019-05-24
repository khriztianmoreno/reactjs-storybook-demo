import { storiesOf } from '@storybook/react';
import React from 'react';

const styles = {
  backgroundColor: '#32323c',
  color: '#fff',
  height: '100vh',
  textAlign: 'center'
}

const fonts = {
  fontFamily: 'Arial',
  fontSize: '50px',
  fontStyle: 'italic'
}

storiesOf('Slides', module).add('📅 Day to Day 🤦🏼‍', () => (
  <div style={styles}>
    <p style={fonts}>"What component can you use to do this?"</p>
    <p style={fonts}>"How does the component work? What props does it get?"</p>
    <p style={fonts}>"I wasn't aware that this component even existed"</p>
    <p style={fonts}>"I would like to have a visual documentation of my component"</p>
  </div>
));
