// Generated from github.com/bububa/kwai-marketing-api/model/file/ad_video_update.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface AdVideoUpdateRequestInit {
  advertiser_id?: KuaishouId;
  photo_ids?: string[];
  photo_name?: string;
  photo_tag?: string[];
}

export class AdVideoUpdateRequest implements PostRequest, AdVideoUpdateRequestInit {
  advertiser_id?: KuaishouId;
  photo_ids?: string[];
  photo_name?: string;
  photo_tag?: string[];

  constructor(init: AdVideoUpdateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.photo_ids = init.photo_ids;
    this.photo_name = init.photo_name;
    this.photo_tag = init.photo_tag;
  }

  path() {
    return "v1/file/ad/video/update";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      photo_ids: this.photo_ids,
      photo_name: this.photo_name,
      photo_tag: this.photo_tag,
    });
  }
}

export interface AdVideoUpdateResponse {
  photo_ids?: string[];
}
