// Generated from github.com/bububa/kwai-marketing-api/model/file/ad_video_get.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface AdVideoGetRequestInit {
  advertiser_id?: KuaishouId;
  photo_ids?: string[];
}

export class AdVideoGetRequest implements PostRequest, AdVideoGetRequestInit {
  advertiser_id?: KuaishouId;
  photo_ids?: string[];

  constructor(init: AdVideoGetRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.photo_ids = init.photo_ids;
  }

  path() {
    return "v1/file/ad/video/get";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      photo_ids: this.photo_ids,
    });
  }
}
