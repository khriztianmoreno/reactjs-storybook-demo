import { storiesOf } from '@storybook/react';
import React from 'react';

const Background = 'https://s3.amazonaws.com/blog.invisionapp.com/uploads/2017/10/design-systems-atlassian.png'
const styles = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  height: '100vh'
}

const fonts = {
  fontFamily: 'Arial',
  padding: '10px 0',
  backgroundColor: '#ae83df'
}

storiesOf('Slides', module).add('🤯 Title 🎉', () => (
  <div style={styles}>
    <h1 style={fonts}>Design Systems with React and Storybook</h1>
  </div>
));
