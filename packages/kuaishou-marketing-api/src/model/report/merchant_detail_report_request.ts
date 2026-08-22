// Generated from github.com/bububa/kwai-marketing-api/model/report/merchant_detail_report_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface MerchantDetailReportRequestInit {
  advertiser_id?: KuaishouId;
  view_type?: number;
  group_type?: number;
  start_date?: string;
  end_date?: string;
  campaign_ids?: KuaishouId[];
  unit_ids?: KuaishouId[];
  creative_ids?: KuaishouId[];
  programed_creative_ids?: KuaishouId[];
  page?: number;
  page_size?: number;
}

export class MerchantDetailReportRequest implements PostRequest, MerchantDetailReportRequestInit {
  advertiser_id?: KuaishouId;
  view_type?: number;
  group_type?: number;
  start_date?: string;
  end_date?: string;
  campaign_ids?: KuaishouId[];
  unit_ids?: KuaishouId[];
  creative_ids?: KuaishouId[];
  programed_creative_ids?: KuaishouId[];
  page?: number;
  page_size?: number;

  constructor(init: MerchantDetailReportRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.view_type = init.view_type;
    this.group_type = init.group_type;
    this.start_date = init.start_date;
    this.end_date = init.end_date;
    this.campaign_ids = init.campaign_ids;
    this.unit_ids = init.unit_ids;
    this.creative_ids = init.creative_ids;
    this.programed_creative_ids = init.programed_creative_ids;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "v1/merchant/report/detail_report";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      view_type: this.view_type,
      group_type: this.group_type,
      start_date: this.start_date,
      end_date: this.end_date,
      campaign_ids: this.campaign_ids,
      unit_ids: this.unit_ids,
      creative_ids: this.creative_ids,
      programed_creative_ids: this.programed_creative_ids,
      page: this.page,
      page_size: this.page_size,
    });
  }
}
