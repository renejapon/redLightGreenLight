import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IButton } from '../../interfaces/button.interfaces';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() public customButton: IButton = {}; 
  @Input() public isDisabled: boolean = false; 

  @Output()
    public buttonValue = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  public clickButton(event: MouseEvent) {
    this.buttonValue.emit(event);
  }

}
