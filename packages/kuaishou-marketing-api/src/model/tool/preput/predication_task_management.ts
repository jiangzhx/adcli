// Generated from github.com/bububa/kwai-marketing-api/model/tool/preput/predication_task_management.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface PredicationTaskManagementRequestInit {
  advertiser_id?: KuaishouId;
  management_type?: number;
  predication_ids?: KuaishouId[];
}

export class PredicationTaskManagementRequest implements PostRequest, PredicationTaskManagementRequestInit {
  advertiser_id?: KuaishouId;
  management_type?: number;
  predication_ids?: KuaishouId[];

  constructor(init: PredicationTaskManagementRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.management_type = init.management_type;
    this.predication_ids = init.predication_ids;
  }

  path() {
    return "/gw/dsp/v1/pre_put/predication_task/management";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      management_type: this.management_type,
      predication_ids: this.predication_ids,
    });
  }
}
