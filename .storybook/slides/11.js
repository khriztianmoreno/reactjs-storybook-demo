import { storiesOf } from '@storybook/react';
import React from 'react';

const styles = {
  height: '100vh'
}

const fonts = {
  fontFamily: 'Arial',
  padding: '10px 0',
  backgroundColor: 'rgb(1, 130, 131)',
  color: '#fff',
}

storiesOf('Slides', module).add('🙏🏻Thanks 👨🏼‍💻🙇🏼‍♂️', () => (
  <div style={styles}>
    <div style={{textAlign: 'center'}}>
      <h1 style={fonts}>
        Thanks 👨🏼‍💻 🙏🏻 🙇🏼‍♂️
      </h1>

      <img src="https://media.giphy.com/media/26FxCOdhlvEQXbeH6/giphy.gif" alt="React Storybook" width="60%" />
      <p style={fonts}>
        <a href="https://khriztianmoreno.dev" style={{color: '#fff'}}>khriztianmoreno.dev</a>
      </p>
    </div>
  </div>
));
