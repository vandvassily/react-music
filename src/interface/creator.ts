export interface Creator {
  defaultAvatar:       boolean;
  province:            number;
  authStatus:          number;
  followed:            boolean;
  avatarUrl:           string;
  accountStatus:       number;
  gender:              number;
  city:                number;
  birthday:            number;
  userId:              number;
  userType:            number;
  nickname:            string;
  signature:           string;
  description:         string;
  detailDescription:   string;
  avatarImgId:         number;
  backgroundImgId:     number;
  backgroundUrl:       string;
  authority:           number;
  mutual:              boolean;
  expertTags:          string[] | null;
  experts:             { [key: string]: string } | null;
  djStatus:            number;
  vipType:             number;
  remarkName:          null;
  authenticationTypes: number;
  avatarDetail:        AvatarDetail | null;
  avatarImgIdStr:      string;
  backgroundImgIdStr:  string;
  anchor:              boolean;
  avatarImgId_str?:    string;
}

export interface AvatarDetail {
  userType:        number;
  identityLevel:   number;
  identityIconUrl: string;
}
