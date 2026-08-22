// Generated from github.com/bububa/kwai-marketing-api/model/campaign/list_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface ListRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  unit_id?: KuaishouId;
  unit_name?: string;
  unit_ids?: KuaishouId[];
  status?: number;
  start_date?: string;
  end_date?: string;
  time_filter_type?: number;
  page?: number;
  page_size?: number;
}

export class ListRequest implements PostRequest, ListRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  unit_id?: KuaishouId;
  unit_name?: string;
  unit_ids?: KuaishouId[];
  status?: number;
  start_date?: string;
  end_date?: string;
  time_filter_type?: number;
  page?: number;
  page_size?: number;

  constructor(init: ListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.campaign_id = init.campaign_id;
    this.unit_id = init.unit_id;
    this.unit_name = init.unit_name;
    this.unit_ids = init.unit_ids;
    this.status = init.status;
    this.start_date = init.start_date;
    this.end_date = init.end_date;
    this.time_filter_type = init.time_filter_type;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "v1/campaign/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      campaign_id: this.campaign_id,
      unit_id: this.unit_id,
      unit_name: this.unit_name,
      unit_ids: this.unit_ids,
      status: this.status,
      start_date: this.start_date,
      end_date: this.end_date,
      time_filter_type: this.time_filter_type,
      page: this.page,
      page_size: this.page_size,
    });
  }
}
