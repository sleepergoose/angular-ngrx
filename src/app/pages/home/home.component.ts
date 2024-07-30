import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  currentDate: WritableSignal<string> = signal(new Date().toJSON());
}
