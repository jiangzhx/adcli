// Generated from github.com/bububa/kwai-marketing-api/model/file/ad_video_tag_delete.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface AdVideoTagDeleteRequestInit {
  advertiser_id?: KuaishouId;
  photo_tag?: string[];
}

export class AdVideoTagDeleteRequest implements PostRequest, AdVideoTagDeleteRequestInit {
  advertiser_id?: KuaishouId;
  photo_tag?: string[];

  constructor(init: AdVideoTagDeleteRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.photo_tag = init.photo_tag;
  }

  path() {
    return "v1/file/ad/video/tag/delete";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      photo_tag: this.photo_tag,
    });
  }
}
