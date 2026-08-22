// Generated from github.com/bububa/kwai-marketing-api/model/v2.2/creative/list_advanced_creative_request.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface AdvancedCreativeListRequestInit {
  advertiser_id?: KuaishouId;
  unit_ids?: KuaishouId[];
  package_name?: string;
  status?: number;
  start_date?: string;
  end_date?: string;
  time_filter_type?: number;
  page?: number;
  page_size?: number;
  put_status_list?: number[];
}

export class AdvancedCreativeListRequest implements PostRequest, AdvancedCreativeListRequestInit {
  advertiser_id?: KuaishouId;
  unit_ids?: KuaishouId[];
  package_name?: string;
  status?: number;
  start_date?: string;
  end_date?: string;
  time_filter_type?: number;
  page?: number;
  page_size?: number;
  put_status_list?: number[];

  constructor(init: AdvancedCreativeListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.unit_ids = init.unit_ids;
    this.package_name = init.package_name;
    this.status = init.status;
    this.start_date = init.start_date;
    this.end_date = init.end_date;
    this.time_filter_type = init.time_filter_type;
    this.page = init.page;
    this.page_size = init.page_size;
    this.put_status_list = init.put_status_list;
  }

  path() {
    return "gw/dsp/advanced_creative/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      unit_ids: this.unit_ids,
      package_name: this.package_name,
      status: this.status,
      start_date: this.start_date,
      end_date: this.end_date,
      time_filter_type: this.time_filter_type,
      page: this.page,
      page_size: this.page_size,
      put_status_list: this.put_status_list,
    });
  }
}
