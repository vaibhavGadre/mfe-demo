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
      //   component: ComplianceComponent
      // },
      {
        path: 'compliance',
        loadChildren: () =>
          import('./compliance/compliance.module').then(
            (m) => m.ComplianceModule
          )
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
