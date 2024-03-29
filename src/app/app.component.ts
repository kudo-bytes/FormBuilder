import { Component } from '@angular/core';
import { AuthService } from './modules/auth/services/auth.service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent {
  constructor(private authService: AuthService) {}
}
