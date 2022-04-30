import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-counter-normal',
  templateUrl: './counter-normal.component.html',
  styleUrls: ['./counter-normal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterNormalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
