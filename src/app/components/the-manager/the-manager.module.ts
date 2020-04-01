import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TheManagerComponent } from './the-manager.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [TheManagerComponent],
  exports: [TheManagerComponent]
})
export class TheManagerComponentModule {}
