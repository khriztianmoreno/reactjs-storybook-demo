import { storiesOf } from '@storybook/react';
import React from 'react';

const styles = {
  height: '100vh'
}

const fonts = {
  fontFamily: 'Arial',
  padding: '10px 0',
  backgroundColor: 'rgb(113, 220, 189)'
}

storiesOf('Slides', module).add('🖼 GIF 🎥', () => (
  <div style={styles}>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
    <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/436673/images/3997477/demo.gif" alt="React Storybook" width="60%" />
    </div>
  </div>
));
