import { create } from 'zustand';

import { Track } from '@/interfaces/track';

type Song = Pick<Track, 'name' | 'duration_ms'> & { image: string; artist: string };

type ControlsStore = {
  track: Song | null;
  setTrack: (track: Song) => void;
};

const useControlsStore = create<ControlsStore>(set => ({
  track: {
    name: 'P do Pecado - Ao Vivo',
    duration_ms: 100000,
    image: 'https://i.scdn.co/image/ab67616d000048513eb9bb75e0b5472777ba0291',
    artist: 'Grupo Menos É Mais'
  },
  setTrack: track => set({ track })
}));

export default useControlsStore;
