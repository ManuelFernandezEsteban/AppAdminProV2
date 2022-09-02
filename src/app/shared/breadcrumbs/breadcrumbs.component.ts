import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { pipe, filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public titulo:string='';
  public tituloSubs$:Subscription;

  constructor(private router:Router) {

    this.tituloSubs$ = this.getArgumentosRuta().subscribe(({title})=>{
      this.titulo=title;
      document.title=`Admin-Pro ${this.titulo}`
    });

  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  ngOnInit(): void {
  }

  getArgumentosRuta(){
    return this.router.events.pipe(
      filter<any>( (e)=>e instanceof ActivationEnd ),
      filter( (e:ActivationEnd)=> e.snapshot.firstChild===null) ,
      map((e:ActivationEnd)=> e.snapshot.data));
    
  }


}
