// Generated from github.com/bububa/kwai-marketing-api/model/appcenter/subpkg/release_list.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface ReleaseListRequestInit {
  advertiser_id?: KuaishouId;
  app_id?: KuaishouId;
  key_word?: string;
  page?: number;
  page_size?: number;
}

export class ReleaseListRequest implements PostRequest, ReleaseListRequestInit {
  advertiser_id?: KuaishouId;
  app_id?: KuaishouId;
  key_word?: string;
  page?: number;
  page_size?: number;

  constructor(init: ReleaseListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.app_id = init.app_id;
    this.key_word = init.key_word;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "gw/dsp/appcenter/subPackage/release/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      app_id: this.app_id,
      key_word: this.key_word,
      page: this.page,
      page_size: this.page_size,
    });
  }
}
