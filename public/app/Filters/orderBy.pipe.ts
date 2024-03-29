import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "orderby"
})
export class SortPipe {
  transform(array: any, args: any): any {
    if(array !== undefined){
      array.sort((a: any, b: any) => {
        if ( a[args].toLowerCase() < b[args].toLowerCase() ){
          return -1;
        }else if( a[args].toLowerCase() > b[args].toLowerCase() ){
          return 1;
        }else{
          return 0;
        }
      });
    }
    return array;
  }
}
