import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="diaply-grid">
      <div >
          <div class="diaply-grid">
            <h4>Counter Compoenent</h4>
          </div>
          <div >
            <div class="diaply-flex">
            <button class="btn btn-primary margin-extra">Increment</button>
            <button class="btn btn-primary margin-extra">Decrement</button>
            <button class="btn btn-primary margin-extra">Reset</button>
            </div>
            <div class="diaply-grid">
            <span>{{count}}</span>
            </div>
          </div>
      </div>
    </main>
  `,
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public count:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
