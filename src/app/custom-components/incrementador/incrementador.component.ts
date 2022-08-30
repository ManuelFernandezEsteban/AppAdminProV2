import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input('valor') progreso:number=50;
  @Input() btnClass:string='btn btn-primary';

  @Output() valorEmitido:EventEmitter<number>=new EventEmitter<number>();

  cambiarValor(valor:number){
    if (this.progreso>=100 && valor>0){
      this.valorEmitido.emit(100);
      this.progreso=100;
      return;
    }else if(this.progreso<=0 && valor<0){
      this.valorEmitido.emit(0);
      this.progreso=0;
      return;
    }
    this.progreso += valor;
    this.valorEmitido.emit(this.progreso);
  }

  onChangeInput(valor:number){
    if (valor>=100){
      this.progreso=100;
    }else if (valor<=0){
      this.progreso=0;
    }
    this.progreso=valor;
    this.valorEmitido.emit(this.progreso);
  }

}
