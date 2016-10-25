/**
 * Entry point of the page logic.
 * Starts rendering process.
 * Holds default configuration of events/timeline/grid.
 * Defines global functions: 'layOutDay' and 'layOutRandomDay'.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';

const DEFAULT_EVENTS = [
    {start: 30, end: 150},
    {start: 540, end: 600},
    {start: 560, end: 620},
    {start: 610, end: 670}
];

const DEFAULT_OPTIONS = {
    start: 60 * 9,
    end: 60 * 21,
    step: 30
};

/**
 * Options object
 * @typedef {Object} Options
 * @property {Number} start - Start time for the timeline (in minutes)
 * @property {Number} end - End time for the timeline (in minutes)
 * @property {Number} step - Step between numbers on the timeline (in minutes)
 * @property {Number} height - Height of the whole component (in pixels)
 */

/**
 * Displays passed events
 * @param {Array<{start: Number, end: Number}>} events - Array of events
 * @param {Options} [options] - Options object, see @typedef above
 */
window.layOutDay = function (events=[], options={}){
    let container = document.querySelector(".app-container");
    let height =  container.offsetHeight;
    options = Object.assign({height}, DEFAULT_OPTIONS, options);
    ReactDOM.render(<App events={events} options={options}/>, container);
}

/**
 * Generates random events and dysplays them
 * @param {Number} count - Amount of random events to generate
 * @param {Options} [options]
 */
window.layOutRandomDay = function (count, options){
    options = Object.assign({}, DEFAULT_OPTIONS, options);
    let events = new Array(count + 1).join('#').split('').map(()=>{
        let start = Math.random() * (options.end - options.start - 120);
        let end = start + 60 + Math.random() * 60;
        return {start: start, end: end};
    });
    window.layOutDay(events, options);
}

window.layOutDay(DEFAULT_EVENTS);
