import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'counter-buttons',
    template:`

    <button type="button" class="btn-primary" (click)="onIncrementCounter()"> + </button>
    <button type="button" class="btn-warning" (click)="onDecrementCounter()">  - </button>
    <button type="button" class="btn-info" (click)="onResetCounter()">  Reset </button>

    `,
    styles:[
        `
        button {
            height: 50px;
            width: 50px;
            text-align: center;
            border-radius: 5%;
            border: none;
            margin: 10px;
        }

        `
    ]
})
export class CounterButtonsComponent {

    // decorators
    @Output() incrementEvent = new EventEmitter<void>();
    @Output() decrementEvent = new EventEmitter<void>();
    @Output() resetEvent = new EventEmitter<void>();

    onIncrementCounter(): void{
        this.incrementEvent.emit();
    }    

    onDecrementCounter(): void{
        this.decrementEvent.emit();
    }    

    onResetCounter(): void{
        this.resetEvent.emit();
    }

}