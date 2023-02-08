import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  template: `
  <button mat-flat-button [color]="color" (click)="onClick()" [disabled]="disabled">
    {{ text }}
  </button>
`,
  styleUrls: ['./shared-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedButtonComponent {
  @Input() disabled: boolean = false
  @Input() text: string = "Button"
  @Input() color: string = "primary"
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>()
  constructor() {}

  onClick() {
    this.buttonClick.emit()
  }
}
