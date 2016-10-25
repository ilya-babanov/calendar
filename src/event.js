/**
 * Event component.
 * Simple box with sample text.
 * Uses 'position: absolute' and top/left/width/height params.
 */
import React, { Component } from 'react';
import './event.css';

class Event extends Component {
    render() {
         return (
             <div className="event" style={this.props.style}>
                 <div className="event-content">
                    <div className="event-title">Sample item</div>
                    <div className="event-location">Sample location</div>
                 </div>
             </div>
         );
     }
}

export default Event;
