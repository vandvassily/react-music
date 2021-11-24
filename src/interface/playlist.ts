import { Creator } from './creator';

export interface Playlist {
  name: string;
  id: number;
  trackNumberUpdateTime: number;
  status: number;
  userId: number;
  createTime: number;
  updateTime: number;
  subscribedCount: number;
  trackCount: number;
  cloudTrackCount: number;
  coverImgUrl: string;
  coverImgId: number;
  description: string;
  tags: string[];
  playCount: number;
  trackUpdateTime: number;
  specialType: number;
  totalDuration: number;
  creator: Creator;
  tracks?: any;
  subscribers: any;
  commentThreadId: string;
  adType: number;
  privacy: number;
  coverStatus: number;
  recommendInfo: any;
  shareCount: number;
  coverImgId_str: string;
  alg: string;
  commentCount: number;
}
