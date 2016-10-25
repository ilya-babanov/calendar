/**
 * Timeline component.
 * Calculates and displays column of dates from predefined 'start' to 'end'.
 */
import React, { Component } from "react";
import * as util from "./util.js";
import "./timeline.css";

class Timeline extends Component {
    createTimeColumn({start, end, step, height}) {
        let nodes = [];
        let style = {height: step * height / (end - start)};
        for (let i = start; i <= end; i += step) {
            nodes.push(this.createTimeNode(i, style));
        }
        return nodes;
    }

    createTimeNode(min, style) {
        let time = util.parseTime(min);
        let modificator = time.isRound ? "cal-time-item-round" : "";
        return (
            <div className={"cal-time-item " + modificator} style={style} key={min}>
                <span className="cal-time-date">{time.date}</span>
                <span className="cal-time-period">{time.period}</span>
            </div>
        );
    }

    render() {
        return (
            <div className="cal-time-column">
                {this.createTimeColumn(this.props.options)}
            </div>
        );
    }
}

export default Timeline;
