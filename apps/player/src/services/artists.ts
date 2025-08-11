import ApiService from './api';

import { Artist } from '@/interfaces/artists';

const IDS_TOP_WORLD_ARTISTS = [
  '06HL4z0CvFAxyc27GXpf02',
  '75i9GaW2MJUgt4BkdUnuUY',
  '3TVXtAsR1Inumwj472S9r4',
  '1Xyo4u8uXC1ZmMpatF05PJ',
  '66CXWjxzNUsdJxJ2JdwvnR',
  '7gJN8W0589FisSYJS17K54',
  '6eUKZXaKkcviH0Ku9w2n3V',
  '7dGJo4pcD2V6oG8kP0tJRR',
  '1uNFoZAHBGtllmzznpCI3s',
  '6vTqEFbTtTRJsuIpzZgjxi',
  '5K4W6rqBFWDnAN6FQUkS6x',
  '7MiDcPa6UiV3In7lIM71IN'
];

class ArtistsServiceClass {
  async getArtists() {
    return await ApiService.get<{ artists: Artist[] }>('/artists', {
      ids: IDS_TOP_WORLD_ARTISTS.join(',')
    });
  }
}

const ArtistsService = new ArtistsServiceClass();

export default ArtistsService;
