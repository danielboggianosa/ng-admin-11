import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardBasicComponent } from './components/cards/card-basic/card-basic.component';
import { CardCollapsableComponent } from './components/cards/card-collapsable/card-collapsable.component';
import { CardDropdownComponent } from './components/cards/card-dropdown/card-dropdown.component';
import { CardDefaultComponent } from './components/cards/card-default/card-default.component';
import { CardCurrencyComponent } from './components/cards/card-currency/card-currency.component';
import { CardProgressComponent } from './components/cards/card-progress/card-progress.component';
import { CardRequestsComponent } from './components/cards/card-requests/card-requests.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentWrapperComponent } from './layout/content-wrapper/content-wrapper.component';
import { BlankComponent } from './pages/blank/blank.component';
import { ModalLogoutComponent } from './components/modals/modal-logout/modal-logout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';
import { AnimationsPageComponent } from './pages/animations-page/animations-page.component';
import { BordersPageComponent } from './pages/borders-page/borders-page.component';
import { OtherPageComponent } from './pages/other-page/other-page.component';
import { ChartsPageComponent } from './pages/charts-page/charts-page.component';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { ActivityLogPageComponent } from './pages/activity-log-page/activity-log-page.component';
import { ColorsPageComponent } from './pages/colors-page/colors-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ButtonCircleComponent } from './components/buttons/button-circle/button-circle.component';
import { ButtonBrandComponent } from './components/buttons/button-brand/button-brand.component';
import { ButtonSplitComponent } from './components/buttons/button-split/button-split.component';
import { ButtonUserComponent } from './components/buttons/button-user/button-user.component';
import { CardBorderLeftComponent } from './components/cards/card-border-left/card-border-left.component';
import { ButtonDropdownComponent } from './components/buttons/button-dropdown/button-dropdown.component';
import { NavbarDropdownComponent } from './components/navbar/navbar-dropdown/navbar-dropdown.component';
import { DataTableComponent } from './components/data/data-table/data-table.component';
import { DataCardComponent } from './components/data/data-card/data-card.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './components/data/pagination/pagination.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { AreaChartComponent } from './components/charts/area-chart/area-chart.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import { FormsComponent } from './components/forms/forms.component';
import { ProgressBarComponent } from './components/bars/progress-bar/progress-bar.component';
import { CardTabsComponent } from './components/cards/card-tabs/card-tabs.component';
import { ButtonDateRangeComponent } from './components/buttons/button-date-range/button-date-range.component';
import { MultiplicacionComponent } from './pages/aritmetica/multiplicacion/multiplicacion.component';
import { ModalBasicComponent } from './components/modals/modal-basic/modal-basic.component';
import { DivisionComponent } from './pages/aritmetica/division/division.component';
import { SumaComponent } from './pages/aritmetica/suma/suma.component';
import { RestaComponent } from './pages/aritmetica/resta/resta.component'; // a plugin

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    CardBasicComponent,
    CardCollapsableComponent,
    CardDropdownComponent,
    CardDefaultComponent,
    CardCurrencyComponent,
    CardProgressComponent,
    CardRequestsComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    ContentWrapperComponent,
    BlankComponent,
    ModalLogoutComponent,
    LoginComponent,
    RegisterComponent,
    RecoverComponent,
    NotFoundComponent,
    CardsPageComponent,
    ButtonsPageComponent,
    AnimationsPageComponent,
    BordersPageComponent,
    OtherPageComponent,
    ChartsPageComponent,
    TablePageComponent,
    FormsPageComponent,
    CalendarPageComponent,
    ProfilePageComponent,
    SettingsPageComponent,
    ActivityLogPageComponent,
    ColorsPageComponent,
    DashboardPageComponent,
    ButtonCircleComponent,
    ButtonBrandComponent,
    ButtonSplitComponent,
    ButtonUserComponent,
    CardBorderLeftComponent,
    ButtonDropdownComponent,
    NavbarDropdownComponent,
    DataTableComponent,
    DataCardComponent,
    PaginationComponent,
    BarChartComponent,
    PieChartComponent,
    AreaChartComponent,
    FormsComponent,
    ProgressBarComponent,
    CardTabsComponent,
    ButtonDateRangeComponent,
    MultiplicacionComponent,
    ModalBasicComponent,
    DivisionComponent,
    SumaComponent,
    RestaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
