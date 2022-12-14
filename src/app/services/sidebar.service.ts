import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[
    {
      titulo:'Dashboard',
      icono:'mdi mdi-gauge',
      submenu:[
        {
          titulo:'Main',url:'/'
        },
        {
          titulo:'Progress',url:'progress'
        },
        {
          titulo:'Charts',url:'charts'
        },
        {
          titulo:'Promesas',url:'promesas'
        },
        {
          titulo:'RxJs',url:'rxjs'
        },
      ]
    }
  ]

  constructor() { }
}
