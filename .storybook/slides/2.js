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
  fontSize: '50px'
}

storiesOf('Slides', module).add('🙈 Disclaimer 🙈', () => (
  <div style={styles}>
    <h1 style={fonts}>⚠️ Disclaimer ⚠️</h1>
    <br/>
    <div>
      <img src="https://media.giphy.com/media/uTCAwWNtz7U2c/giphy.gif" alt="warning"/>
    </div>
  </div>
));
