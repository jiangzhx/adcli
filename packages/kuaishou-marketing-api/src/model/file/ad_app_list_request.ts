// Generated from github.com/bububa/kwai-marketing-api/model/file/ad_app_list_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface AdAppListRequestInit {
  advertiser_id?: KuaishouId;
  app_ids?: KuaishouId[];
  page?: number;
  page_size?: number;
}

export class AdAppListRequest implements PostRequest, AdAppListRequestInit {
  advertiser_id?: KuaishouId;
  app_ids?: KuaishouId[];
  page?: number;
  page_size?: number;

  constructor(init: AdAppListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.app_ids = init.app_ids;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "v2/file/ad/app/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      app_ids: this.app_ids,
      page: this.page,
      page_size: this.page_size,
    });
  }
}
