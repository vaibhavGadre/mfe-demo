import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { loadMfe, PluginLoaderService } from './core/plugin-loader.service';
import { microFrontends } from './core/plugin-config';
import { HomeComponent } from './home/home.component';

const { compliance, infra } = microFrontends;

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'compliance',
    loadChildren: () => loadMfe(compliance).then((m) => m.ComplianceModule)
  },
  {
    path: 'infra',
    loadChildren: () => loadMfe(infra).then((m) => m.InfraModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
