import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('Welcome', module).add('🤯 Home Page 🎉', () => (
  <div>
    <h1>What is a Design System?</h1>
    <img src="https://cdn-images-1.medium.com/max/1600/1*-Fcng9a7mZ01KEZNd0E51w.jpeg" width="40%" />
    <p>I keep hearing various definitions, so let me start by saying what a Design System isn’t:
      it is not a Sketch library, no more than a Style guide or a Pattern Library… Actually,
      it’s all of this and so much more!
    </p>
    <blockquote>A Design System is the single source of truth which groups all the elements that will allow the teams to design, realize and develop a product.</blockquote>
  </div>
));
