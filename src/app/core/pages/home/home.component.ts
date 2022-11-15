import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IButton } from '../../interfaces/button.interfaces';
import { PlayerService } from '../../services/player.service';
import { IPlayer } from '../../interfaces/player.interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public myForm: FormGroup;
  public name: FormControl; 
  public myButton: IButton; 
  public player: IPlayer = {}; 

  constructor(private fb: FormBuilder, private playerServ: PlayerService
      ,private route: Router
) 
  { 
    this.name = new FormControl('',[Validators.required]); 
    this.myForm = this.fb.group({
      name: this.name
    })
    this.myButton = {
      text: 'Registrate',
      class: 'btn-register',
      isDisabled: this.myForm.invalid,
    }
    this
  }


  ngOnInit(): void {
  }

  public valueButton(event: any){
    console.log("Click home: ",event);
    // guardamos nombre usuario
    console.log(this.myForm)
    this.player={name: this.myForm.controls.name.value}; 
    console.log(this.player)

    this.playerServ.savePlayer(this.player); 

    // redirect to game view
    this.route.navigate(['/game']);

  }

  public onCreate():void{

  }

}
