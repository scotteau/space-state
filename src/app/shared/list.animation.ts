import { trigger, transition, style, animate } from '@angular/animations';

export const list = trigger('list', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-15px)', height: '150px' }),
    animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)', height: '*' }))
  ]),
  transition(':leave', [
    animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-15px)', height: '150px' }))
  ])
]);
