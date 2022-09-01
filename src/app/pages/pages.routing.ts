import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';


const routes: Routes = [

    {
        path:'dashboard',
        component:PagesComponent,
        children:[
          {path:'',component:DashboardComponent},
          {path:'progress',component:ProgressComponent},
          {path:'charts',component:Grafica1Component},   
          {path:'settings',component:AcountSettingsComponent},       
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
