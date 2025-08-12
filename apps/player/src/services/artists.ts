import ApiService from './api';

import { Album } from '@/interfaces/albums';
import { Artist } from '@/interfaces/artists';
import { Pagination } from '@/interfaces/pagination';
import { Track } from '@/interfaces/track';

class ArtistsServiceClass {
  async listArtists() {
    return await ApiService.get<{ artists: Artist[] }>('/artists');
  }

  async getArtist(id: string) {
    return await ApiService.get<Artist>(`/artists/${id}`);
  }

  async getTopTracks(id: string) {
    return await ApiService.get<{ tracks: Track[] }>(`/artists/${id}/top-tracks`);
  }

  async getAlbums(id: string, offset: number) {
    return await ApiService.get<{ items: Album[] } & Pagination>(`/artists/${id}/albums?offset=${offset}`);
  }
}

const ArtistsService = new ArtistsServiceClass();

export default ArtistsService;
