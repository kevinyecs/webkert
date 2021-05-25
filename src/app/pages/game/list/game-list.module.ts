import { GameAddModule } from './../add/game-add.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GameCardModule } from './../card/game-card.module';
import { ContainerModule } from './../../../shared/components/container/container.module';
import { GameListRoutingModule } from './game-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [GameListComponent],
  imports: [
    CommonModule,
     GameListRoutingModule,
      MatToolbarModule,
       ContainerModule,
        GameCardModule,
         MatButtonModule,
          MatIconModule,
           GameAddModule
  ]
})
export class GameListModule { }
