import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export const weekDayValidator : ValidatorFn = (control: AbstractControl) : ValidationErrors | null => {
  const startWeekday = control.get('startWeekDay');
  const endWeekDay = control.get('endWeekDay');
  return startWeekday && endWeekDay && getIndexOfWeekDay(startWeekday.value) > getIndexOfWeekDay(endWeekDay.value) ? { 'endWeekDaySelection': true } : null;
}

function getIndexOfWeekDay(day: string) : number {
  switch(day){
    case 'Domingo': return 0;
    case 'Segunda': return 1;
    case 'Terça': return 2;
    case 'Quarta': return 3;
    case 'Quinta': return 4;
    case 'Sexta': return 5;
    case 'Sábado': return 6;
    default: throw new Error("Something wrong here...");
  }
}
