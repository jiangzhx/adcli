// Generated from github.com/bububa/kwai-marketing-api/model/report/unit_report_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface UnitReportRequestInit {
  campaign_ids?: KuaishouId[];
  campaign_type?: number;
  unit_ids?: KuaishouId[];
}

export class UnitReportRequest implements PostRequest, UnitReportRequestInit {
  campaign_ids?: KuaishouId[];
  campaign_type?: number;
  unit_ids?: KuaishouId[];

  constructor(init: UnitReportRequestInit = {}) {
    this.campaign_ids = init.campaign_ids;
    this.campaign_type = init.campaign_type;
    this.unit_ids = init.unit_ids;
  }

  path() {
    return "v1/report/unit_report";
  }

  encode() {
    return jsonMarshal({
      campaign_ids: this.campaign_ids,
      campaign_type: this.campaign_type,
      unit_ids: this.unit_ids,
    });
  }
}
