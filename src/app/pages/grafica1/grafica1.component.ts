import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
  

  public delegaciones:string[]=['Malaga','Sevilla','Madrid'];
  public trimestres:string[]=['ene-mar','abr-jun','jul-sep','oct-dic'];

  public datosDelegacionesVentas:number[]=[500,600,650];
  public datosDelegacionesCompras:number[]=[350,500,450];

  public datosGlobalVentas:number[]=[440,560,500,250];
  public datosGlobalCompras:number[]=[300,400,250,350];


  constructor() { }

  ngOnInit(): void {
  }

}
