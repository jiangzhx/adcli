// Generated from github.com/bububa/kwai-marketing-api/model/dsp/video/query_auto_share_switch.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface QueryAutoShareSwitchRequestInit {
  advertiser_id?: KuaishouId;
}

export class QueryAutoShareSwitchRequest implements PostRequest, QueryAutoShareSwitchRequestInit {
  advertiser_id?: KuaishouId;

  constructor(init: QueryAutoShareSwitchRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
  }

  path() {
    return "gw/dsp/video/queryAutoShareSwitch";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
    });
  }
}

export interface QueryAutoShareSwitchResponse {
  switch_status?: boolean;
  user_id?: KuaishouId;
}
