import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  imports: [],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.css',
})
export class CounterComponent {
  protected count = signal(0);

  increment(): void {
    this.count.update(value => value + 1);
  }
}
