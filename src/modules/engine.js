import { Subject, Observable } from 'rxjs';
import { engineSound, turboSound, boostSound } from './sounds';

let currentThrottle = 0;
let currentTurbo = 0;

const boostSubject = new Subject();

export function setThrottle(amount) {
  currentThrottle = amount;
  engineSound(amount);
}

export function setTurbo(amount) {
  currentTurbo = amount;
  turboSound(amount);
}

export function boost() {
  boostSubject.next({});
  currentThrottle += 50;
  setTimeout(() => {
    currentThrottle -= 25;
  }, 2000);
  boostSound();
}

/*
 * Engine logic
 */

export const speed$ = Observable.interval(250).map(() => 1).scan((memo, boost) =>
  currentThrottle + (memo * currentTurbo / 100) + boost
, 0);

export const fuel$ = Observable.interval(250).scan((memo) => memo - currentThrottle / 1000, 80);
