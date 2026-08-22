// Generated from github.com/bububa/kwai-marketing-api/model/file/ad_video_share.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface AdVideoShareRequestInit {
  advertiser_id?: KuaishouId;
  photo_ids?: string[];
  share_advertiser_ids?: KuaishouId[];
}

export class AdVideoShareRequest implements PostRequest, AdVideoShareRequestInit {
  advertiser_id?: KuaishouId;
  photo_ids?: string[];
  share_advertiser_ids?: KuaishouId[];

  constructor(init: AdVideoShareRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.photo_ids = init.photo_ids;
    this.share_advertiser_ids = init.share_advertiser_ids;
  }

  path() {
    return "v1/file/ad/video/share";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      photo_ids: this.photo_ids,
      share_advertiser_ids: this.share_advertiser_ids,
    });
  }
}

export interface AdVideoShareResponse {
  details?: AdVideoShareDetail[];
}

export interface AdVideoShareDetail {
  advertiser_id?: KuaishouId;
  photo_id?: KuaishouId;
  original_photo_id?: KuaishouId;
}
