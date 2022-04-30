import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterNormalComponent } from './counter-normal.component';

describe('CounterNormalComponent', () => {
  let component: CounterNormalComponent;
  let fixture: ComponentFixture<CounterNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterNormalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
