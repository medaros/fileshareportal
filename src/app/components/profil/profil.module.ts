import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilComponent } from './profil.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ProfilComponent],
  exports: [ProfilComponent]
})
export class ProfilComponentModule {}
