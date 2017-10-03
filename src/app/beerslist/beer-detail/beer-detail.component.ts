import { Component,  OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit, OnDestroy {

  private routerSub: any;
  name: string;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit() {
    this.routerSub = this.route.params.subscribe(params => {
      this.name = params['name']
    })
  }

  // prevent memory leaks
  ngOnDestroy(){
    this.routerSub.unsubscribe();
  }

}
