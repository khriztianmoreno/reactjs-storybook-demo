import { storiesOf } from '@storybook/react';
import React from 'react';

const styles = {
  height: '100vh'
}

const fonts = {
  fontFamily: 'Arial',
  padding: '10px 0',
  backgroundColor: 'rgb(0, 33, 64)',
  color: '#fff',
}

storiesOf('Slides', module).add('👨🏼‍💻 Write Stories 🧙🏻‍♂️', () => (
  <div style={styles}>
    <div style={{textAlign: 'center'}}>
      <h1 style={fonts}>
      👨🏼‍💻 Write Stories 🧙🏻‍♂️
      </h1>

      <img src="https://pbs.twimg.com/media/D7OlzJhV4AAdBzp.jpg" alt="React Storybook" width="90%" />
    </div>
  </div>
));
