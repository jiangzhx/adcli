// Generated from github.com/bububa/kwai-marketing-api/model/file/video_list_by_cursor.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";
import type { Video } from "./video";

export interface VideoListByCursorRequestInit {
  advertiser_id?: KuaishouId;
  cursor?: number;
  limit?: number;
}

export class VideoListByCursorRequest implements PostRequest, VideoListByCursorRequestInit {
  advertiser_id?: KuaishouId;
  cursor?: number;
  limit?: number;

  constructor(init: VideoListByCursorRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.cursor = init.cursor;
    this.limit = init.limit;
  }

  path() {
    return "gw/dsp/video/listByCursor";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      cursor: this.cursor,
      limit: this.limit,
    });
  }
}

export interface VideoListByCursorResponse {
  total_count?: number;
  details?: Video[];
}
