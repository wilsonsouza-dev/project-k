import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-standard-button',
  templateUrl: './standard-button.component.html',
  styleUrls: ['./standard-button.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class StandardButtonComponent {
  @Input() label: string = 'Botão'; // Texto do botão
  @Input() color: 'primary' | 'secondary' | 'danger' | 'success' = 'primary'; // Cor do botão
  @Input() icon: string | null = null; // Ícone (opcional, pode ser uma classe de ícone ou SVG)
  @Input() disabled: boolean = false; // Estado desabilitado
  @Output() onClick = new EventEmitter<void>(); // Evento emitido ao clicar

  handleClick() {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }
}
