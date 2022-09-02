import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [

    {
        path:'dashboard',
        component:PagesComponent,
        children:[
          {path:'',component:DashboardComponent,data:{title:'Dashboard'}},
          {path:'progress',component:ProgressComponent,data:{title:'ProgressBar'}},
          {path:'charts',component:Grafica1Component,data:{title:'Charts'}},   
          {path:'promesas',component:PromesasComponent,data:{title:'Promesas'}},
          {path:'rxjs',component:RxjsComponent,data:{title:'RxJs'}},
          {path:'settings',component:AcountSettingsComponent,data:{title:'Temas'}},       
        ]
    }
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
