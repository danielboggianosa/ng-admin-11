import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ContentWrapperComponent } from './layout/content-wrapper/content-wrapper.component';
import { ActivityLogPageComponent } from './pages/activity-log-page/activity-log-page.component';
import { AnimationsPageComponent } from './pages/animations-page/animations-page.component';
import { BlankComponent } from './pages/blank/blank.component';
import { BordersPageComponent } from './pages/borders-page/borders-page.component';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { ChartsPageComponent } from './pages/charts-page/charts-page.component';
import { ColorsPageComponent } from './pages/colors-page/colors-page.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OtherPageComponent } from './pages/other-page/other-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { RegisterComponent } from './pages/register/register.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { TablePageComponent } from './pages/table-page/table-page.component';

const routes: Routes = [
  {path:'', redirectTo: '/dashboard', pathMatch: 'full'},
  // RUTAS PÚBLICAS
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'recover', component: RecoverComponent},
  {path:'404', component: NotFoundComponent},
  // RUTAS PRIVADAS
  {path:'dashboard', component: ContentWrapperComponent, children: [
    {path: '', component: DashboardPageComponent},
    {path: 'cards', component: CardsPageComponent},
    {path: 'buttons', component: ButtonsPageComponent},
    {path: 'color', component: ColorsPageComponent},
    {path: 'animation', component: AnimationsPageComponent},
    {path: 'border', component: BordersPageComponent},
    {path: 'other', component: OtherPageComponent},
    {path: 'activity', component: ActivityLogPageComponent},
    {path: 'calendar', component: CalendarPageComponent},
    {path: 'charts', component: ChartsPageComponent},
    {path: 'forms', component: FormsPageComponent},
    {path: 'profile', component: ProfilePageComponent},
    {path: 'settings', component: SettingsPageComponent},
    {path: 'tables', component: TablePageComponent},
    {path: 'blank', component: BlankComponent},
    {path: 'calendar', component: CalendarPageComponent},
    {path: 'forms', component: FormsPageComponent},
  ]}, 
  {path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
