// Generated from github.com/bububa/kwai-marketing-api/model/native/photo_list_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface PhotoListRequestInit {
  author_id?: KuaishouId;
  advertiser_id?: KuaishouId;
  pcursor?: string;
  count?: number;
  kol_user_type?: number;
  campaign_type?: number;
  tab_type?: number;
}

export class PhotoListRequest implements PostRequest, PhotoListRequestInit {
  author_id?: KuaishouId;
  advertiser_id?: KuaishouId;
  pcursor?: string;
  count?: number;
  kol_user_type?: number;
  campaign_type?: number;
  tab_type?: number;

  constructor(init: PhotoListRequestInit = {}) {
    this.author_id = init.author_id;
    this.advertiser_id = init.advertiser_id;
    this.pcursor = init.pcursor;
    this.count = init.count;
    this.kol_user_type = init.kol_user_type;
    this.campaign_type = init.campaign_type;
    this.tab_type = init.tab_type;
  }

  path() {
    return "gw/dsp/v1/native/photo/list";
  }

  encode() {
    return jsonMarshal({
      author_id: this.author_id,
      advertiser_id: this.advertiser_id,
      pcursor: this.pcursor,
      count: this.count,
      kol_user_type: this.kol_user_type,
      campaign_type: this.campaign_type,
      tab_type: this.tab_type,
    });
  }
}
