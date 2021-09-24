import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';

const routes:Routes=[
  {
    path:'auth',
    loadChildren: ()=>
      import('./modules/auth/auth.module').then(
        (module) => module.AuthModule
      )
  },
  {
    path:'heroes',
    loadChildren: ()=>
      import('./modules/heroes/heroes.module').then(
        (module) => module.HeroesModule
      ),
      canLoad:[AuthGuard],
      canActivate:[AuthGuard],
  },
  {
    path:'404',
    component:ErrorPageComponent
  },

  {
    path:'**',
    component:ErrorPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
