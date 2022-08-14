import { animate, style, transition } from '@angular/animations';

export const enterTransitionLayout = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '1s ease-in',
    style({
      opacity: 1,
    })
  ),
]);

export const enterTransitionTable = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '1.25s ease-in',
    style({
      opacity: 1,
    })
  ),
]);
