import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(beers: any, term: string): any {
    // check if search term is undefined
    if (beers.lenght === 0 || term === ''){
      return beers;
    } else {
      // return updated array with results
      return beers.filter(beer =>{
            return beer.name.toLowerCase().includes(term.toLowerCase())
          }

      );

    }

  }}