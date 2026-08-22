// Generated from github.com/bububa/kwai-marketing-api/model/creative/list_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface ListRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  unit_id?: KuaishouId;
  creative_id?: string;
  creative_name?: string;
  creative_ids?: KuaishouId[];
  status?: number;
  start_date?: string;
  end_date?: string;
  time_filter_type?: number;
  page?: number;
  page_size?: number;
  actionbar_click_url?: string;
  review_status_list?: number[];
  put_status_list?: number[];
}

export class ListRequest implements PostRequest, ListRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  unit_id?: KuaishouId;
  creative_id?: string;
  creative_name?: string;
  creative_ids?: KuaishouId[];
  status?: number;
  start_date?: string;
  end_date?: string;
  time_filter_type?: number;
  page?: number;
  page_size?: number;
  actionbar_click_url?: string;
  review_status_list?: number[];
  put_status_list?: number[];

  constructor(init: ListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.campaign_id = init.campaign_id;
    this.unit_id = init.unit_id;
    this.creative_id = init.creative_id;
    this.creative_name = init.creative_name;
    this.creative_ids = init.creative_ids;
    this.status = init.status;
    this.start_date = init.start_date;
    this.end_date = init.end_date;
    this.time_filter_type = init.time_filter_type;
    this.page = init.page;
    this.page_size = init.page_size;
    this.actionbar_click_url = init.actionbar_click_url;
    this.review_status_list = init.review_status_list;
    this.put_status_list = init.put_status_list;
  }

  path() {
    return "v1/creative/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      campaign_id: this.campaign_id,
      unit_id: this.unit_id,
      creative_id: this.creative_id,
      creative_name: this.creative_name,
      creative_ids: this.creative_ids,
      status: this.status,
      start_date: this.start_date,
      end_date: this.end_date,
      time_filter_type: this.time_filter_type,
      page: this.page,
      page_size: this.page_size,
      actionbar_click_url: this.actionbar_click_url,
      review_status_list: this.review_status_list,
      put_status_list: this.put_status_list,
    });
  }
}
