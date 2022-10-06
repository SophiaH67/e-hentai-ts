import ITorrent from './ITorrent';

export interface IGMetadata {
  gid: number;
  token: string;
  archiver_key: string;
  title: string;
  title_jpn: string;
  category: string;
  thumb: string;
  uploader: string;
  posted: string;
  filecount: string;
  filesize: number;
  expunged: boolean;
  rating: string;
  torrentcount: string;
  torrents: ITorrent[];
  tags: string[];
  parent_gid: string;
  parent_key: string;
  first_gid: string;
  first_key: string;
}
