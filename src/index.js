import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Tone from 'tone';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

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

const play = () => {
	const notes = ['F3', 'Ab3', 'C4', 'Db4', 'Eb4', 'F4', 'Ab4'];
	bass.triggerAttack('F1');
	noise.start();

	setInterval(() => {
		duo.triggerAttackRelease(notes[Math.floor(Math.random() * notes.length)], 5);
	}, 10000);
	duo.triggerAttackRelease(notes[Math.floor(Math.random() * notes.length)], 5);
};

play();