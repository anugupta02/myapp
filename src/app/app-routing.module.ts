import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import {TestPageComponent} from './test-page';
import {IconsComponent} from "./icons/icons.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {HaysAppComponent} from "./components/hays-app/hays-app.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'list', component: ListComponent },
  { path: 'test-page', component: TestPageComponent },
  { path: 'api', component:  HaysAppComponent},
  { path: 'heroes', component: DashboardComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
