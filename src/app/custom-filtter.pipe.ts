import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFiltter'
})
export class CustomFiltterPipe implements PipeTransform {

  transform(list:any[], term: string): any [] {
    return list.filter((item) => item["title"].includes(term));
  }

}
