import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { HtmlComponent } from '../html-component.class';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ButtonComponent),
    multi: true
  }]
})
export class ButtonComponent extends HtmlComponent {
  // @Input() id = '';
  // @Input() placeholderText = '';
  // @Output() triggerChange = new EventEmitter();

  // public bindFunc(data: any): void {
    // this.triggerChange.emit(data);
  // }
}