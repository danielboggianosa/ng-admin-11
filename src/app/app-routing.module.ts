import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ContentWrapperComponent } from './layout/content-wrapper/content-wrapper.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { RegisterComponent } from './pages/register/register.component';
import { MultiplicacionComponent } from './pages/aritmetica/multiplicacion/multiplicacion.component';
import { SumaComponent } from './pages/aritmetica/suma/suma.component';
import { RestaComponent } from './pages/aritmetica/resta/resta.component';
import { DivisionComponent } from './pages/aritmetica/division/division.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // RUTAS PÚBLICAS
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recover', component: RecoverComponent },
  { path: '404', component: NotFoundComponent },
  // RUTAS PRIVADAS
  {
    path: 'dashboard', component: ContentWrapperComponent, children: [
      { path: '', component: DashboardPageComponent },
      { path: 'aritmetica/suma', component: SumaComponent },
      { path: 'aritmetica/resta', component: RestaComponent },
      { path: 'aritmetica/multiplicacion', component: MultiplicacionComponent },
      { path: 'aritmetica/division', component: DivisionComponent },
      
    ]
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
