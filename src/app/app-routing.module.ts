import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './Feature/Standalone-NgRx/counter/counter.component';
import { AppComponent } from './app.component';
import { BootstrapComponent } from './Feature/pages/bootstrap/bootstrap.component';

const routes: Routes = [
  {path:'home',component:AppComponent,pathMatch:'full'},
  {path:'counter',component:CounterComponent},
  {path:'bootstrap',component:BootstrapComponent},
  {path:'*' , redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
