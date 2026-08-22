// Generated from github.com/bububa/kwai-marketing-api/model/appcenter/app/release_list.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface ReleaseListRequestInit {
  advertiser_id?: KuaishouId;
  list_type?: number;
  platform?: string;
  app_ids?: KuaishouId[];
  key_word?: string;
  page?: number;
  page_size?: number;
}

export class ReleaseListRequest implements PostRequest, ReleaseListRequestInit {
  advertiser_id?: KuaishouId;
  list_type?: number;
  platform?: string;
  app_ids?: KuaishouId[];
  key_word?: string;
  page?: number;
  page_size?: number;

  constructor(init: ReleaseListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.list_type = init.list_type;
    this.platform = init.platform;
    this.app_ids = init.app_ids;
    this.key_word = init.key_word;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "gw/dsp/appcenter/app/release/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      list_type: this.list_type,
      platform: this.platform,
      app_ids: this.app_ids,
      key_word: this.key_word,
      page: this.page,
      page_size: this.page_size,
    });
  }
}
