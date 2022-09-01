import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styleUrls: ['./acount-settings.component.css']
})
export class AcountSettingsComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');

  constructor(private settings:SettingsService) { }

  ngOnInit(): void {
    this.checkCurrentTheme()
  }

  changeTheme(theme:string){


    this.settings.changeTheme(theme);
    
    this.checkCurrentTheme()
  }

  checkCurrentTheme(){
    const links = document.querySelectorAll('.selector');
    
    links.forEach(e=>{
      
      e.classList.remove('.working');
      const btnTheme = e.getAttribute('data-theme');
      
      const btnThemeUrl=`./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');
      if (btnThemeUrl===currentTheme){
        e.classList.add('.working');
      }
    })
  }
  

}
