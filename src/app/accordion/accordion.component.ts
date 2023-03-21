import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.sass']
})
export class AccordionComponent {
  items = ['Form General Styling', 'Field styling'];
  expandedIndex = 0;
}