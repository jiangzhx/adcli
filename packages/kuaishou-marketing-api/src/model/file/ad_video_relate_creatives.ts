// Generated from github.com/bububa/kwai-marketing-api/model/file/ad_video_relate_creatives.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface AdVideoRelateCreativesRequestInit {
  advertiser_id?: KuaishouId;
  photo_ids?: string[];
}

export class AdVideoRelateCreativesRequest implements PostRequest, AdVideoRelateCreativesRequestInit {
  advertiser_id?: KuaishouId;
  photo_ids?: string[];

  constructor(init: AdVideoRelateCreativesRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.photo_ids = init.photo_ids;
  }

  path() {
    return "v1/file/ad/video/relate/creatives";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      photo_ids: this.photo_ids,
    });
  }
}

export interface AdVideoRelateCreativesResponse {
  related_creatives?: AdVideoRelatedCreatives[];
}

export interface AdVideoRelatedCreatives {
  photo_id?: string;
  creatives?: AdVideoRelatedCreative[];
  creative_count?: number;
  advanced_creative_ids?: KuaishouId[];
  advanced_creative_count?: number;
}

export interface AdVideoRelatedCreative {
  creative_id?: KuaishouId;
  creative_name?: string;
}
