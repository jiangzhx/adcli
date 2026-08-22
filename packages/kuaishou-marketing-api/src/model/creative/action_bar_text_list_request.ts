// Generated from github.com/bububa/kwai-marketing-api/model/creative/action_bar_text_list_request.go
// Do not edit manually.

import type { GetRequest } from "../request";
import type { KuaishouId } from "../types";
import { encodeQuery } from "../types";

export interface ActionBarTextListRequestInit {
  advertiser_id?: KuaishouId;
  campaign_type?: number;
  consult_type?: number;
}

export class ActionBarTextListRequest implements GetRequest, ActionBarTextListRequestInit {
  advertiser_id?: KuaishouId;
  campaign_type?: number;
  consult_type?: number;

  constructor(init: ActionBarTextListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.campaign_type = init.campaign_type;
    this.consult_type = init.consult_type;
  }

  path() {
    return "v1/creative/action_bar_text/list";
  }

  encode() {
    return encodeQuery({
      advertiser_id: this.advertiser_id == null ? undefined : String(this.advertiser_id),
      campaign_type: this.campaign_type == null ? undefined : String(this.campaign_type),
      consult_type: this.consult_type == null ? undefined : String(this.consult_type),
    });
  }
}
