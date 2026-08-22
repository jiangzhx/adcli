// Generated from github.com/bububa/kwai-marketing-api/model/comment/shield_info_list.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface ShieldInfoListRequestInit {
  advertiser_id?: KuaishouId;
  page?: number;
  page_size?: number;
  shield_type_list?: number[];
}

export class ShieldInfoListRequest implements PostRequest, ShieldInfoListRequestInit {
  advertiser_id?: KuaishouId;
  page?: number;
  page_size?: number;
  shield_type_list?: number[];

  constructor(init: ShieldInfoListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.page = init.page;
    this.page_size = init.page_size;
    this.shield_type_list = init.shield_type_list;
  }

  path() {
    return "v1/comment/shield_info/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      page: this.page,
      page_size: this.page_size,
      shield_type_list: this.shield_type_list,
    });
  }
}

export interface ShieldInfoListResponse {
  total_count?: number;
  details?: ShieldInfo[];
}

export interface ShieldInfo {
  shield_info_id?: KuaishouId;
  shield_type?: number;
  shield_content?: string;
}
