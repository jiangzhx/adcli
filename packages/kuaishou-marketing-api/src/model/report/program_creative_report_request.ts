// Generated from github.com/bububa/kwai-marketing-api/model/report/program_creative_report_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface ProgramCreativeReportRequestInit {
  campaign_ids?: KuaishouId[];
  unit_ids?: KuaishouId[];
}

export class ProgramCreativeReportRequest implements PostRequest, ProgramCreativeReportRequestInit {
  campaign_ids?: KuaishouId[];
  unit_ids?: KuaishouId[];

  constructor(init: ProgramCreativeReportRequestInit = {}) {
    this.campaign_ids = init.campaign_ids;
    this.unit_ids = init.unit_ids;
  }

  path() {
    return "v1/report/program_creative_report";
  }

  encode() {
    return jsonMarshal({
      campaign_ids: this.campaign_ids,
      unit_ids: this.unit_ids,
    });
  }
}
