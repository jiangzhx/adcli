// Generated from github.com/bububa/kwai-marketing-api/model/tool/app_search_request.go
// Do not edit manually.

import type { GetRequest } from "../request";
import type { KuaishouId } from "../types";
import { encodeQuery } from "../types";

export interface AppSearchRequestInit {
  advertiser_id?: KuaishouId;
  app_name?: string;
}

export class AppSearchRequest implements GetRequest, AppSearchRequestInit {
  advertiser_id?: KuaishouId;
  app_name?: string;

  constructor(init: AppSearchRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.app_name = init.app_name;
  }

  path() {
    return "v1/tool/app/search";
  }

  encode() {
    return encodeQuery({
      advertiser_id: this.advertiser_id == null ? undefined : String(this.advertiser_id),
      app_name: this.app_name == null ? undefined : String(this.app_name),
    });
  }
}
