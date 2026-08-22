// Generated from github.com/bububa/kwai-marketing-api/model/target/template_list_request.go
// Do not edit manually.

import type { GetRequest } from "../request";
import type { KuaishouId } from "../types";
import { encodeQuery } from "../types";

export interface TemplateListRequestInit {
  advertiser_id?: KuaishouId;
  page?: number;
  page_size?: number;
}

export class TemplateListRequest implements GetRequest, TemplateListRequestInit {
  advertiser_id?: KuaishouId;
  page?: number;
  page_size?: number;

  constructor(init: TemplateListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "v1/target/template/list";
  }

  encode() {
    return encodeQuery({
      advertiser_id: this.advertiser_id == null ? undefined : String(this.advertiser_id),
      page: this.page == null ? undefined : String(this.page),
      page_size: this.page_size == null ? undefined : String(this.page_size),
    });
  }
}
