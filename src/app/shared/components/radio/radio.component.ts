import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements ControlValueAccessor {
  @Input() placeholder: string;
  @Input() nameText: string;
  @Input() valueText: string;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() _value: any;
  @Input() inputValue?: string;
  identifier: any = new Date().getUTCMilliseconds();
  i: any;

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this._onChange(this._value);
  }

  _onChange(value: any) {
    return;
  }

  writeValue(value: any) {
      if (value !== undefined) {
          this.value = value;
      }
  }
  registerOnChange(fn: (value: any) => void) {
      this._onChange = fn;
  }

  registerOnTouched(fn: any) { }
  setDisabledState?(isDisabled: boolean): void {  }
}
