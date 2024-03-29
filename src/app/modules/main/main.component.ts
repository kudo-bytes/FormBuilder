import { 
  ChangeDetectionStrategy, 
  Component 
} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MainComponent {}
