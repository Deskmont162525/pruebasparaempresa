import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/posts/post/post.component';

const routes: Routes = [
 {
   path:'', redirectTo:'/home', pathMatch:'full'
 },
  { path: 'home', loadChildren: () => import('./components/pages/home/ome.module').then(m => m.OmeModule) },
{
    path: 'post/:id', component: PostComponent
},
 { path: 'listas', loadChildren: () => import('./components/pages/listas/listas.module').then(m => m.ListasModule) },
 { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) },
 { path: 'favoritos', loadChildren: () => import('./components/pages/favoritos/favoritos.module').then(m => m.FavoritosModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
