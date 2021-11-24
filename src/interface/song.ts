import { ArtistInfo } from './artist';

export interface SongInfo {
    name: string;
    id: number;
    playedNum: number;
    hearTime: number;
    artists: ArtistInfo[]
}