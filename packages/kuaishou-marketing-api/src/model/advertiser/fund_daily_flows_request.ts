// Generated from github.com/bububa/kwai-marketing-api/model/advertiser/fund_daily_flows_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface FundDailyFlowsRequestInit {
  advertiser_id?: KuaishouId;
  start_date?: string;
  end_date?: string;
  page?: number;
  page_size?: number;
}

export class FundDailyFlowsRequest implements PostRequest, FundDailyFlowsRequestInit {
  advertiser_id?: KuaishouId;
  start_date?: string;
  end_date?: string;
  page?: number;
  page_size?: number;

  constructor(init: FundDailyFlowsRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.start_date = init.start_date;
    this.end_date = init.end_date;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "v1/advertiser/fund/daily_flows";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      start_date: this.start_date,
      end_date: this.end_date,
      page: this.page,
      page_size: this.page_size,
    });
  }
}
