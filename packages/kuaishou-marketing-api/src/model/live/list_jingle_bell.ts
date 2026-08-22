// Generated from github.com/bububa/kwai-marketing-api/model/live/list_jingle_bell.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface ListJingleBellRequestInit {
  advertiser_id?: KuaishouId;
  current_page?: number;
  page_size?: number;
  live_user_id?: KuaishouId;
}

export class ListJingleBellRequest implements PostRequest, ListJingleBellRequestInit {
  advertiser_id?: KuaishouId;
  current_page?: number;
  page_size?: number;
  live_user_id?: KuaishouId;

  constructor(init: ListJingleBellRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.current_page = init.current_page;
    this.page_size = init.page_size;
    this.live_user_id = init.live_user_id;
  }

  path() {
    return "gw/dsp/v1/jingle_bell/live_user_bind_list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      current_page: this.current_page,
      page_size: this.page_size,
      live_user_id: this.live_user_id,
    });
  }
}

export interface JingleBell {
  conversion_type?: number;
  active?: boolean;
  jingle_bell_status?: number;
  jingle_bell_id?: string;
  ios_app_id?: KuaishouId;
  android_app_id?: KuaishouId;
}

export interface ListJingleBellResponse {
  total_count?: number;
  jingle_bell_list?: JingleBell[];
}
