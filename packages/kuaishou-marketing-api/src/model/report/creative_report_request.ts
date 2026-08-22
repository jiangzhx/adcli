// Generated from github.com/bububa/kwai-marketing-api/model/report/creative_report_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface CreativeReportRequestInit {
  campaign_ids?: KuaishouId[];
  campaign_type?: number;
  unit_ids?: KuaishouId[];
  creative_ids?: KuaishouId[];
}

export class CreativeReportRequest implements PostRequest, CreativeReportRequestInit {
  campaign_ids?: KuaishouId[];
  campaign_type?: number;
  unit_ids?: KuaishouId[];
  creative_ids?: KuaishouId[];

  constructor(init: CreativeReportRequestInit = {}) {
    this.campaign_ids = init.campaign_ids;
    this.campaign_type = init.campaign_type;
    this.unit_ids = init.unit_ids;
    this.creative_ids = init.creative_ids;
  }

  path() {
    return "v1/report/creative_report";
  }

  encode() {
    return jsonMarshal({
      campaign_ids: this.campaign_ids,
      campaign_type: this.campaign_type,
      unit_ids: this.unit_ids,
      creative_ids: this.creative_ids,
    });
  }
}
