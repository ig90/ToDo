import { trigger, transition, style, animate, keyframes, animation, useAnimation, query, group, stagger, animateChild } from '@angular/animations';

export const fadeInAnimation = animation([
    style({ opacity: 0}),
    animate('{{ duration }} {{ easing }}')
], {
    params: {
        duration: '0.5s',
        easing: 'ease-out'
    }
});

export const bounceOutLeftAnimation = animation(
     animate('0.4s ease-in', keyframes([
        style({
            offset: .2,
            opacity: 1,
            transform: 'translateX(10px)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'
        })
    ]))
);

export const todosAnimation = trigger('todosAnimation', [
    transition(':enter', [
      group([
        query('h1', [
          style({transform: 'translateY(-20px)'}),
          animate(1000)
        ]),
        query('@todoAnimation',
          stagger('100ms', animateChild())
        )
      ])
    ])
  ]);
export const todoAnimation = trigger('todoAnimation', [
    transition(':enter', [
        useAnimation(fadeInAnimation, {
            params: {
              duration: '200ms',
            }
        })
    ]),
    transition(':leave', [
        style({ backgroundColor: '#f44336'}),
        animate(400),
        useAnimation(bounceOutLeftAnimation)
    ])
  ]);