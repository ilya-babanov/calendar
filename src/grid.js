/**
 * Grid component.
 * Calculates and displays column of lines.
 * Container for events.
 */
import React, { Component } from "react";
import "./grid.css";

class Grid extends Component {
    createGrid({start, end, step, height}) {
        let rows = [];
        let count = (end - start) / (2 * step);
        let style = {height: 2 * step * height / (end - start)};
        while (count-- > 0) {
            rows.push(<div className="cal-grid-row" style={style} key={count}/>);
        }
        return rows;
    }

    getGridStyle(options) {
        return {marginTop: options.margin};
    }

    render() {
        return (
            <div className="cal-grid" style={this.getGridStyle(this.props.options)}>
                <div className="cal-grid-rows">
                    {this.createGrid(this.props.options)}
                </div>
                <div className="cal-grid-events">
                    {this.props.events}
                </div>
            </div>
        );
    }
}

export default Grid;
