import { storiesOf } from '@storybook/react';
import React from 'react';

const styles = {
  height: '100vh'
}

storiesOf('Slides', module).add('🤞🏻 Demot Time 💻', () => (
  <div style={styles}>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
    <img src="https://media.giphy.com/media/YFkpsHWCsNUUo/giphy.gif" alt="Demo" width="60%" />
    </div>
  </div>
));
