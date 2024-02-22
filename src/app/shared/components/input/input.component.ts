import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
let identifier = 0;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input() name: string | 'This';
  @Input() type: 'text' | 'email' | 'password' | 'number' | 'textarea';
  @Input() required: boolean;
  @Input() placeholder: string = '';
  @Input() taborder: number;
  @Input() readonly: boolean;
  @Input() minlength = 0;
  @Input() maxlength = 500;
  @Input() defaultValue = '';
  @Input() isPrefix: boolean;
  @Input() prefixType: string;
  @Input() prefixContent: string;
  @Input() isSuffix: boolean;
  @Input() suffixType: string;
  @Input() suffixContent: string;
  @Input() isHint: boolean;
  @Input() hintText: string;
  @Input() isReadOnly: boolean;
  @Input() isDisabled: boolean;
  @Input() isFloatLabel = true;
  @Input() label: string;
  @Input() isNumeric: boolean;
  @Input() dividerColor = '';
  @Input() patternType = 'alpha'; // ['Alpha', 'Alpha-Numeric', 'Numeric', 'Email','SpacialChar']
  @Input() customPattern = ''; // ['^[a-zA-Z_-]$','^[a-zA-Z0-9_-]$',^[0-9_-]$,'','','','','','']
  @Input() fieldValue: any;
  @Input() showErrors: boolean;
  @Input() errorStatus: FormGroup;
  @Input() inputClass: string;

  public identifier = `form-text-${identifier++}`;
  public empty: string = '';
  focused: boolean;
  inputId = 0;
  _editor: any;
  @Input() _value: any;
  //@Input() inputValue?: string;
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

  writeValue(value: any): void {
    if (value !== undefined) {
      this.value = value;
    }
  }
  registerOnChange(fn: (value: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: any) { }

  setDisabledState?(isDisabled: boolean): void {

  }

}
