import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GistComponent } from './gist/gist.component';

const routes: Routes = [
  {
    path: "", redirectTo: "create-gist", pathMatch: "full"
  },
  {
    path: "create-gist", component: GistComponent
  },
  {
    path: "**", redirectTo: "create-gist", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
