import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customText'
})
export class CustomTextPipe implements PipeTransform {

  transform(value: string): string {
    return value.trim().length > 95 ? value.trim().substring(0, 95) + '...' : value;
  }

}
