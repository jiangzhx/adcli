// Generated from github.com/bububa/kwai-marketing-api/model/tool/preput/predication_task_detail.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface PredicationTaskDetailsRequestInit {
  advertiser_id?: KuaishouId;
  predication_id?: KuaishouId;
  ocpx_action_type?: number;
}

export class PredicationTaskDetailsRequest implements PostRequest, PredicationTaskDetailsRequestInit {
  advertiser_id?: KuaishouId;
  predication_id?: KuaishouId;
  ocpx_action_type?: number;

  constructor(init: PredicationTaskDetailsRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.predication_id = init.predication_id;
    this.ocpx_action_type = init.ocpx_action_type;
  }

  path() {
    return "/gw/dsp/v1/pre_put/predication_task/details";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      predication_id: this.predication_id,
      ocpx_action_type: this.ocpx_action_type,
    });
  }
}

export interface AdPredicationTaskDetail {
  predication_id?: KuaishouId;
  predication_time?: number;
  photo_url?: string;
  photo_predication_status?: number;
  photo_pushed_status?: number;
  title?: string;
  duration?: number;
  ocpx_action_type?: number;
  content_quality?: number;
  photo_id?: KuaishouId;
  content_quality_promot?: string;
  content_duplicate_promot?: string;
  content_duplicate?: boolean;
}
