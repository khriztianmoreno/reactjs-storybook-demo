import { storiesOf } from '@storybook/react';
import React from 'react';

const styles = {
  height: '100vh'
}

const fonts = {
  fontFamily: 'Arial',
  padding: '10px 0',
  backgroundColor: 'rgb(241, 97, 140)',
  color: '#fff',
}

storiesOf('Slides', module).add('⚛️ React Storybook 📖', () => (
  <div style={styles}>
    <div style={{textAlign: 'center'}}>
      <img src="https://spin.atomicobject.com/wp-content/uploads/20171209153645/storybook-logo.svg" alt="React Storybook" width="60%" />
      <br/>
      <h1 style={fonts}>
        A Development and Testing environment that displays your components
      </h1>
    </div>
  </div>
));
