import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() btnType: string;
  @Input() lblBtn: string;
  @Input() btnClass: string;
  @Input() iconClass: string;
  @Input() isDisabled: boolean;

  @Output() OnClick = new EventEmitter<string>();

  emitEvent(){
    this.OnClick.emit();
  }
}
