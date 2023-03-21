import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormElement } from '../ts/interfaces';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.sass']
})
export class FormBuilderComponent {
  // todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  todo: FormElement[] = [];


  drop(event: CdkDragDrop<FormElement[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  selectElement(el: FormElement) {
    console.log(el)
  }
}
