// Generated from github.com/bububa/kwai-marketing-api/model/file/ad_video_share_new.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface AdVideoShareNewRequestInit {
  advertiser_id?: KuaishouId;
  photo_ids?: string[];
  account_ids?: KuaishouId[];
  share_account_type?: number;
}

export class AdVideoShareNewRequest implements PostRequest, AdVideoShareNewRequestInit {
  advertiser_id?: KuaishouId;
  photo_ids?: string[];
  account_ids?: KuaishouId[];
  share_account_type?: number;

  constructor(init: AdVideoShareNewRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.photo_ids = init.photo_ids;
    this.account_ids = init.account_ids;
    this.share_account_type = init.share_account_type;
  }

  path() {
    return "gw/dsp/v1/file/ad/video/share/new";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      photo_ids: this.photo_ids,
      account_ids: this.account_ids,
      share_account_type: this.share_account_type,
    });
  }
}

export interface AdVideoShareNewResponse {
  share_status?: number;
  share_photo_exists?: boolean;
  not_supported_internal_photo?: boolean;
  mismatched_account_list?: number[];
  need_to_try_list?: PhotoShareResult[];
  share_success_list?: PhotoShareResult[];
}

export interface PhotoShareResult {
  account_id?: KuaishouId;
  photo_id?: string;
  original_photo_id?: string;
  share_result?: string;
}
