/**
 * Top UI component.
 * Creates Timeline and Grid components and places events on the grid.
 */
import React, { Component } from "react";
import Event from './event.js';
import Timeline from './timeline.js';
import Grid from './grid.js';
import layout from './layout.js';
import "./app.css";

// Use margin for the Grid for proper aligment with the Timeline
const GRID_MARGIN = 10;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {margin: GRID_MARGIN};
    }

    createEvents(options, events) {
        let items = layout(events, options);
        return items.reduce((result, item, index)=>{
            result.push(<Event key={index} style={item.style}/>);
            return result;
        }, []);
    }

    getOptions() {
        return Object.assign({}, this.props.options, this.state);
    }

    handleOptionsChange(newOptions) {
        this.setState(newOptions);
    }

    render() {
        let options = this.getOptions();
        let events = this.createEvents(options, this.props.events);
        return (
            <div>
                <div className="cal">
                    <Timeline options={options}/>
                    <Grid options={options} events={events}/>
                </div>
            </div>
        );
    }
}

export default App;
