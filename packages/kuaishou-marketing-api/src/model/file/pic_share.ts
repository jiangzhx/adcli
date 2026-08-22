// Generated from github.com/bububa/kwai-marketing-api/model/file/pic_share.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface PicShareRequestInit {
  advertiser_id?: KuaishouId;
  pic_ids?: string[];
  image_tokens?: string[];
  share_advertiser_ids?: KuaishouId[];
  share_account_type?: number;
}

export class PicShareRequest implements PostRequest, PicShareRequestInit {
  advertiser_id?: KuaishouId;
  pic_ids?: string[];
  image_tokens?: string[];
  share_advertiser_ids?: KuaishouId[];
  share_account_type?: number;

  constructor(init: PicShareRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.pic_ids = init.pic_ids;
    this.image_tokens = init.image_tokens;
    this.share_advertiser_ids = init.share_advertiser_ids;
    this.share_account_type = init.share_account_type;
  }

  path() {
    return "gw/dsp/v1/pic/share";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      pic_ids: this.pic_ids,
      image_tokens: this.image_tokens,
      share_advertiser_ids: this.share_advertiser_ids,
      share_account_type: this.share_account_type,
    });
  }
}

export interface PicShareResponse {
  details?: PicShareResult[];
}

export interface PicShareResult {
  advertiser_id?: KuaishouId;
  image_token?: string;
  pic_id?: string;
}
