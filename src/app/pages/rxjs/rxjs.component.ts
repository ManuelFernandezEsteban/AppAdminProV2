import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit,OnDestroy {

  public intervalSubs:Subscription;

  constructor() { 

    this.intervalSubs = this.retornaInterval().subscribe(console.log);
    
/*
    this.retornaObs().subscribe(
      valor=>console.log(valor),
      error=>console.log(error),
      ()=>console.log('Termino')
    );
*/
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  ngOnInit(): void {
  }

  retornaInterval():Observable<number>{
    return interval(500).pipe(
      take(10),      
      map(v=>v+1),
      filter((v)=>v%2===0),
    )
   
  }

  retornaObs():Observable<number>{
    let i = 0;

    return new Observable<number>(observer=>{
      const interval = setInterval(()=>{
        i++;
        observer.next(i);
        if(i===4){
          clearInterval(interval);
          observer.complete();
        }
      },1000)
    });
  }

}
