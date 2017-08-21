import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actFilter'
})
export class ActFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
