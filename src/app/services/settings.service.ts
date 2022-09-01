import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');

  constructor() { 
    let urlTheme = localStorage.getItem('theme');
    if (urlTheme!=null){
      this.linkTheme!.setAttribute('href',urlTheme);
    } else{
      urlTheme = `./assets/css/colors/default`;
      this.linkTheme!.setAttribute('href',urlTheme);
    }
 }
    changeTheme(theme:string){


      const urlTheme = `./assets/css/colors/${theme}`;
      if (this.linkTheme){
        this.linkTheme!.setAttribute('href',urlTheme);
      }
      
      localStorage.setItem('theme',urlTheme);
      
    }
 
}
