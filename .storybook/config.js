import { configure, addDecorator } from '@storybook/react';
import {amazon, airbnb, coolblue} from '../src/components/themes/themes';
import { withKnobs } from '@storybook/addon-knobs/react';
import {withThemesProvider} from 'storybook-addon-styled-component-theme';

const themes = [amazon, airbnb, coolblue];
addDecorator(withThemesProvider(themes));
addDecorator(withKnobs);

function loadStories() {
  require('./slides/1');
  require('./slides/2');
  require('./slides/3');
  require('./slides/4');
  require('./slides/5');
  require('./slides/6');
  require('./slides/7');
  require('./slides/8');
  require('./slides/9');
  require('./slides/10');
  require('./slides/11');
  require('../src/stories');
}
configure(loadStories, module);
