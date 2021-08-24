import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentence',
})
export class SentencePipe implements PipeTransform {
  transform(value: string, limit = 1) {
    return value.split('.').slice(0, limit);
  }
}
