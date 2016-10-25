/**
 * Layout module.
 * Holds logic for calculating positions of the events
 * based on their start/end values and timeline/grid size.
 * Exports only one function - 'layoutEvents'.
 */

class LayoutBox {
     constructor(event, heightScale) {
          this.start = event.start;
          this.end = event.end;
          this.columns = [[event]];
          this.widthRatio = 100;
          this.heightScale = heightScale;
     }

     addEvent(event) {
          let added = false;
          for (let column of this.columns) {
               let lastEvent = column[column.length - 1];
               if (lastEvent.end < event.start) {
                    column.push(event);
                    added = true;
                    break;
               }
          }
          if (!added) {
               this.columns.push([event]);
          }
          this.end = Math.max(this.end, event.end);
          this.widthRatio = 100 / this.columns.length;
     }

     canBeAdded(event) {
          return event.start < this.end;
     }

     layoutEvents() {
          return this.columns.reduce((events, column, columnIndex)=>{
               return events.concat(
                   column.map(event=>this._layoutEvent(event, columnIndex))
               );
          }, []);
     }

     _layoutEvent(event, columnIndex) {
          return {
               event,
               style: {
                    top: event.start * this.heightScale + "px",
                    left: columnIndex * this.widthRatio + "%",
                    width: this.widthRatio + "%",
                    height: (event.end - event.start) * this.heightScale + "px",
               }
          };
     }
}

function compareEvents(e1, e2){
     return e1.start - e2.start;
}

function accumulateLayoutBoxes(heightScale, boxes, event){
     let prevBox = boxes[boxes.length - 1];
     if (prevBox && prevBox.canBeAdded(event)) {
          prevBox.addEvent(event);
     } else {
          boxes.push(new LayoutBox(event, heightScale));
     }
     return boxes;
}

function accumulatePositionedItems(items, box){
     return items.concat(box.layoutEvents());
}

/**
 * Calculates positions of the events.
 * Returns array of items with 'event' field (original event) and 'style'
 * field (position paramenters).
 * @param {Array<{start: Number, end: Number}>} events
 * @param {Number} start - Start time of the whole calendar view (in minutes)
 * @param {Number} end - End time of the whole calendar view (in minutes)
 * @param {Number} height - Height of the calendar view (in pixels)
 * @returns {Array<{event: Object, style: Object}>}
 */
export default function layoutEvents(events, {start, end, height}) {
     let heightScale = height / (end - start);
     return events
        .sort(compareEvents)
        .reduce(accumulateLayoutBoxes.bind(null, heightScale), [])
        .reduce(accumulatePositionedItems, []);
};
