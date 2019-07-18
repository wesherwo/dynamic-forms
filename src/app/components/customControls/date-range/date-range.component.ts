import {Component, Input} from '@angular/core';
import { DateRange } from 'src/app/controls/date-range';

/** @title Basic datepicker */
@Component({
  selector: 'date-range',
  templateUrl: './date-range.component.html'
})

export class DateRangeComponent{
    @Input() control: DateRange;
}