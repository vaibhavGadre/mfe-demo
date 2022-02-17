import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'shared';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot([
      // {
      //   path: '',
      //   component: InfraComponent
      // },
      {
        path: 'infra',
        loadChildren: () =>
          import('./infra/infra.module').then((m) => m.InfraModule)
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
