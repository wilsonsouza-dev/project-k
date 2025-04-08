import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StandardButtonComponent } from '../../../shared/components/standard-button/standard-button.component';
import { ArtistApiService } from '../../../shared/api/spotify/artist-api.service';
import { Artist } from '../../../shared/model/artist';
import { options } from '../../../shared/data/options';
import { CacheService } from '../../../shared/services/cache.service';

@Component({
  selector: 'app-artist-grid',
  standalone: true, // Componente standalone
  imports: [SharedModule, CommonModule, StandardButtonComponent],
  templateUrl: './artist-grid.component.html',
  styleUrls: ['./artist-grid.component.css'],
})
export class ArtistGridComponent implements OnInit {
  allArtists: Artist[] = []; // Lista completa de artistas
  filteredArtists: Artist[] = []; // Lista filtrada com base no termo de pesquisa
  paginatedArtists: Artist[] = []; // Lista paginada para exibição
  page: number = 0;
  rowsPerPage: number = 6; // 3x3 = 9 artistas por página
  totalRecords: number = 0;
  sortBy: string = 'name';
  sortDirection: string = 'ASC';
  searchTerm: string = ''; // Termo de pesquisa
  isLoading: boolean = true;
  error: string | null = null;
  private readonly cacheKey = 'artistCache';
  constructor(
    private artistApiService: ArtistApiService,
    private router: Router,
    private cacheService: CacheService // Adicione o CacheService se necessário
  ) {}

  ngOnInit() {
    this.loadArtists();
  }

  loadArtists() {
    this.isLoading = true;
    this.error = null;
    const allIds = options.map((item) => item.id).join(','); // Mantém a busca pelos allIds
    const cache = this.cacheService.get<Artist[]>(this.cacheKey);
    if (cache) {
      console.log('✅ Cache HIT:', cache);
      this.allArtists = cache;
      this.filterArtists(); // Filtrar os artistas (inicialmente sem termo de pesquisa)
      this.isLoading = false;
      return;
    }
    this.artistApiService.getSeveralArtist(allIds).subscribe({
      next: (response) => {
        this.allArtists = response;
        this.filterArtists(); // Filtrar os artistas (inicialmente sem termo de pesquisa)
        this.isLoading = false;
        this.cacheService.set(this.cacheKey, this.allArtists); // Armazena no cache
        console.log('❌ Cache MISS - Nova Requisição:', this.allArtists);
      },
      error: (error) => {
        this.error = 'Erro ao carregar os artistas.';
        this.isLoading = false;
        console.error('Erro ao buscar artistas:', error);
      },
    });
  }

  filterArtists() {
    if (!this.searchTerm.trim()) {
      this.filteredArtists = [...this.allArtists]; // Sem filtro, usa todos os artistas
    } else {
      const term = this.searchTerm.trim().toLowerCase();
      this.filteredArtists = this.allArtists.filter((artist) =>
        artist.name.toLowerCase().includes(term)
      );
    }
    this.totalRecords = this.filteredArtists.length; // Atualiza o total para a lista filtrada
    this.sortArtists(); // Reordena a lista filtrada
  }

  sortArtists() {
    this.filteredArtists.sort((a, b) => {
      let comparison = 0;
      if (this.sortBy === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (this.sortBy === 'popularity') {
        comparison = a.popularity - b.popularity;
      }
      return this.sortDirection === 'ASC' ? comparison : -comparison;
    });
    this.page = 0; // Resetar para a primeira página após filtrar ou ordenar
    this.paginateArtists();
  }

  paginateArtists() {
    const startIndex = this.page * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    this.paginatedArtists = this.filteredArtists.slice(startIndex, endIndex);
  }

  onPageChange(event: any) {
    this.page = event.page;
    this.paginateArtists();
  }

  onSortChange() {
    this.page = 0;
    this.sortArtists();
  }

  onSearchChange() {
    this.page = 0; // Resetar para a primeira página ao pesquisar
    this.filterArtists();
  }

  goToArtistProfile(artistId: string) {
    console.log('Navegar para o perfil do artista:', artistId);
    this.router.navigate(['/artist', artistId]);
  }

  openSpotify(url: string) {
    // Ajustado para string, já que external_urls.spotify é uma string
    if (url) {
      window.open(url, '_blank');
    }
  }
}
