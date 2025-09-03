import { recipe } from '@vanilla-extract/recipes';

import { tokens } from './tokens.css';

export const root = recipe({
  base: {
    color: 'red',
    backgroundColor: tokens.color020
  }
});
