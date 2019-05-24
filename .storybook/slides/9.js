import { storiesOf } from '@storybook/react';
import React from 'react';

const styles = {
  height: '100vh'
}

const fonts = {
  fontFamily: 'Arial',
  padding: '10px 0',
  backgroundColor: 'rgb(181, 126, 229)',
  color: '#fff',
}

const fontUse = {
  fontFamily: 'Arial',
  fontSize: '50px',
  fontStyle: 'italic'
}

storiesOf('Slides', module).add('👩🏼‍🚀 When to use it? 🤔', () => (
  <div style={styles}>
    <div style={{textAlign: 'center'}}>
      <h1 style={fonts}>
      👩🏼‍🚀 When to use it? 🤔
      </h1>

      <p style={{...fontUse, color: 'rgb(162, 224, 94)'}}>
        Visual test cases
      </p>
      <p style={{...fontUse, color: 'rgb(242, 172, 55)'}}>
        Living styleguide to improve consistency
      </p>
      <p style={{...fontUse, color: 'rgb(109, 171, 245)'}}>
        Allow your product owner to validate design
      </p>
    </div>
  </div>
));
