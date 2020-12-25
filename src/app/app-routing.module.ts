import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';



const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['home']);
const redirectLoggedIn = () => redirectLoggedInTo(['dashboard']);


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),    
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedIn}    

  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)

  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedIn}
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToHome}
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then( m => m.SchedulePageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToHome}
  },
  {
    path: 'todolist',
    loadChildren: () => import('./todolist/todolist.module').then( m => m.TodolistPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToHome}
  },
  {
    path: 'add-schedule',
    loadChildren: () => import('./add-schedule/add-schedule.module').then( m => m.AddSchedulePageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToHome}
  },
  {
    path: 'edit-schedule/:id',
    loadChildren: () => import('./edit-schedule/edit-schedule.module').then( m => m.EditSchedulePageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToHome}
  },
  {
    path: 'add-todolist',
    loadChildren: () => import('./add-todolist/add-todolist.module').then( m => m.AddTodolistPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToHome}
  },
  {
    path: 'edit-todolist/:id',
    loadChildren: () => import('./edit-todolist/edit-todolist.module').then( m => m.EditTodolistPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToHome}
  },
  {
    path: 'delete-account',
    loadChildren: () => import('./delete-account/delete-account.module').then( m => m.DeleteAccountPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToHome}
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }