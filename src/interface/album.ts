import {ArtistInfo} from './artist'

export interface AlbumInfo {
  name: string;
  id: number;
  type: string;
  size: number;
  picId: number;
  blurPicUrl: 'http://p3.music.126.net/RWWNKI7O2T6w5QKxpK7K8g==/109951166636313796.jpg';
  companyId: number;
  pic: number;
  picUrl: string;
  publishTime: number;
  description: string;
  tags: string;
  company: string;
  briefDesc: string;
  artist: ArtistInfo;
  commentThreadId: string;
  artists: ArtistInfo[];
  subType: string;
  picId_str: string;
}
