import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
// add the Lazily Loaded Path to 'candy' here...
{path: 'candy', loadChildren:() => import('./candy-module/candy-module.module')
                                        .then(m => m.CandyModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
