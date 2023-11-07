import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandyComponent } from './candy/candy.component';

const routes: Routes = [
  // with Lazy Loading, we want the route to be
  // localhost:4200/candy, not
  // localhost:4200/candy/candy
  // so we modify the path to the component here to be '',
  // and in the app.module routing, we specify path: 'candy', loadchildren... (the module)'
  // { path: 'candy', component: CandyComponent}
   {path: '', component: CandyComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandyModuleRoutingModule {}
