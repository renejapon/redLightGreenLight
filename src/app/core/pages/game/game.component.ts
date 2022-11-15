import { Component, OnInit } from '@angular/core';
import { IButton } from '../../interfaces/button.interfaces';
import { IPlayer } from '../../interfaces/player.interfaces';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public buttonRight: IButton = {}; 
  public buttonLeft: IButton = {}; 
  public currentPlayer: IPlayer = {}; 


  constructor(
    private playerServ: PlayerService
  ) { 
    this.buttonLeft = {
      text: 'Izquierda',
      class: 'btn-left',
    }; 
    this.buttonRight = {
      text: 'Derecha',
      class: 'btn-right',
    }
  }

  ngOnInit(): void {
    this.currentPlayer = this.playerServ.getPlayer();
  }

}
