import { Track } from "./Track";
import { ExternalUrls } from "./share/ExternalUrls";
import { Followers } from "./share/Followers";
import { Image } from "./share/Image";
import { UserPublic } from "./User";
import { PagingObject } from "./share/PagingObject";

export interface PlaylistTrack {
    added_at: string;
    added_by: {
      external_urls: ExternalUrls;
      href: string;
      id: string;
      type: string;
      uri: string;
      name?: string;
    };
    is_local: boolean;
    primary_color: null;
    track: Track;
    video_thumbnail: {
      url: null;
    };
  }

  export interface Playlist {
    collaborative: boolean;
    description?: string;
    external_urls: ExternalUrls;
    followers: Followers;
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: UserPublic;
    public: boolean;
    snapshot_id: string;
    tracks: PagingObject<PlaylistTrack>;
    type: string;
    uri: string;
  }