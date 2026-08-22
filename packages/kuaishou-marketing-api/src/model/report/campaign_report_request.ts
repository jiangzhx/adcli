// Generated from github.com/bububa/kwai-marketing-api/model/report/campaign_report_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface CampaignReportRequestInit {
  campaign_ids?: KuaishouId[];
  campaign_type?: number;
}

export class CampaignReportRequest implements PostRequest, CampaignReportRequestInit {
  campaign_ids?: KuaishouId[];
  campaign_type?: number;

  constructor(init: CampaignReportRequestInit = {}) {
    this.campaign_ids = init.campaign_ids;
    this.campaign_type = init.campaign_type;
  }

  path() {
    return "v1/report/campaign_report";
  }

  encode() {
    return jsonMarshal({
      campaign_ids: this.campaign_ids,
      campaign_type: this.campaign_type,
    });
  }
}
