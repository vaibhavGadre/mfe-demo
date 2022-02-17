import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraComponent } from './infra.component';
import { SharedModule } from 'shared';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: InfraComponent
      }
    ])
  ],
  declarations: [InfraComponent]
})
export class InfraModule {}
