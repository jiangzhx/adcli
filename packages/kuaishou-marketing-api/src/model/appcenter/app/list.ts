// Generated from github.com/bububa/kwai-marketing-api/model/appcenter/app/list.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { App } from "./app";

export interface ListRequestInit {
  advertiser_id?: KuaishouId;
  list_type?: number;
  platform?: string;
  app_status?: number;
  key_word?: string;
  start_date?: string;
  end_date?: string;
  page?: number;
  page_size?: number;
}

export class ListRequest implements PostRequest, ListRequestInit {
  advertiser_id?: KuaishouId;
  list_type?: number;
  platform?: string;
  app_status?: number;
  key_word?: string;
  start_date?: string;
  end_date?: string;
  page?: number;
  page_size?: number;

  constructor(init: ListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.list_type = init.list_type;
    this.platform = init.platform;
    this.app_status = init.app_status;
    this.key_word = init.key_word;
    this.start_date = init.start_date;
    this.end_date = init.end_date;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "gw/dsp/appcenter/app/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      list_type: this.list_type,
      platform: this.platform,
      app_status: this.app_status,
      key_word: this.key_word,
      start_date: this.start_date,
      end_date: this.end_date,
      page: this.page,
      page_size: this.page_size,
    });
  }
}

export interface ListResponse {
  current_page?: number;
  page_size?: number;
  total_count?: number;
  list?: App[];
}
