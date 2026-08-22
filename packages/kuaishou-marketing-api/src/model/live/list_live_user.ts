// Generated from github.com/bububa/kwai-marketing-api/model/live/list_live_user.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface ListLiveUserRequestInit {
  advertiser_id?: KuaishouId;
  current_page?: number;
  page_size?: number;
  audit_status_list?: number[];
  live_user_type_list?: number[];
  live_user_ids?: number[];
}

export class ListLiveUserRequest implements PostRequest, ListLiveUserRequestInit {
  advertiser_id?: KuaishouId;
  current_page?: number;
  page_size?: number;
  audit_status_list?: number[];
  live_user_type_list?: number[];
  live_user_ids?: number[];

  constructor(init: ListLiveUserRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.current_page = init.current_page;
    this.page_size = init.page_size;
    this.audit_status_list = init.audit_status_list;
    this.live_user_type_list = init.live_user_type_list;
    this.live_user_ids = init.live_user_ids;
  }

  path() {
    return "gw/dsp/v1/live_manage/get_live_users";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      current_page: this.current_page,
      page_size: this.page_size,
      audit_status_list: this.audit_status_list,
      live_user_type_list: this.live_user_type_list,
      live_user_ids: this.live_user_ids,
    });
  }
}

export interface ListLiveUserResponse {
  total_count?: number;
  live_user_list?: LiveUser[];
}

export interface LiveUser {
  live_user_type?: number;
  living?: boolean;
  account_id?: KuaishouId;
  audit_status?: number;
  live_user_id?: KuaishouId;
}
