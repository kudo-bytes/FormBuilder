import { 
  ChangeDetectionStrategy, 
  ChangeDetectorRef, 
  Component, 
  ElementRef, 
  OnInit, 
  ViewChild
} from '@angular/core';
import { Unsub } from '../service/unsub.class';
import { map, takeUntil } from 'rxjs';
import { FormElement, OptionField } from '../service/interfaces';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { 
  addOption, 
  removeOption, 
  removeFormElement,
  updateFormElement,
} from '../state/formbuilder/formbuilder.actions';
import { selectFormElements } from '../state/formbuilder/formBuilder.selectors';
import { SendElementIdService } from '../service/send-element-id.service';

@Component({
  selector: 'app-element-fields',
  templateUrl: './element-fields.component.html',
  styleUrls: ['./element-fields.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ElementFieldsComponent extends Unsub implements OnInit {
  @ViewChild('option') optionInput!: ElementRef;
  currentElement: FormElement | undefined = undefined;
  
  constructor(
    private store: Store<AppState>, 
    public receiveId: SendElementIdService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super()
  }

  changeCurrentElement(id: string) {
    this.store.select(selectFormElements)
      .pipe(
        map((arr) => {
          return arr.filter((item: FormElement) => item.id === id)[0]
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((item) => {
        this.currentElement = item;
      });
    this.changeDetectorRef.markForCheck()
  }
  
  ngOnInit() {
    this.receiveId.share
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe((id) => {
        id ? this.changeCurrentElement(id) : false;
      })
  }
  
  changeField(obj: OptionField) {
    this.store.dispatch(updateFormElement(obj))
  }

  addOption(selectId: string, value: string) {
    const id = Date.now().toString();

    this.store.dispatch(addOption({selectId, content: {id: id, content: value}}));

    this.optionInput.nativeElement.value = '';
  }

  removeOption(selectId: string, optionId: string) {
    this.store.dispatch(removeOption({selectId, optionId }));
  }

  removeElement(id: string) {
    this.store.dispatch(removeFormElement({ id }));
  }
 }
