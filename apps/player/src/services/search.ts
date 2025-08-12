import ApiService from './api';

import { Album } from '@/interfaces/albums';
import { Artist } from '@/interfaces/artists';

class SearchServiceClass {
  async filter(query: string) {
    return await ApiService.get<{ artists: Artist[]; albums: Album[] }>(`/search?q=${query}&type=artist,album`);
  }
}

export const SearchService = new SearchServiceClass();
