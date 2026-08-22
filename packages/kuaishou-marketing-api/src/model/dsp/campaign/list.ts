// Generated from github.com/bububa/kwai-marketing-api/model/dsp/campaign/list.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { Campaign } from "./campaign";

export interface ListRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  campaign_name?: string;
  campaign_ids?: KuaishouId[];
  put_status_list?: number[];
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
  campaign_name?: string;
  campaign_ids?: KuaishouId[];
  put_status_list?: number[];
  status?: number;
  start_date?: string;
  end_date?: string;
  time_filter_type?: number;
  page?: number;
  page_size?: number;

  constructor(init: ListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.campaign_id = init.campaign_id;
    this.campaign_name = init.campaign_name;
    this.campaign_ids = init.campaign_ids;
    this.put_status_list = init.put_status_list;
    this.status = init.status;
    this.start_date = init.start_date;
    this.end_date = init.end_date;
    this.time_filter_type = init.time_filter_type;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "gw/dsp/campaign/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      campaign_id: this.campaign_id,
      campaign_name: this.campaign_name,
      campaign_ids: this.campaign_ids,
      put_status_list: this.put_status_list,
      status: this.status,
      start_date: this.start_date,
      end_date: this.end_date,
      time_filter_type: this.time_filter_type,
      page: this.page,
      page_size: this.page_size,
    });
  }
}

export interface ListResponse {
  total_count?: number;
  details?: Campaign[];
}
