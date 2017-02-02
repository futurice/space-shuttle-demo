const Tone = window.AudioContext && require('tone');

/*
 * Engine sound
 */

let engineSoundInterval;
export function engineSound(amount) {

  if(!window.AudioContext) {
    return;
  }

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

/*
 * Turbo sound
 */

let turboSoundInterval;

export function turboSound(amount) {

  if(!window.AudioContext) {
    return;
  }

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

/*
 * Boost sound
 */

export function boostSound() {

  if(!window.AudioContext) {
    return;
  }

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

/*
 * Background ambient
 */

export function backgroundAmbient() {
  if(!window.AudioContext) {
    return;
  }

	const notes = ['F3', 'Ab3', 'C4', 'Db4', 'Eb4', 'F4', 'Ab4'];
  const VOLUME = -10;

  const bass = new Tone.AMSynth().chain(
    new Tone.Tremolo(0.1, 0.8).start(),
    new Tone.Filter(150, 'highpass'),
    new Tone.Filter(151, 'lowpass'),
    new Tone.Volume(VOLUME),
    Tone.Master
  );

  const noise = new Tone.Noise({
    volume: VOLUME * 2,
    type: 'white'
  }).chain(
    new Tone.Filter(300, 'lowpass'),
    Tone.Master
  );

  const duo = new Tone.DuoSynth({
    voice0: {
      portamento: 2,
      envelope: {
        attack: 3,
        decay: 1,
        sustain: 1,
        release: 0.5
      }
    },
    voice1: {
      portamento: 2,
      envelope: {
        attack: 3,
        decay: 1,
        sustain: 1,
        release: 0.5
      }
    }
  }).chain(
    new Tone.Volume(VOLUME * 2),
    new Tone.JCReverb(1),
    new Tone.Filter(140, 'highpass'),
    new Tone.Filter(141, 'lowpass'),
    Tone.Master
  );

	bass.triggerAttack('F1');
	noise.start();

	setInterval(() => {
		duo.triggerAttackRelease(notes[Math.floor(Math.random() * notes.length)], 5);
	}, 10000);
	duo.triggerAttackRelease(notes[Math.floor(Math.random() * notes.length)], 5);
}