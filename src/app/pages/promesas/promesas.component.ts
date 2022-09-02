import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(data=>console.log(data));

 /*   const promesa = new Promise((resolve,reject)=>{

      if (false){
        resolve('Hola mundo');
      }else{
        reject('error')
      }

      
    });

    promesa.then((mensaje)=>{
      console.log('termine',mensaje);
    }).catch(error=>console.log('error',error))
    console.log('Fin del init');*/
  }

  getUsuarios(){

    return new Promise(resolve=>{
      fetch('https://reqres.in/api/users')
      .then(resp=>resp.json())
      .then(data=>resolve(data.data))
    });
    
  }
}
