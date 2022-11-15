import { Injectable } from '@angular/core';
import { IPlayer } from '../interfaces/player.interfaces';

@Injectable({
  providedIn: 'root'
})


export class PlayerService {
  public currentPlayer:IPlayer; 

  constructor() { 
    this.currentPlayer = {}; 
  }

  public getPlayer():IPlayer {
    return this.currentPlayer;
  }
  public savePlayer(player: IPlayer):void{
    this.currentPlayer = {...player}; 
    console.log("savePlayer"); 
    this.saveOnLocalSession('player', JSON.stringify(player))

  }

  public UpdateScore():void {

  }

  // private 

  private  saveOnLocalSession(name: string, value: string):void {
    localStorage.setItem(name, value);
  }


}
