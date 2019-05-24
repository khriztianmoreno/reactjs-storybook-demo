import { storiesOf } from '@storybook/react';
import React from 'react';

const styles = {
  height: '100vh'
}

storiesOf('Slides', module).add('💻 Installation 💿', () => (
  <div style={styles}>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
    <img src="https://pbs.twimg.com/media/D7OlAuLVsAE1xl-.jpg:large" alt="React Storybook" width="60%" />
    </div>
  </div>
));
