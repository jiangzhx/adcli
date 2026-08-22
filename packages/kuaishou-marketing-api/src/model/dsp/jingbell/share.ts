// Generated from github.com/bububa/kwai-marketing-api/model/dsp/jingbell/share.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface ShareRequestInit {
  advertiser_id?: KuaishouId;
  live_user_id?: string;
  jing_bell_user_id?: string;
  target_account_ids?: string[];
}

export class ShareRequest implements PostRequest, ShareRequestInit {
  advertiser_id?: KuaishouId;
  live_user_id?: string;
  jing_bell_user_id?: string;
  target_account_ids?: string[];

  constructor(init: ShareRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.live_user_id = init.live_user_id;
    this.jing_bell_user_id = init.jing_bell_user_id;
    this.target_account_ids = init.target_account_ids;
  }

  path() {
    return "gw/dsp/jingBell/share";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      live_user_id: this.live_user_id,
      jing_bell_user_id: this.jing_bell_user_id,
      target_account_ids: this.target_account_ids,
    });
  }
}

export interface ShareResponse {
  result?: number;
  data?: string;
}
