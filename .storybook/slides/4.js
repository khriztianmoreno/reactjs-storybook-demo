import { storiesOf } from '@storybook/react';
import React from 'react';

const Background = 'https://asana.design/images/design-systems-post.jpg'
const styles = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  height: '100vh'
}

const fonts = {
  fontFamily: 'Arial',
  padding: '10px 0',
  backgroundColor: 'rgb(113, 220, 189)'
}

storiesOf('Slides', module).add('👩🏻‍🎤 Design System 🧚🏻‍♂️', () => (
  <div style={styles}>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <h1 style={fonts}>👩🏻‍🎤 Design System 🧚🏻‍♂️</h1>
    </div>
  </div>
));
