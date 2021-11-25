import {ArtistInfo} from './artist'

export interface AlbumInfo {
  name: string;
  id: number;
  type: string;
  size: number;
  picId: number;
  blurPicUrl: string;
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
