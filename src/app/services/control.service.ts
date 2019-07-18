import { Injectable } from '@angular/core';

import { Dropdown } from '../controls/dropdown';
import { Textbox } from '../controls/textbox';
import { Radio } from '../controls/radio';
import { StarRating } from '../controls/star-rating';
import { ControlBase } from '../controls/control-base';
import { DateRange } from '../controls/date-range';
import { Checkbox } from '../controls/checkbox';
import { DatePicker } from '../controls/date-picker';
import { Slider } from '../controls/slider';
import { Toggle } from '../controls/toggle';

@Injectable()
export class ControlService {

  getControls(jsonData) {

    let controls: ControlBase<any>[] = [];
    for (let i = 0; i < jsonData.length; i++) {
      let type = jsonData[i].type;

      if (type == "Textbox") {
        controls.push(new Textbox(jsonData[i].options));
      }

      if (type == "Dropdown") {
        controls.push(new Dropdown(jsonData[i].options));
      }

      if (type == "Radio") {
        controls.push(new Radio(jsonData[i].options));
      }

      if (type == "StarRating") {
        controls.push(new StarRating(jsonData[i].options));
      }

      if (type == "DateRange") {
        controls.push(new DateRange(jsonData[i].options));
      }

      if (type == "Checkbox") {
        controls.push(new Checkbox(jsonData[i].options));
      }

      if (type == "Datepicker") {
        controls.push(new DatePicker(jsonData[i].options));
      }

      if (type == "Slider") {
        controls.push(new Slider(jsonData[i].options));
      }

      if (type == "Toggle") {
        controls.push(new Toggle(jsonData[i].options));
      }
    }

    return controls.sort((a, b) => a.order - b.order);
  }
}
