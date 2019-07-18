import { ControlBase } from './control-base';

export class DateRange extends ControlBase<string> {
    controlType = 'dateRange';
    startDate:Date;
    endDate:Date;

    constructor(options: {} = {}) {
        super(options);
        this.required = true;
        this.startDate = options['startDate'];
        this.endDate = options['endDate'];
        this.errorMessage = "Start date must be before end date"
    }

    updateRange(){
        this.value = "{startDate:"+ this.startDate + ",endDate:" + this.endDate + "}";
    }

    updateStartDate($event){
        this.startDate = $event.value;
        this.updateRange();
    }

    updateEndDate($event){
        this.endDate = $event.value;
        this.updateRange();
    }

    isValid(){
        return super.isValid() && this.endDate >= this.startDate;
    }
}