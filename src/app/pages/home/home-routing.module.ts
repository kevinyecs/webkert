import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'splash', pathMatch: 'full'},
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'splash',
        loadChildren: () => import('src/app/pages/splash/splash.module').then(m => m.SplashModule),
      },
      {
        path: 'servicecategory',
        loadChildren: () => import('src/app/pages/servicecategory/servicecategory.module').then(m => m.ServicecategoryModule),
      },
      {
      path: 'servicecatalog',
      loadChildren: () => import('src/app/pages/servicecatalog/list-servicecatalog/list-servicecatalog.module').then(m => m.ListServicecatalogModule),
      },
      {
        path: 'games',
        loadChildren: () => import('src/app/pages/game/list/game-list.module').then(m => m.GameListModule),
        }

    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
