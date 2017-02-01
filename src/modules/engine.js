import { Subject, Observable } from 'rxjs';

const Tone = window.AudioContext && require('tone');

let currentThrottle = 0;
let currentTurbo = 0;

let engineSoundInterval;
let turboSoundInterval;

const boostSubject = new Subject();

function playEngineSound(amount) {

  window.clearInterval(engineSoundInterval);

  if(amount === 0) {
    return;
  }

  const synth = new Tone.PluckSynth().toMaster();

  engineSoundInterval = setInterval(() => {
    const freq = 1000 + Math.random() * 200;
    synth.triggerAttackRelease(freq, 0.05);
  }, 100 - amount);

}

function playTurboSound(amount) {

  window.clearInterval(turboSoundInterval);

  const synth = new Tone.MembraneSynth().toMaster();
  if(amount === 0) {
    return;
  }

  turboSoundInterval = setInterval(() => {
    const freq = 1000 + Math.random() * 5000;
    synth.triggerAttackRelease(freq, 0.3);
  }, 100 - amount);

}


function playBoostSound() {
  const noise = new Tone.Noise({
    volume: 0,
    type: 'white'
  }).chain(
    new Tone.Volume(-20),
    Tone.Master
  );

  const throttleSynth = new Tone.MonoSynth().toMaster();

  throttleSynth.triggerAttack(0);

  noise.start();

  setTimeout(() => {
    noise.stop();
  }, 2000);
}

export function setThrottle(amount) {
  currentThrottle = amount;
  window.AudioContext && playEngineSound(amount);
}

export function setTurbo(amount) {
  currentTurbo = amount;
  window.AudioContext && playTurboSound(amount);
}

export function boost() {
  boostSubject.next({});
  currentThrottle += 50;
  setTimeout(() => {
    currentThrottle -= 25;
  }, 2000);
  window.AudioContext && playBoostSound();
}

/*
 * Engine logic
 */

export const speed$ = Observable.interval(250).map(() => 1).scan((memo, boost) =>
  currentThrottle + (memo * currentTurbo / 100) + boost
, 0);

export const fuel$ = Observable.interval(250).scan((memo) => memo - currentThrottle / 1000, 80);
