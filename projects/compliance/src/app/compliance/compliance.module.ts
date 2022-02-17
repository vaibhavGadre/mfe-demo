import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplianceComponent } from './compliance.component';
import { SharedModule } from 'shared';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ComplianceComponent
      }
    ])
  ],
  declarations: [ComplianceComponent]
})
export class ComplianceModule {}
