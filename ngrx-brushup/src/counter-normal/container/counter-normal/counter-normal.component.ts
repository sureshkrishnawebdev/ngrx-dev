import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-counter-normal',
  templateUrl: './counter-normal.component.html',
  styleUrls: ['./counter-normal.component.scss']
})
export class CounterNormalComponent implements OnInit {


  // properties
  countValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onIncrementCount(): void{
    this.countValue++;
  }

  onDecrementCount(): void{
    this.countValue--;
  }

  onResetCount(): void{
    this.countValue = 0;
  }

}
