// Generated from github.com/bububa/kwai-marketing-api/model/file/ad_video_delete.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface AdVideoDeleteRequestInit {
  advertiser_id?: KuaishouId;
  photo_ids?: string[];
}

export class AdVideoDeleteRequest implements PostRequest, AdVideoDeleteRequestInit {
  advertiser_id?: KuaishouId;
  photo_ids?: string[];

  constructor(init: AdVideoDeleteRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.photo_ids = init.photo_ids;
  }

  path() {
    return "gw/dsp/file/ad/video/delete";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      photo_ids: this.photo_ids,
    });
  }
}

export interface AdVideoDeleteResponse {
  photo_ids?: string[];
}
