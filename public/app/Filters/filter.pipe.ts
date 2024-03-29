import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

//filters based in first and last names, and username/email
export class FilterPipe implements PipeTransform {
  transform(items: any, term: any): any {
    if(term === undefined) return items;
    return items.filter( function(items){
      if(items.firstName.toLowerCase().includes(term.toLowerCase())){
        return true;
      }
      else if(items.lastName.toLowerCase().includes(term.toLowerCase())){
        return true;
      }
      else if(items.username.toLowerCase().includes(term.toLowerCase())){
        return true;
      }
      else{
        return false;
      }
    })
  }
}
