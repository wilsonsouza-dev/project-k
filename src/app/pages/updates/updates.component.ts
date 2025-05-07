import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-updates',
  imports: [CommonModule],
  templateUrl: './updates.component.html',
})
export class UpdatesComponent {
  updates = [
    {
      title: 'Novo artista: Babymonster',
      description: 'Adicionado o grupo Babymonster com perfil e discografia.',
      date: '05/05/2025',
      category: 'Novo Artista',
    },
    {
      title: 'Função de busca avançada',
      description: 'Agora é possível filtrar artistas por nome.',
      date: '30/04/2025',
      category: 'Nova Funcionalidade',
    },
    {
      title: '🚀 Inicio Desenvolvimento',
      category: 'Novidade',
      date: '23/04/2025',
      description: 'Projeto Iniciado',
    },
  ];
}
