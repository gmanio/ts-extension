import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './home/home-routing.module#HomeRoutingModule' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
