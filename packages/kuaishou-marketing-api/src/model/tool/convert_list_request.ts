// Generated from github.com/bububa/kwai-marketing-api/model/tool/convert_list_request.go
// Do not edit manually.

import type { GetRequest } from "../request";
import type { KuaishouId } from "../types";
import { encodeQuery } from "../types";

export interface ConvertListRequestInit {
  advertiser_id?: KuaishouId;
  type?: number;
  page?: number;
  page_size?: number;
}

export class ConvertListRequest implements GetRequest, ConvertListRequestInit {
  advertiser_id?: KuaishouId;
  type?: number;
  page?: number;
  page_size?: number;

  constructor(init: ConvertListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.type = init.type;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "v1/tool/convert/list";
  }

  encode() {
    return encodeQuery({
      advertiser_id: this.advertiser_id == null ? undefined : String(this.advertiser_id),
      type: this.type == null ? undefined : String(this.type),
      page: this.page == null ? undefined : String(this.page),
      page_size: this.page_size == null ? undefined : String(this.page_size),
    });
  }
}
