import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-beerslist',
  templateUrl: './beerslist.component.html',
  styleUrls: ['./beerslist.component.css'],

})

export class BeerslistComponent implements OnInit {

  title: string = 'Deyan Beers App Guide';
  private apiUrl: string = 'https://api.punkapi.com/v2/beers';
  private perPage: string = "per_page=80";

  //initializing p to 1
  p: number = 1;

  //data from punkApi
  data: any = [];

  //search pipe, empty
  term: string = '';

  constructor(private http: Http){
    this.http.get(this.apiUrl + '?' + this.perPage)
        .map(response => response.json())
        .subscribe(res => this.data = res,
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // A client-side or network error occurred.
            console.log('An error occurred:', err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
         }
        );
  }

  ngOnInit() {

  }

}
