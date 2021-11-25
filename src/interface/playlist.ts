import { Creator } from './creator';
import {RespBase} from './response'

export interface PlaylistResp extends RespBase {
  playlists: Playlist[];
  total:     number;
}

export interface Playlist {
  name:                  string;
  id:                    number;
  trackNumberUpdateTime: number;
  status:                number;
  userId:                number;
  createTime:            number;
  updateTime:            number;
  subscribedCount:       number;
  trackCount:            number;
  cloudTrackCount:       number;
  coverImgUrl:           string;
  coverImgId:            number;
  description:           string;
  tags:                  string[];
  playCount:             number;
  trackUpdateTime:       number;
  specialType:           number;
  totalDuration:         number;
  creator:               Creator;
  tracks:                any[];
  subscribers:           Creator[];
  subscribed:            null;
  commentThreadId:       string;
  newImported:           boolean;
  adType:                number;
  highQuality:           boolean;
  privacy:               number;
  ordered:               boolean;
  coverStatus:           number;
  recommendInfo:         null;
  shareCount:            number;
  coverImgId_str:        string;
  alg:                   string;
  commentCount:          number;
}