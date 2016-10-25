### What is it
`React` calendar app.

Renders provided events using rules:
- no events may visually overlap
- if events collide in time, they must have the same width

### Global API
There are two functions in the global scope:
- `layOutDay(events, options)`
- `layOutRandomDay(numberOfEvents, options)`


Arguments:
```
Array of Events
@typedef {Array<Event>} Events

Event object
@typedef {Object} Event
@property {Number} start - number of minutes since `start` value of the timeline
@property {Number} end - number of minutes since `start` value of the timeline

Options object, optional for both functions
@typedef {Object} Options
@property {Number} start - Start time for the timeline (in minutes)
@property {Number} end - End time for the timeline (in minutes)
@property {Number} step - Step between numbers on the timeline (in minutes)
@property {Number} height - Height of the whole component (in pixels)

Number of events
@typedef {Number} numberOfEvents
```

Examples:
```javascript
layOutRandomDay(10, {step: 15, height: 737});
layOutDay([{start: 0, end: 60}, {start: 15, end: 120}], {step: 15, height: 737});
```

### Build
- `cd` to `project` folder and run `npm i`
- run `npm run start` in order to open browser and start development server
- run `npm run build` in order to create `build` directory with production-ready files

Open `build/index.html` file in order to see result.
It loads minified files from `build/static/` folder.

Source maps are provided: in devtools `sources` tab open `webpack://` -> `.` -> `src`
